import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Initial from './InitialPage/initial'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
var indexCss=require("./index.css");


class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Initial}></Route>
                            <Route path="/initial" component={Initial}></Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
