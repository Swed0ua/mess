import 'react-router-dom';
import './index.css';
import {BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Dialogs from './components/Dialogs/Dialogs';
import SearchingConteiner from './components/Searching/SearchingConteiner'; 
import HeaderConteiner from './components/Header/HeaderConteiner';
import Authorization from './components/Authorization/Authorization';

function App(props) {

  return (
      <BrowserRouter>
        <div className="App">
          <HeaderConteiner/>
          <Route path="/home/:userId?" render={() => <Home dispatch={props.dispatch} appState={props.appState} />} ></Route>
          <Route path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} appState={props.appState} />} ></Route>
          <Route path="/searching" render={() => <SearchingConteiner/>} ></Route>
          <Route path="/auth" render={() => <Authorization/>} ></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
