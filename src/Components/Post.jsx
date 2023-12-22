import React from 'react';

const Post = ({ post }) => {
  return (
    <div className='post'>
      <div className='user'>
        <h3 className='title'>
          <strong>{post.title}</strong>
        </h3>
        <p className='content'>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;