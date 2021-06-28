import React, { Component } from 'react'

export default class ThuNghiem extends Component {
    handleOnclick=(message)=>{
        console.log(message)
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.handleOnclick("hi")}>Show message</button>
                
            </div>
        )
    }
}
