import React, { Component } from 'react'
import './UserProfile.css'
export default class UserProfile extends Component {
    render() {
        return (
            <div className='container-fluid' style={{ background: '#EEEEEE', display: 'flex', justifyContent: 'center' }}>
                <form className=' bg-white p-5 m-5' style={{width:'600px'}}>
                    <h1 className='text-center'>User Profile</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="text" name='firstName' required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>firstName</label>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="text" name='lastName' required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>lastName</label>
                                </div>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="group">
                                    <input type="text" name='userName' required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>userName</label>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="group">
                                    <input type="text" name='email' required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>email</label>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="text" name='password' type='password' required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>password</label>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="text" name='passwordConfirm' type='password' required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>passwordConfirm</label>
                                </div>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                            <button className='btn text-white bg-dark w-100'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
