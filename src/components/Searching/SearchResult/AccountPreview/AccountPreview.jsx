import React from 'react';
import { NavLink } from 'react-router-dom';
import noPhoto from '../../../../img/ico/icoForMes__defPhoto.png'

function AccountPreview (props) {
    let smallPhoto = (photo) => {if (photo!=null){
        return photo
        } else {
        return noPhoto    
        }
    }


    return (
        <div className="account-preview">
            <NavLink to={`/home/${props.user.id}`} className="account-preview__header">
                <div className="account-preview__ava account__ava">
                    <img src={smallPhoto(props.user.photos.small)} alt="ava"/>
                </div>
                <div className="account-preview__name account__name">{props.user.name}</div>
            </NavLink>
            <div className="account-preview__interaction">
                <div className="account-preview__button button-follow">
                    { props.user.followed ? <button onClick={ () => props.onUnfollowing(props.user.id)} >Unfollow</button> : <button onClick={ () => props.onFollowing(props.user.id)} >Follow</button>}
                </div>
            </div>
        </div>
    )
}

export default AccountPreview;