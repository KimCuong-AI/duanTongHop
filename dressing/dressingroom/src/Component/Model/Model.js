import React, { Component } from 'react'
import classes from '../style/style.module.css'
import {connect} from 'react-redux'

 class Model extends Component {
    state = {
        body: "./images/allbody/bodynew.png",
        model: "./images/model/1000new.png",
        background: "./images/background/background1.jpg",
        feet: "./images/shoes/shoes1.png",
        bikinibottom: "./images/allbody/bikini_pantsnew.png",
        bikinitop: "./images/allbody/bikini_branew.png"

    }
    render() {
        return (
            <div className={classes.contain} >
                <div className={classes.body} style={{ background:`url(${this.state.body})`}} />
                <div className={classes.model} style={{ background:`url(${this.state.model})`}} />
                {/* <div className={classes.hairstyle} style={{ background:`url(${this.state.hairstyle})`}} /> */}
                {/* <div className={classes.necklace} /> */}
                <div className={classes.bikinitop} style={{ background:`url(${this.state.bikinitop})`}}  />
                <div className={classes.bikinibottom} style={{ background:`url(${this.state.bikinibottom})`}}  />
                <div className={classes.handbag} />
                <div className={classes.feet} style={{ background:`url(${this.state.feet})`}}  />
                <div className={classes.background} style={{ background:`url(${this.state.background})`}} />

                <div className={classes.bikinibottom} style={{ backgroundImage:`url(${this.props.model.img})`, backgroundSize:'cover'}}  />
                <div className={classes.bikinitop} style={{ backgroundImage:`url(${this.props.model.img})`,  backgroundSize:'cover'}}  />



            </div>

        )
    }
}
const mapStateToProps=(state)=>{
    return{
        model:state.ModelReducer,
    }
}
export default connect(mapStateToProps)(Model)

