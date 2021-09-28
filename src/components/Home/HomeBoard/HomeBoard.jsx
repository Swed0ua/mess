import React from 'react';

function HomeBoard (props) {
    return (
        <div className="home-board BlockTemplate">
            <div className="home-board_bakground">
                <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
            </div>
            <div className="home-board_footer">
                <h1 className="home-board_user-name user-name H1">User First</h1>
            </div>
            <div className="ava_back">
                <div className="home-board_checkButton"></div>
                <div className="home-board_ava">
                    <img  className="ava_photo" src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                </div>
            </div>
        </div>
)
}

export default HomeBoard;