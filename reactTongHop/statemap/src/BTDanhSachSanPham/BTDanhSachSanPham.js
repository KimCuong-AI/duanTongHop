import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPham from './SanPham'

export default class BTDanhSachSanPham extends Component {

    dataProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]
    state = {
        gioHang: [
                   {maSP:'1',tenSP:'Iphone',giaBan:1000,soLuong:2,hinhAnh:"https://picsum.photos/200"},
            {maSP:'2',tenSP:'Iphone2',giaBan:2000,soLuong:2,hinhAnh:"https://picsum.photos/200"},

        ],
        xemChiTiet: {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    }

    // renderSanPham = () => {
    //     return this.dataProduct.map((sanPham, index) => {

    //     })
    // }
    xemChiTiet = (sanPhamclick) => {
        this.setState({
            xemChiTiet: sanPhamclick
        })
    }
    themGioHang = (sanPhamClick) => {
        const spGioHang = { ...sanPhamClick, soLuong: 1 };
        let gioHangCapNhat = this.state.gioHang;
        let index = gioHangCapNhat.findIndex(sp => {
            return sp.maSP === sanPhamClick.maSP
        })
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang)
        }


        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    xoaGioHang = (sanPhamXoa) => {
        let gioHangCapNhat = this.state.gioHang;
        let index = gioHangCapNhat.findIndex(sp =>
            sp.maSP === sanPhamXoa.maSP
        )
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1)
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    tangGiam = (maSP, soLuong) => {
        let gioHangCapNhat = this.state.gioHang;
        let index = gioHangCapNhat.findIndex((sp) => {
            return sp.maSP === maSP
        })
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += soLuong;
            if (gioHangCapNhat[index].soLuong < 1) {
                gioHangCapNhat[index].soLuong -= soLuong;
            }
        }
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }

    render() {
        let { maSP, tenSP, manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, rom, giaBan, hinhAnh } = this.state.xemChiTiet
        return (
            <div className="container">

                <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiam={this.tangGiam} />

                <h1 className="text-center">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.dataProduct.map((sanPham, index) => {
                        return <div className="col-4" key={index}>
                            <SanPham sanPham={sanPham} xemhiTiet={this.xemChiTiet} themGioHang={this.themGioHang} />
                        </div>
                    })}
                </div>


                <div className="row mt-2">
                    <div className="col-4 ">
                        <img src={hinhAnh} className="w-100" />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">thông tin sản phẩm</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>{tenSP}</th>
                                </tr>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
