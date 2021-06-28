import React, { Component } from 'react'

export default class GioHang extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((sanPham, index) => {
            return (
                <tr>
                    <td>{sanPham.maSP}</td>
                    <td><img src={sanPham.hinhAnh} width={50} height={50} /></td>
                    <td>{sanPham.tenSP}</td>
                    <td>
                        <button className="btn btn-success mr-2" onClick={() => {
                            this.props.tangGiam(sanPham.maSP, +1)
                        }}>+</button>
                        {sanPham.soLuong}
                        <button className="btn btn-success ml-2" onClick={() => {
                            this.props.tangGiam(sanPham.maSP, -1)
                        }}>-</button>
                    </td>
                    <td>{sanPham.giaBan}</td>
                    <td>{(sanPham.giaBan * sanPham.soLuong).toLocaleString()}</td>
                    <td>
                        <button className="btn btn-danger mt-2" onClick={() => {
                            this.props.xoaGioHang(sanPham)
                        }}  >xóa</button>
                    </td>
                </tr>
            )
        })

    }
    tinhTongSL = () => {
        let tong = 0;
        for (let value of this.props.gioHang) {
            tong += value.soLuong
            console.log(value.soLuong)

        }
        return tong
    }
    render() {
        return (






            // <!-- Button trigger modal -->
            <div>
                <div className="text-right mt-3">
                    <button type="button" className="btn btn-dark btn-lg " data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart-arrow-down"></i>
                    </button>  {this.tinhTongSL()}
                </div>

                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ width: "1000px" }}>
                            <div className="modal-header">
                                <h3 className="modal-title">Danh Sách giỏ hàng</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="container">
                                    <div className="text-right">

                                    </div>
                                    <table className="table">

                                        <thead>
                                            <tr>
                                                <th>Mã sp</th>
                                                <th>Hình Ảnh</th>
                                                <th>Tên Sản Phẩm</th>
                                                <th>Số lượng</th>
                                                <th>Giá Bán</th>
                                                <th>Thành Tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>


                                        <tbody>
                                            {/* {this.props.gioHang} */}
                                            {this.renderGioHang()}

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
