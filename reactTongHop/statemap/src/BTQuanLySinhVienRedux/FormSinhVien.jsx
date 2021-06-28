import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormSinhVien extends Component {
    state = {
        values: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
        },
        errors: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai: '',

        },
        valid: false,

    }
    handleChange = (e) => {
        let tagInput = e.target;
        let { name, value, type, pattern } = tagInput;
        let errorMessage = '';

        // console.log(tagInput)
        // console.log(name, value);

        if (value.trim() === '')//kiểm tra bất kì control input nào người dùng nhập vào đều kiểm tra rỗng
        {
            errorMessage = name + ' không được bỏ trống'
        }
        // kiểm tra email
        if (name === 'email') {
            const regex = new RegExp(pattern);
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng'
            }

        }
        if (name === 'soDienThoai') {
            const regex = new RegExp(pattern);
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng'
            }

        }
        let values = { ...this.state.values, [name]: value };//cập nhât giá trị values cho state
        let errors = { ...this.state.errors, [name]: errorMessage };// cập nhật lỗi cho state
        this.setState({
            ...this.state,
            values: values,
            errors: errors
        }, () => {
            console.log(this.state);
            this.checkValid();
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();//cản sự kiện submit reload trang của brower
        this.props.themSinhVien(this.state.values);

    }
    checkValid = () => {
        let valid = true;
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '' || this.state.values[key]==='') {
                valid = false;
            }
        }
        // if(valid)
        // {
        //     let flag=false;
        //     for (let key in this.state.values) {
        //         if (this.state.errors[key] !== '' && this)
        //         {
        //             flag = true;
        //         }
        //     }
        //     if(!flag)
        //     {
        //         valid=false;
        //     }

        // }
        this.setState({
            ...this.state,
            valid: valid


        })
    }
    render() {
        return (
            <div className="container">
                <div className="card ">
                    <div className="card-header bg-dark text-white"><h3>Thông tin sinh viên</h3></div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>mã SV</span>
                                    <input className="form-control" name="maSV" value={this.state.values.maSV} onChange={this.handleChange} />
                                    <p className='text-danger'>
                                        {this.state.errors.maSV}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ tên</span>
                                    <input className="form-control" name='hoTen' value={this.state.values.hoTen} onChange={this.handleChange} />
                                    <p className='text-danger'>
                                        {this.state.errors.hoTen}
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-6">
                                    <span>email</span>
                                    <input className="form-control" name="email"  pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" value={this.state.values.email} onChange={this.handleChange} />
                                    <p className='text-danger'>
                                        {this.state.errors.email}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>số điện thoại</span>
                                    <input className="form-control" type='text' pattern="^(0|[1-9][0-9]*)$" name='soDienThoai' value={this.state.values.soDienThoai} onChange={this.handleChange} />
                                    <p className='text-danger'>
                                        {this.state.errors.soDienThoai}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-right">
                                    {this.state.valid ? <button type='submit' className='btn btn-success'>Thêm sinh viên</button> : <button type='submit' className='btn btn-success' disabled>Thêm sinh viên</button>}
                                    {/* <button type='submit' className='btn btn-success'>Thêm sinh viên</button> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(FormSinhVien)