import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//Components
import App from './App';
import RegisterChild from './components/forChild/RegisterChild';
import AddGift from './components/forChild/AddGift';
import ChildListGift from './components/forChild/ChildListGift';
import ListGift from './components/forLutin/ListGift';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/child/register" component={RegisterChild} />
        <Route path="/child/add-gift" component={AddGift} />
        <Route path="/child/my-list" component={ChildListGift} />
        <Route path="/lutin/list-gift" component={ListGift} />
        {/* Usually, every app contain a 404 page */}
        {/* <Route component={404} /> */}
      </div>
    </Router>
  )

ReactDOM.render(
    routing, 
    document.getElementById('root')
);

serviceWorker.unregister();