import React from 'react';

function AccountPreview (props) {
    let smallPhoto = (photo) => {if (photo!=null){
        return photo
        } else {
        return 'https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
        }
    }
    return (
        <div className="account-preview">
                    <div className="account-preview__header">
                        <div className="account-preview__ava account__ava">
                            <img src={smallPhoto(props.user.photos.small)} alt="ava"/>
                        </div>
                        <div className="account-preview__name account__name">{props.user.name}</div>
                    </div>
                    <div className="account-preview__interaction">
                        <div className="account-preview__button button-follow">
                            { props.user.followed ? <button onClick={ () => props.onUnfollowing(props.user.id)} >Unfollow</button> : <button onClick={ () => props.onFollowing(props.user.id)} >Follow</button>}
                        </div>
                    </div>
                </div>
    )
}

export default AccountPreview;