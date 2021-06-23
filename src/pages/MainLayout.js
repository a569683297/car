import React from 'react';
import IndexRoutes from '../routes/IndexRoutes'

export default class MainLayout extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className='main-layout'>
                <span>父组件</span>
                <button onClick={() => this.props.history.push({
                        pathname: '/index/children',
                })}>通过函数跳转</button>
                <IndexRoutes {...this.props}/>
            </div>
            
        );
    }
}