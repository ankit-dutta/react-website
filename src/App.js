import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import  Sidebar  from './components/Sidebar';
import './App.css';
import Assessment from './pages/Assessment';
import Dashboard from './pages/Dashboard';
import Underconstruction from './pages/Underconstruction';
import Home from './pages/Home';




function App() {
  return (
    <BrowserRouter>
    <div className='main-container'>
    <div className='sidebar-section'>
     <Sidebar />
    </div>
    <div>
    <Switch>
    <Route path = "/" component = {Home} exact/>
      <Route path = "/dashboard" component = {Dashboard} exact/>
      <Route path = "/assessment" component = {Assessment} exact/>
      <Route path = "/support" component = {Underconstruction} exact />
      <Route path = "/parent" component = {Underconstruction} exact />
      <Route path = "/plans" component = {Underconstruction} exact/>
      <Route path = "/log" component = {Home} exact />



      
    </Switch>
    </div>
    </div>
      
     
    </BrowserRouter>
  );
}

export default App;
