// import React from 'react';
// import {HashRouter, Route, Switch} from 'react-router-dom';
// import Home from './home';
// import Detail from './detail';


// const BasicRouter = () => (
//     <HashRouter>
//         <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route exact path="/detail" component={Detail}/>
//         </Switch>
//     </HashRouter>
// );



import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
// import mChildren from '../pages/mChildren';
import MainLayout from '../pages/MainLayout';

const BasicRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/index" component={MainLayout} />
            {/* <Route exact path="/index/children" component={mChildren} /> */}
        </Switch>
    </HashRouter>
);

export default BasicRouter;