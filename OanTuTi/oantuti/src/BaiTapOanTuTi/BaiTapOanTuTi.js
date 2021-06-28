import React, { Component } from 'react'
import '../assets/styles/components/BaiTapOanTuTi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import ThongTinTroChoi from './ThongTinTroChoi'
import { connect } from 'react-redux'

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className='gameOanTuTi '>
                <div className='row text-center mt-4'>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                        <KetQuaTroChoi />
                        <button className="btn btn-success p-2 display-4 mt-5" onClick={() => {
                            this.props.playGame()
                        }}>
                            Play game
                        </button>

                    </div>
                    <div className='col-4'> 
                        <Computer />
                    </div>

                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            //khai bao ham lap di lap lai
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'

                })
                count++;
                if (count > 10) {
                    //dừng hàm setInterval
                    clearInterval(randomComputerItem)
                    dispatch({
                        type:'END_GAME',
                    })
                }
                //cho nó chạy 10 lần
            }, 50)

        }

    }
}
export default connect(null, mapDispatchToProps)(BaiTapOanTuTi)