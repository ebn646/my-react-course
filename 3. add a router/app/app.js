import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { App as default };