import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div className='text-center'>
                <div className='display-4'>
                    bạn chọn:<span className='text-danger'>{this.props.ketQuaChon ? 'tai' : 'xiu'}</span>
                </div>
                <div className='display-4'>
                    số bàn thắng:<span className='text-danger'>{this.props.soBanThang}</span>
                </div>
                <div className='display-4'>
                    số bàn chơi:<span className='text-danger'>{this.props.tongSoBanChoi}</span>
                </div>
                <div className='display-4'>
                    <button className='btn btn-success display-4'>
                        <span className='display-4 p-2' onClick={()=>{
                            this.props.playGame()
                        }}>play game</span>
                    </button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ketQuaChon: state.XucXacReducer.ketQuaChon,
        soBanThang: state.XucXacReducer.soBanThang,
        tongSoBanChoi: state.XucXacReducer.tongSoBanChoi,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            const action = {
                type: 'PLAY_GAME',

            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KetQua)