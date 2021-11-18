import 'react-router-dom';
import './index.css';
import {HashRouter, Route} from 'react-router-dom';
import React from 'react'
import Home from './components/Home/Home';
import SearchingConteiner from './components/Searching/SearchingConteiner'; 
import HeaderConteiner from './components/Header/HeaderConteiner';
import Authorization from './components/Authorization/Authorization';
import { connect } from 'react-redux';
import {initializationApp } from './state/thunk';
import { getAuth, getInitialization } from './state/selects';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import PreloadPage from './components/General/PreloadPage/PreloadPage';

class App extends React.Component {

  componentDidMount(){
   this.props.isAuthInit()
  }

  render(){
    console.log(this.props.initialization, this.props.profile)
    return (
      this.props.initialization ?
        <React.Suspense>
          <HashRouter id={2}>
            <div className="App">
              <HeaderConteiner/>
              <Route path="/home/:userId?" render={() => <Home dispatch={this.props.dispatch} appState={this.props.appState} />} ></Route>
              <Route path="/dialogs" render={() => <DialogsConteiner dispatch={this.props.dispatch} appState={this.props.appState} />} ></Route>
              <Route path="/searching" render={() => <SearchingConteiner/>} ></Route>
              <Route path="/auth" render={() => <Authorization/>} ></Route>
            </div>
          </HashRouter>
        </React.Suspense>
      :
      <React.Suspense>
        <PreloadPage id={1}/>
      </React.Suspense>
  );
  }
}

let mapStoreToProps = (state) => {
  return{
    initialization: getInitialization(state), 
    profile: getAuth(state)
  }
};
let mapDispatchToProps = {
    isAuthInit: initializationApp
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
