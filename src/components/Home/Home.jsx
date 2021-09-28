import React from 'react';
import './home.css'
import HomeBoard from './HomeBoard/HomeBoard';
import InfoBlock from './InfoBlock/InfoBlock';
import PostConteiner from './Posts/PostsConteiner';

function Home (props) {
    return (
        <div className='home_page app_page'>
            <HomeBoard/>
            <InfoBlock/>
            <PostConteiner dispatch={props.dispatch} posts={props.appState.getState().home_reduser.posts} postInput={props.appState.getState().home_reduser.postInput}/>
            <div className="home_footer">2222225555</div>
        </div>
    )
}

export default Home;