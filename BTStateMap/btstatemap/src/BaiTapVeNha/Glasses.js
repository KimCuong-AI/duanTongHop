import React, { Component } from 'react'
import './Style.css'

export default class Glasses extends Component {    
    arrProduct = [  
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ]  
    state = {
        display: "none"
    }
    renderProduct() {
        const arrGlasses = this.arrProduct.map((product, index) => {
            return <div className="col-2 pb-5" key={index}>
                <img src={product.url} onClick={() => {
                    this.setState({
                        url: product.url, desc: product.desc, name: product.name, display: "block"
                    })
                }}
                />
            </div>
        })
        return arrGlasses;
    }
    render() {
        return (
            <div className="wrapper pb-5" style={{ background: `url(./img/glassesImage/background.jpg)` }}>
                <div className="text-center  title text-white">
                    <h2>TRY GLASSES APP ONLINE</h2>
                </div>
                <div className="container p-5">
                    <div className="v-glasses row justify-content-around">
                        <div className=" col-3 ">
                            <div className="glasses__test">
                                <img src="./img/glassesImage/model.jpg" />
                                <div className="glasses__content text-white " style={{ display: this.state.display }}>
                                    <p className=" text-primary px-2">{this.state.name}</p>
                                    <p className="px-2">{this.state.desc}</p>
                                </div>
                                <img className="glassesChosen" src={this.state.url} />
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <img src="./img/glassesImage/model.jpg" />
                        </div>
                    </div>
                </div>
                <div className="container list__glasses pt-5 px-5">
                    <div className="row">
                        {this.renderProduct()}
                        
                    </div>

                </div>
            </div>
        )
    }
}
