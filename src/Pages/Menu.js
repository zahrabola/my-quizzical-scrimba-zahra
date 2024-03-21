import React from 'react';

const Menu = (props) => {
    return (
        <div className='menu'>
            <h1>Quizzical</h1>
            <span className='menudescription'>
                Description
            </span>
            <button className='startbtn' onClick={() => props.starting()}>Start</button>
            menu
        </div>
    );
}

export default Menu;
