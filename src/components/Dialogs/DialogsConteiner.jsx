import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getAuth } from '../../state/selects';
import Dialogs from './Dialogs';
import './dialogs.css'

class DialogsConteiner extends React.Component {
    render(){
        console.log(this.props.isAuth)
        return(<Dialogs {...this.props}/>)
    }
}


let mapStoreToProps = (state) => {
    return{
        dialogsPage: state.dialogs_reduser,
        isAuth: getAuth(state)
    }
},
mapDispatchToProps = (dispatch)=> {
    return{
        
    }
}

export default compose(
    connect(mapStoreToProps, null),
    WithAuthRedirect
)(DialogsConteiner)