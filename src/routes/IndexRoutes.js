import React from 'react';
import {Route, Switch} from "react-router-dom";
import Mchildren from '../pages/Mchildren';

export default class IndexRoutes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/index/children" component={Mchildren} />
            </Switch>
        )
    }
}