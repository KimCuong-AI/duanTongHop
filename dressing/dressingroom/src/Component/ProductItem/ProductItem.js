import React, { Component } from 'react'
import { connect } from 'react-redux';
class ProductItem extends Component {
    render() {
        let {item}=this.props;
        return (
            <div className='card p-2 my-2'>
                <img src={item.imgSrc_jpg}/>
                <p>{item.name}</p>
                <button className='btn btn-success' onClick={()=>{
                    this.props.chooseClothes(item)
                }}>Thử đồ</button>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        chooseClothes:(cloth)=>{
            dispatch({
                type:'SET_CLOTH',
                payload:{
                    type:cloth.type,
                    img:cloth.imgSrc_png,
                }
            })

        }
    }
}

export default connect(null,mapDispatchToProps)(ProductItem)