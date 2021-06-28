import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
     let {sanPham}=this.props;
     let {xemhiTiet}=this.props;
     let {themGioHang}=this.props;

        return (
            <div>
                  <div className="card text-white bg-dark">
                                <img className="card-img-top " height={350} src={sanPham.hinhAnh} alt />
                                <div className="card-body text-left">
                                    <h4 className="card-title">{sanPham.tenSP}</h4>
                                    <p className="card-text">{sanPham.giaBan}</p>
                                    <button className="btn btn-success mr-2" onClick={()=>{
                                        xemhiTiet(sanPham)
                                    }}>xem chi tiết</button>
                                    <button className="btn btn-primary" onClick={()=>{
                                        themGioHang(sanPham)
                                    }}>thêm giỏ hàng</button>
                                </div>
                            </div>
            </div>
        )
    }
}
