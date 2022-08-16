import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSV extends Component {

  renderDSSV=()=>{
    return this.props.danhSachSV.map((sv) => { 
      let {maSV,hoTen,sdt,email} = sv;
      return <tr key={maSV}>
      <td>{maSV}</td>
      <td>{hoTen}</td>
      <td>{sdt}</td>
      <td>{email}</td>
      <td>
        <button onClick={() => { 
          let action={
            type:"XOA_SV",
            maSVXoa: maSV
          }
          this.props.dispatch(action)
         }} className='btn btn-danger'>Xóa</button>
         <button onClick={() => { 
          let action ={
            type:"SUA_SV",
            valueSV:sv
          }
          this.props.dispatch(action)
          }} className='btn btn-info ml-1'>Sửa</button>
      </td>
    </tr> 
     })
  }


  render() {
    return (
      <div>

        <table className="table">
          <thead className=''>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>

            {this.renderDSSV()}

          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    danhSachSV: rootReducers.BTReactFormReducer.danhSachSV
  }
}

export default connect(mapStateToProps)(TableSV)
