import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../DataContext';
import Post from './Post';
import Header from './Header';

const Profile = () => {
  const { userId } = useParams();
  const { users } = useData();
  const user = users.find((user) => user.id === parseInt(userId, 10));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <Header />
      <div className='container'>
        <h1>Profile</h1>

        <div className='profile'>
          <div className='user'>
            <span>Name</span> <br></br>
            {user.name}
          </div>
          <div className='user'>
            <span>Address</span> <br></br>
            {user.email} | {user.phone}
          </div>
        </div>
        
        <div className='posts-container'>
          <Post />
        </div>
        
      </div>
    </>
  );
};

export default Profile;