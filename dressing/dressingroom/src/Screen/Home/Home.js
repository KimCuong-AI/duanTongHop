import React, { Component } from 'react'
import Categories from '../../Component/Categories/Categories'
import Model from '../../Component/Model/Model'
import ProductItem from '../../Component/ProductItem/ProductItem'
import Products from '../../Component/Products/Products'
import Header from '../../Layouts/Header/Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6'>
                            <Categories/>
                            <Products/>
                        </div>
                        <div className='col-6'>
                            <Model/>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

