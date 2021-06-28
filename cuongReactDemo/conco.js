// let mangA=[2,34,5,5]
// let mangB=[9,9]
// mangB=[...mangA,1,...mangA]
// console.log(mangA)
// console.log(mangB)


// let mangDatCuoc=[
//     { ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: false },
//     { ma: 'keo', hinhAnh: './img/gameOanTuTi/bua.png', datCuoc: true },
//     { ma: 'keo', hinhAnh: './img/gameOanTuTi/bao.png', datCuoc: false },
// ]
// let conco=mangDatCuoc.map((item,index)=>{
//     return{...item,datCuoc:false,hinhAnh: './img/gameOanTuTi/bao.png'}
// })
// console.log(conco)
// let ab={ ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: false};
// let bc={...ab,datCuoc: true,conco:true}
// console.log(bc)
// var a=9
// var a=6
// console.log(a)
// let menu =
//     {
//     menu2:{ com: 3, chao: 4 }
// }
// let {menu2}=menu;
// // for (let value in menu2){

// // }
// console.log(menu2['com'])
// console.log(menu2.com)
// let sinhVien={
//     maSV:1,
//     tenSV:"nguyễn văn a"

// }
// let svUpdate={...sinhVien,lopHoc:'FEXX'};
// console.log(svUpdate);

// let values= {
//     maSinhVien: 'conco',
//     tenSinhVien: '',
//     soDienThoai: '',
//     email: '',
// }
// console.log(values.maSinhVien)
// console.log(values['maSinhVien'])






// let nam='maSinhVien'
// // let value2={...values,[nam]:'conbo'}
// let value2={...values}
// value2['nam']='conboooooooooooooooooooo'
// console.log(value2);
// let a=0
// console.log(a);



// let namee='ten'
// let myObj={
//     [namee]:'a phủ',
//     sayHi(){
//         console.log("hi," +this.ten)
//     }
// };
// myObj.sayHi()
let handle = (e) => {
   let  {value}=e.target
}