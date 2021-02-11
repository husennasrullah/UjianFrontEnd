import React, { Component } from 'react';
import Thead from "./header";
import "./style.css"
import Button from "../../../../component/button"
import Form from "../../../../component/form"


class TablePembeli extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="kanan1">
                <div>
                   <Form className="input" placeholder="Search Field"></Form>
                </div>
                <table className="content-table">
                    <Thead />
                    {
                        this.props.dataBeli.map((user, idx) => {
                            return (
                                <tbody key={idx}>
                                    <tr>
                                        <td>{idx + 1}</td>
                                        <td>{user.kodeProduk}</td>
                                        <td>{user.namaProduk}</td>
                                        <td>{user.jumlah}</td>
                                        <td>
                                            <Button label="Edit belanja" className="edit" onClick={() => this.props.editData(idx)}  />
                                            <Button label="Delete belanja" className="delete" onClick={() => this.props.hapusData(idx)} />
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        );

    }
}


export default TablePembeli;