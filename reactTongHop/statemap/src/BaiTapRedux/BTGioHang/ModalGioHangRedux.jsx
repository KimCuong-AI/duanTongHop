import React, { Component } from 'react'


// kết nối redux (connect hàm kết nối reactComponent - reduxStore)
import { connect } from 'react-redux'
class ModalGioHangRedux extends Component {
    renderGioHang = () => {
        return this.props.gioHan.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>


                <td><img src={spGH.hinhAnh} width={75} height={120} /></td>
                <td>{spGH.giaBan}</td>
                {/* <td>{spGH.soLuong}</td> */}
                <td>
                    
                    <button onClick={()=>this.props.tangGiamSoLuong(index,true)}>+</button> 
                    &nbsp; {spGH.soLuong} &nbsp;
                    <button onClick={()=>this.props.tangGiamSoLuong(index,false)}>-</button> 
                </td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td><button className="btn-danger" onClick={() => {
                    this.props.xoaGioHangIndex(index)
                }}>Xóa</button></td>
                <td><button className="btn-danger" onClick={() => {
                    this.props.xoaGioHangMaSP(spGH.maSP)
                }}>Xóa mã SP</button></td>


            </tr>
        })
    }
    render() {
        //this.props.gioHang là thuộc tính nhận từ redux
        console.log(this.props.gioHan)
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình Ảnh</th>
                            <th>Giá Bán</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <td colSpan="5"></td>
                        <th>Tổng tiền</th>
                        <th>{(this.props.gioHan.reduce((tongTien,spGioHang,index)=>{
                            return tongTien+=spGioHang.soLuong*spGioHang.giaBan;
                        },0)).toLocaleString()}</th>
                    </tfoot>

                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        gioHan: state.GioHangReducer.gioHang //=>tạo ra 1 props  component modalGioHangRedux
    }
}


const mapDispatchTopProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA_GIO_HANG',
                index
            }
            // console.log(action)

            //đưa action lên reducer
            dispatch(action)
        },
        xoaGioHangMaSP: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG_MSP',
                maSP
            }
            // console.log(action)

            //đưa action lên reducer
            dispatch(action)
        },
        tangGiamSoLuong: (index, tangGiam) => {
            const action = {
                type:'TANG_GIAM_SL',
                index,
                tangGiam
            }
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps, mapDispatchTopProps)(ModalGioHangRedux)
