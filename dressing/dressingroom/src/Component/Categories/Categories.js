import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {
    render() {
        return (
            <div className='btn btn-group'>
                {this.props.categoriesList.map((item, index) => {
                    return <button key={index} className='btn btn-secondary' onClick={() => {
                        this._chooseCategory(item.type)
                    }} className={this.props.ChoosenCategory === item.type ? 'btn btn-primary' : 'btn btn-secondary'}>{item.showName}</button>
                })}
            </div>
        )
    }
    _chooseCategory = (payload) => {
        this.props.dispatch({
            type: 'SET_CATEGORY',
            payload,
        })
    }
}
const mapStateToProps = (state) => ({
    categoriesList: state.CategoryReducer,
    ChoosenCategory: state.ChoosenCategoryReducer.ChoosenCategory,
})
export default connect(mapStateToProps)(Categories)
