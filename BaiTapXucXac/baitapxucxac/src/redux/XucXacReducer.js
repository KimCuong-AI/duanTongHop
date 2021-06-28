const XucXucstate = {
    ketQuaChon: false,
    soBanThang: 1,
    tongSoBanChoi: 90,
    mangXucXac: [
        { hinhAnh: './img/imgGame/1.png', diem: 1 },
        { hinhAnh: './img/imgGame/2.png', diem: 2 },
        { hinhAnh: './img/imgGame/6.png', diem: 6 },
    ]
}

export const XucXacReducer = (state = XucXucstate, action) => {
    switch (action.type) {
        case 'CHON_TAI_XIU': {
            // const mangCapNhat = { ...state }
            state.ketQuaChon = action.ketQuaChon;
            return { ...state }
        }
        case 'PLAY_GAME': {
            let mangXXNN = [];
            for (let i = 0; i < 3; i++) {
                let soNN = Math.floor(Math.random() * 6)+1;
                let xxnn = { hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN}
                mangXXNN.push(xxnn)
            }
            state.mangXucXac = mangXXNN;
            var tongDiem = state.mangXucXac.reduce((diem, item, index) => {
                return diem += item.diem;
            }, 0)
            // if ((tongDiem > 11 && state.ketQuaChon === true)
            //     || (tongDiem <= 11 && state.ketQuaChon === false)) {
            //     state.soBanThang += 1;
            // }
            if ((tongDiem > 11 && state.ketQuaChon === true) ||
            (tongDiem <= 11 && state.ketQuaChon === false)) {
            state.soBanThang += 1
        }


            state.tongSoBanChoi += 1;
            return { ...state }
        }
    }
    return state
}
