import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe=`@keyframes randomItem${Date.now()}{
            from {top:0px;}
            to {top:100px;}
        }`
        return (
            <div className='text-center playerGame'>
                <style>
                    {keyframe}
                </style>
                <div className='theThink' style={{position:'relative'}}>
                    <img style={{position:'absolute',animation:`randomItem${Date.now()} 0.1s`,top:'30px',right:'80px',transform:'rotate(120deg)'}} width={75} height={75} src={this.props.computer.hinhAnh}/>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./img/gameOanTuTi/playerComputer.png' />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        computer:state.BaiTapOanTuTiReducer.computer,
    }
}
export default connect(mapStateToProps)(Computer)