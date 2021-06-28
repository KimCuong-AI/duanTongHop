import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {
        return (
            // console.log(hinhAnh)
            <div>
                <div className='row'>
                    <div className="col-4 text-center">
                        <button className=" btn btn-danger display-4">
                            <div className="display-4 p-5" onClick={() => {
                                this.props.chonTaiXiu(true)
                            }}>TÀI</div>
                        </button>
                    </div>
                    <div className='col-4 text-center'>
                        {/* <img src={this.props.mangXucXac[0].hinhAnh} alt='conco'/> */}
                        {
                            this.props.mangXucXac.map((item, index) => {
                                return <img src={item.hinhAnh} height={50} width={50} />
                            })
                        }
                    </div>
                    <div className="col-4 text-center">
                        <button className="btn  btn-dark display-4">
                            <div className="display-4 p-5" onClick={() => {
                                this.props.chonTaiXiu(false)
                            }}>XỈU</div>
                        </button>
                    </div>

                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.XucXacReducer.mangXucXac,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (taiXiu) => {
            const action = {
                type: 'CHON_TAI_XIU',
                ketQuaChon: taiXiu
            }
            dispatch(action)

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XucXac)
