const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/gameOanTuTi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameOanTuTi/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man, i love you 3000!!! ",
    soBanThang: 0,
    soBanChoi: 0,
    computer:

        { ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png' },


}
export const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            console.log(action)
            let mangCapNhat = [...state.mangDatCuoc];
            // mangCapNhat = mangCapNhat.map((item, index) => {
            //     return { ...item, datCuoc: false }
            // })
            // let index = mangCapNhat.findIndex((item) => {
            //     return item.ma === action.macuoc
            // })
            // if (index !== -1) {
            //     mangCapNhat[index].datCuoc = true;
            // }


            mangCapNhat = mangCapNhat.map((item, index) => {
                if (item.ma === action.macuoc) {
                    return { ...item, datCuoc: true }
                } else {
                    return { ...item, datCuoc: false }

                }
            })
            state.mangDatCuoc = mangCapNhat;
            return { ...state }
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocngauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocngauNhien;
            return { ...state }
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hòa nhau!!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'thua sml'
                    } else {
                        state.ketQua = "I'm iron man, i love you 3000!!! "
                        state.soBanThang += 1;
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'bua') {
                        state.ketQua = 'hòa nhau!!!';
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'thua sml'
                    } else {
                        state.ketQua = "I'm iron man, i love you 3000!!! "
                        state.soBanThang += 1;
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'bao') {
                        state.ketQua = 'hòa nhau!!!';
                    } else if (computer.ma === 'keo') {
                        state.ketQua = 'thua sml'
                    } else {
                        state.ketQua = "I'm iron man, i love you 3000!!! "
                        state.soBanThang += 1;
                    }
                    break;

            }
            // if (state.ketQua = "I'm iron man, i love you 3000!!!") {
            //     state.soBanThang += 1;
            // }
            state.soBanChoi += 1;
            return { ...state }

        }
        // default: return { ...state }
    }
    return state
}
// export default BaiTapOanTuTiReducer;