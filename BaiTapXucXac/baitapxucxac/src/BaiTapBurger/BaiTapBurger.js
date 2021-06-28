import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBurger.css'

class BaiTapBurger extends Component {
    renderMenu = () => {
        let { burger, menu, total } = this.props;
        let content = [];
        for (let propsMenu in menu) {
            let price = menu[propsMenu];
            console.log(burger[propsMenu])
            let i;
            // let soLuong=menu

            content.push(
                <tr key={i}>
                    <td >{propsMenu}</td>
                    <td className='text-center'>
                        <button className='btn-danger' onClick={()=>{
                            this.props.thayDoiSoLuong(propsMenu,+1)
                        }}>+</button>
                        {burger[propsMenu]}
                        <button className='btn-success' onClick={()=>{
                            this.props.thayDoiSoLuong(propsMenu,-1)
                        }}>-</button>
                    </td>
                    <td>{menu[propsMenu]}</td>
                    <td>{(burger[propsMenu]) * price}</td>
                </tr>
            )
        }
        return content;
    }
    renderBread = () => {
        let { burger } = this.props;
        let content = [];
        for (let propsBread in burger) {
            let bread = [];
            for (let i = 0; i < burger[propsBread]; i++) {
                bread.push(<div key={i} className={propsBread}></div>)
            }
            content.push(bread)
        }
        return content;
    }

    render() {

        return (
            <div className='container'>
                <p className='display-4 text-center text-success'>bài tập burger cybersoft</p>
                <div className='row'>
                    <div className='col-7 text-center'>
                        <h3 className='text-danger'>Bánh burger của bạn</h3>
                        <div className='breadTop'></div>
                        {this.renderBread()}
                        <div className='breadBottom'></div>
                    </div>
                    <div className='col-5 '>
                        <h3 className='text-center text-success'>Chọn thức ăn</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th colSpan='2'>Thức ăn</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderMenu()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan='2'></th>
                                    <th>Tổng cộng:</th>
                                    <th>{this.props.total}</th>
                                </tr>

                            </tfoot>

                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        burger: state.BaiTapBurgerReducer.burger,
        menu: state.BaiTapBurgerReducer.menu,
        total: state.BaiTapBurgerReducer.total,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        thayDoiSoLuong: (propsMenu, soLuong) => {
            const action = {
                type: 'THAY_DOI',
                soLuong,
                propsMenu,
            }
            dispatch(action)
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger)
// renderMenu = () => {
//     //lấy props từ redux về
//     let { menu, burger } = this.props;
//     console.log(burger)
//     // console.log(menu);
//     // console.log(Object.entries(menu))
//     let content = [];
//     for (let propsMenu in menu) {
//         console.log(propsMenu)
//         let price=menu[propsMenu];
//         let tt=<tr >
//             <td>{propsMenu}</td>
//             <td><button onClick={() => {
//                 this.props.addBreadMid(propsMenu, 1)
//             }} className='btn-success'>+</button>
//                 {burger[propsMenu]}
//                 <button onClick={() => {
//                     this.props.addBreadMid(propsMenu, -1)
//                 }} className='btn-danger'>-</button></td>
//             <td>{price}</td>
//             <td> {burger[propsMenu] * price}</td>

//         </tr>

//         content.push(tt);
//     }
//         return content;
//     // return Object.entries(menu).map(([propsMenu, price], index) => {
//     //     // console.log(propsMenu,price)
//     //     return (

//     //     )
//     // })
// }