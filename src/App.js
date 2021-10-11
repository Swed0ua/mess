import 'react-router-dom';
import './index.css';
import {BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Dialogs from './components/Dialogs/Dialogs';
import SearchingConteiner from './components/Searching/SearchingConteiner'; 
import HeaderConteiner from './components/Header/HeaderConteiner';

function App(props) {

  return (
      <BrowserRouter>
        <div className="App">
          <HeaderConteiner/>
          <Route path="/home" render={() => <Home dispatch={props.dispatch} appState={props.appState} />} ></Route>
          <Route path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} appState={props.appState} />} ></Route>
          <Route path="/searching" render={() => <SearchingConteiner/>} ></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
