import React from 'react'
import Post from './Post'
import Header from './Header'

const Profile = () => {
  return (
    <>
        <Header />
        <div className='container'>
            <h1>Profile</h1>

            <div className='profile'>
                <div className='user'>
                    <span>Name</span> <br></br>Nadeem Hasan
                </div>
                <div className='user'>
                    <span>Address</span> <br></br>nadee@gmail.com | 7678402770
                </div>
            </div>
             <Post />
        </div>
    </>
  )
}

export default Profile