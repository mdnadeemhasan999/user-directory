import React from 'react';
import { useData } from '../DataContext';

const Home = () => {
  const { users, postCounts } = useData();

  return (
    <>
      <div className='container'>
        <h1>Directory</h1>
        {users.map((user) => (
          <div className='users' key={user.id}>
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