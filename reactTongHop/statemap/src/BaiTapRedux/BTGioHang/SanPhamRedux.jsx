import React, { Component } from 'react'
//kết nối với reducerGioHang
import { connect } from 'react-redux';



class SanPhamRedux extends Component {
    render() {
        const { sanPham } = this.props
        return <div className="card text-white bg-primary">
            <img className="card-img-top" src={sanPham.hinhAnh} width={300} height={350} />
            <div className="card-body">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <p className="card-text">{sanPham.giaBan}</p>
                <button onClick={() => {
                    this.props.themGioHang(sanPham)
                }}>Thêm giỏ hàng</button>
            </div>
        </div>
    }
}


// xây dựng hàm tạo ra prop là hàm xử lý sự kiện => đưa dữ liệu lên store
const mapDispatchTopProps = (dispatch) => {
    return {
        //tạo ra props component(là function=> đưa dữ liệu lên store);
        themGioHang: (san) => {
            const spGioHangg = {...san,soLuong:1}
            //tạo action đưa dữ liệu lên reducer
            const action = {
                type: 'THEM_GIO_HANG',//bắt buộc
                spGioHang: spGioHangg// nội dung gửi lên reducer

            }
            console.log(action)
            //dùng hàm dispatch đưa dữ liệu action lên reducer
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchTopProps)(SanPhamRedux)