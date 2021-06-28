const stateDefault ={
    mangSinhVien:[{maSV:1,hoTen:'nguyen văn a',soDienThoai:'02143241234',email:'trankimcuongabcd@gmail.com'}]
}

export const QuanLySinhVienReducer=(state=stateDefault,action)=>{
    switch(action.type){
        case 'THEM_SINH_VIEN':{
            //thêm dữ liệu sinh viên vào mangSinhVien
            const mangSVUpdate=[...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien=mangSVUpdate;
            return {...state}
        };
        break;
        default:{
            return {...state}
        }
    }
}