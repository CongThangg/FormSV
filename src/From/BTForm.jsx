import React, { Component } from 'react'
import FormDK from './FormDK'
import TableSV from './TableSV'

export default class BTForm extends Component {
    render() {
        return (
            <div className='container'>
                <div className="card">
                    <div className="card-header bg-dark">
                        <h3 style={{ color: "#fff" }}>Thông tin sinh viên</h3>
                    </div>
                    <div className="card-body">

                        <FormDK/>

                    </div>

                </div>

                <div>
                    <TableSV/>

                </div>



            </div>



        )
    }
}
