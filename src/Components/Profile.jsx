import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../DataContext';
import Header from './Header';
import Post from './Post';

const Profile = () => {
  const { userId } = useParams();
  const { users, posts } = useData();
  const user = users.find((user) => user.id === parseInt(userId, 10));

  if (!user) {
    return <div>User not found</div>;
  }

  // Filter posts for the specific user
  const userPosts = posts.filter((post) => post.userId === user.id);

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
          {userPosts.map((post) => (
            <Post post={post}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;