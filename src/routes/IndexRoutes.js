import React from 'react';
import {Route, Switch} from "react-router-dom";
import mChildren from '../pages/mChildren';

export default class IndexRoutes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/index/children" component={mChildren} />
            </Switch>
        )
    }
}