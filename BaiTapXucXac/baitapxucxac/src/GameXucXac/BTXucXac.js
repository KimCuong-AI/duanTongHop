import React, { Component } from 'react'
import KetQua from './KetQua'

import XucXac from './XucXac'
import style from '../assets/styles/components/BTGameXucXac.module.css'

export default class BTXucXac extends Component {
    render() {
        return (
                <div className={`${style.bgGame}`}>
                   <h3 className="display-4 text-center pt-5" >BÀI TẬP GAME XÚC XẮC</h3>
                
                    <XucXac />
                    <KetQua/>

                </div>

        )
    }
}
