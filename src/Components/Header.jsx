import React from 'react'

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='back'>
                <button className='btn'>Back</button>
            </div>
            <div className='pause'>
                <label for="dropdown">Country</label>
                    <select id="dropdown">
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                        <option value="grape">Grape</option>
                    </select>  
                <p>clock</p>
                <button className='pause-btn'>Pause/Start</button>
            </div>
        </div>
    </>
  )
}

export default Header