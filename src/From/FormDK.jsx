import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDK extends Component {

  handleInPut = (event) => {
    let { value, name } = event.target
    console.log(value, name)

    let newValue = { ...this.props.sinhVien.value }
    newValue[name] = value;

    let newError = { ...this.props.sinhVien.error }
    let message = "";

    if (value.trim() === "") {
      message = name + " Không được để trống!"
    }

    let dataType = event.target.getAttribute("data-type")
    console.log(dataType)
    if (dataType === "email") {
      let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!value.match(pattern)) {

        message = name + " Không đúng định dạng!";
      }
    }
    if (dataType==="hoTen") {
      let pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
      if(!value.match(pattern)){
        message = name + " Không đúng định dạng!"
      }
    }
    if (dataType==="sdt") {
      let pattern = /^[0-9]+$/;
      if(!value.match(pattern)){
        message = name + " Không đúng định dạng!"
      }
    }
    newError[name] = message;

    

    
    

    let action = {
      type: "HANDLE_INPUT",
      sinhVien: {
        value: newValue,
        error: newError
      }
    }
    this.props.dispatch(action);
  }

  handleSubmit = (event) => {

    event.preventDefault();


    let { value, error } = this.props.sinhVien

    for (const key in error) {
      if (error[key] !== "") {

        alert(key + "chưa hợp lệ")
        return;
      }
    }

    for (const key in value) {
      if (value[key] === "") {

        alert(key + "Đang bị trống")
        return;
      }
    }

    let action = {
      type: "THEM_SINH_VIEN",
      sinhVien: this.props.sinhVien
    }
    this.props.dispatch(action);
  }

  handleUpdate = (event) => {
    event.preventDefault();
    let action = {
      type: "CAP_NHAT_SV",
      sinhVienUpdate: this.props.sinhVien.value
    }
    this.props.dispatch(action)
  }


  render() {

    let { value, error } = this.props.sinhVien

    let { maSV, hoTen, sdt, email } = error
    console.log(this.props)
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="maSV">Mã SV</label>
                <input onChange={this.handleInPut} type="text" className="form-control" id="maSV" name='maSV' value={value.maSV} />
                <p className='text-danger'>{maSV}</p>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="hoTen">Họ tên</label>
                <input data-type="hoTen" onChange={this.handleInPut} type="text" className="form-control" id="hoTen" name='hoTen' value={value.hoTen} />
                <p className='text-danger'>{hoTen}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="sdt">Số điện thoại</label>
                <input data-type="sdt" onChange={this.handleInPut} type="sdt" className="form-control" id="sdt" name='sdt' value={value.sdt} />
                <p className='text-danger'>{sdt}</p>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input data-type="email" onChange={this.handleInPut} type="email" className="form-control" id="email" name='email' value={value.email} />
                <p className='text-danger'>{email}</p>
              </div>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>
            Thêm sinh viên
          </button>
          <button onClick={this.handleUpdate} type="submit" className='btn btn-info ml-1'>Cập nhật</button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    sinhVien: rootReducers.BTReactFormReducer.sinhVien
  }
}


export default connect(mapStateToProps)(FormDK);
