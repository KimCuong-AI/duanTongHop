// khỏi tạo giá trị ban đầu của store
const stateGioHang = {
    gioHang: [
        { maSP: 1, tenSP: 'IphoneX', hinhAnh: './img/applephone.jpg', soLuong: 1, giaBan: 1000, thanhTien: 1000 }
    ]
}
export const GioHangReducer = (state = stateGioHang, action) => {
    // console.log("reducer", action)
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //xử lý logic thêm giỏ hàng  
            let gioHangCapNhat = []
            gioHangCapNhat = [...state.gioHang];
            let index = state.gioHang.findIndex(spGH =>
                spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat;

            return { ...state };
        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            //xóa giỏ hàng dựa vào index
            gioHangCapNhat.splice(action.index, 1);
            //gán giỏ hàng mới cho state.gioHang => render lại giao diện
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
        case 'XOA_GIO_HANG_MSP': {
            let gioHangCapNhat = [...state.gioHang];
            //tìm index sp dựa vào mã sp
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if (index !== -1) {
                //xóa giỏ hàng dựa vào index
                gioHangCapNhat.splice(action.index, 1);
            }

            //gán giỏ hàng mới cho state.gioHang => render lại giao diện
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
        case 'TANG_GIAM_SL': {
            let { index, tangGiam } = action;
            console.log(action)
            //xử lý tăng giảm số lượng
            let gioHangCapNhat = [...state.gioHang];
            if (tangGiam) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                if (gioHangCapNhat[index].soLuong > 1) {
                    gioHangCapNhat[index].soLuong -= 1;
                }
            }
            //cập nhật lại state của GioHangReducer
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
    }
    return state
}
