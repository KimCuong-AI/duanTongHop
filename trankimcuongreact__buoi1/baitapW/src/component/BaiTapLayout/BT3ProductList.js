import React, { Component } from 'react'
import BT3Product from './BT3Product'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <BT3Product />
                    </div>
                    <div className="col-3">
                        <BT3Product />
                    </div>
                    <div className="col-3">
                        <BT3Product />
                    </div>
                    <div className="col-3">
                        <BT3Product />
                    </div>

                </div>

            </div>
        )
    }
}
