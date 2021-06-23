import React from 'react';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a href="#/">回到home11</a>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props.match.params);
        console.log(this.props.history.location.state);
    }

}