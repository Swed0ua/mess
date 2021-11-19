import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { onChangePopUpStatus } from '../../state/thunk';
import './home.css'
import HomeBoardConteiner from './HomeBoard/HomeBoardConteiner';
import InfoBlock from './InfoBlock/InfoBlock';
import PostConteiner from './Posts/PostsConteiner';

function Home (props) {

    let dispatch = useDispatch()

    return (
        <div className='home_page app_page'>
            <HomeBoardConteiner/>
            <button onClick={()=>dispatch(onChangePopUpStatus(true))} >POP-UP Open</button>
            <InfoBlock/>
            <PostConteiner dispatch={props.dispatch} posts={props.appState.getState().home_reduser.posts} postInput={props.appState.getState().home_reduser.postInput}/>
            <div className="home_footer">2222225555</div>
        </div>
    )
}

export default Home;