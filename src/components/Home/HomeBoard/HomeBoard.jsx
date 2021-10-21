import React from 'react';
import StatusArea from './StatusArea/StatusArea';

function HomeBoard (props) {

    let userPhoto = props.profile.photos.large;

    return (
        <div className="home-board BlockTemplate">
            <div className="home-board_bakground">
                <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
            </div>
            <div className="home-board_footer">
                <h1 className="home-board_user-name user-name H1">{props.profile.fullName}</h1>
                <StatusArea 
                            statusInput={props.state.statusInput}
                            text={props.state.statusText}
                            onActiveStatusInput={props.onActiveStatusInput}
                            onUpdateStatus={props.onUpdateStatus}
                            onChangeInputStatus={props.onChangeInputStatus}
                            />
            </div>
            <div className="ava_back">
                <div className="home-board_checkButton"></div>
                <div className="home-board_ava">
                    <img  className="ava_photo" src={userPhoto}></img>
                </div>
            </div>
        </div>
)
}

export default HomeBoard;