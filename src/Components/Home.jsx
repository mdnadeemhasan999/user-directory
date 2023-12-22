import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';

const Home = () => {
  const { users, postCounts } = useData();
  const navigate = useNavigate();
  const handleProfileClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <>
      <div className='container'>
        <h1>Directory</h1>
        {users.map((user) => (
          <div className='users' key={user.id} onClick={() => handleProfileClick(user.id)}>
            <div className='user'>
              <span>Name:</span> {user.name}
            </div>
            <div className='user'>
              <span>Post:</span> {postCounts[user.id] || 0}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;