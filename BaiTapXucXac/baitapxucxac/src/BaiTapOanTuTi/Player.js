import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        return (
            <div className='text-center playerGame'>
                <div className='theThink '>
                    <img className='mt-4' style={{ transform: 'rotate(120deg)' }} width={75} height={75} src={(this.props.mangDatCuoc.find(item => item.datCuoc)).hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./img/gameOanTuTi/player.png' />
                <div className='row game'>
                    {this.props.mangDatCuoc.map((item, index) => {
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' }
                        }
                        return <div className='col-4' >
                            <button className='btnItem' style={border} onClick={() => {
                            this.props.chonKeoBuaBao(item.ma)
                        }}>
                                <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh}  />
                            </button>

                        </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        chonKeoBuaBao: (macuoc) => {
            const action = {
                type: "CHON_KEO_BUA_BAO",
                macuoc,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
