import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'

class Products extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {this.props.productList.filter(item=>item.type===this.props.ChoosenCategory).map((item, index) => {
                       return  <div key={index} className='col-4'>
                            <ProductItem item={item}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        productList: state.ProductReducer,
        ChoosenCategory:state.ChoosenCategoryReducer.ChoosenCategory
    }
}

export default connect(mapStateToProps)(Products)

