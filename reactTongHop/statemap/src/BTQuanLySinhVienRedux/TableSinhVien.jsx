import React, { Component } from 'react'
import { connect } from 'react-redux'

 class TableSinhVien extends Component {
    renderSinhVien=()=>{
    const {mang}=this.props;
    return mang.map((sinhVien,index)=>{
        return (
            <tr key={index}>
                <td>{sinhVien.maSV}</td>
                <td>{sinhVien.hoTen}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>{sinhVien.email}</td>
            </tr>
        )
    })
    }
    render() {
        return (
            <div className="container">
               <table className="table">
                   <thead>
                       <tr className='bg-dark text-white'>
                           <th>Mã SV</th>
                           <th>Họ Tên</th>
                           <th>Số điện thoại</th>
                           <th>Email</th>
                       </tr>
                   </thead>
                 <tbody>
                     {this.renderSinhVien()}
                 </tbody>
               </table>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        mang:state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps,null)(TableSinhVien)
