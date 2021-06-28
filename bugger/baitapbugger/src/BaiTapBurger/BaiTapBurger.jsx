import React, { Component } from 'react';
import { connect } from 'react-redux'; // thư viện kết nối với redux
import './BaiTapBurger.css'

class BaiTapBurger extends Component {
    renderBreadMid = () => {
        // console.log(this.props.burger);
        let { burger } = this.props;
        let content = []
        for (let propBuger in burger) {
            let breadMid = [];
            for (let i = 0; i < burger[propBuger]; i++) {
                // console.log(propBuger)
                // console.log(this.props.burger)
                
                // console.log(burger[propBuger])
                breadMid.push(<div  key={i} className={propBuger}></div>)
            }
            content.push(breadMid);
        }
        return content;
        // return Object.entries(burger).map(([propsBurger,value],index)=>{
        //     let breadMid=[];
        //     for (let i=0;i<value;i++){
        //         breadMid.push(<div className={propsBurger} key={i}></div>)
        //     }
        //     return breadMid;
        // })
    }


    renderMenu = () => {
        //lấy props từ redux về
        let { menu, burger } = this.props;
        // console.log(menu);
        // console.log(Object.entries(menu))
        return Object.entries(menu).map(([propsMenu, price], index) => {
            // console.log(propsMenu,price)
            return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td><button onClick={()=>{
                        this.props.addBreadMid(propsMenu,1)
                    }} className='btn-success'>+</button>
                        {burger[propsMenu]}
                        <button onClick={()=>{
                        this.props.addBreadMid(propsMenu,-1)
                    }} className='btn-danger'>-</button></td>
                    <td>{price}</td>
                    <td> {burger[propsMenu]*price}</td>

                </tr>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <p className="display-4 text-success">bài tập burger cybersoft </p>
                <div className="row">
                    <div className="col-7">
                        <h3 className="text-center text-danger">Bánh burger của bạn</h3>
                        <div className="breadTop"></div>
                        {this.renderBreadMid()}
                        <div className="breadBottom"></div> 
                    </div>
                    <div className="col-5">
                        <h3 className='text-center text-success'>chọn thức ăn</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Thức ăn</th>
                                    <th></th>
                                    <th>Đơn giá</th>
                                    <th>thành tiền</th>

                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">
                                    </td>
                                    <td>Tổng cộng</td>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        burger: state.BurgerReduce.burger,
        menu: state.BurgerReduce.menu,
        total: state.BurgerReduce.total,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addBreadMid:(propsBurger,amount)=>{
            //tạo ra action
            const action={
                type:'ADD_BREADMID',
                propsBurger,
                amount
            }
            dispatch(action);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger)
