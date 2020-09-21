import React from 'react';
import ApplicationForm from './components/ApplicationForm';
import { BrowserRouter, Route } from 'react-router-dom';
import ApplicationList from './components/ApplicationList';

function App(props){
  return(
    <BrowserRouter>
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

        <h2>Your Job Application</h2>
        <Route path="/" component={ApplicationForm} exact={true}></Route>
        <Route path="/admin" component={ApplicationList} exact={true}></Route>
      </div>
    </BrowserRouter>
    
  )
}

export default App;