import React, { Component } from 'react';
import Thead from "./header";
import "./style.css"
import Button from "../../../../component/button"
import Form from "../../../../component/form"


class TablePenjual extends Component {
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
                        this.props.dataProduk.map((user, idx) => {
                            return (
                                <tbody key={idx}>
                                    <tr>
                                        <td>{idx + 1}</td>
                                        <td>{user.nama}</td>
                                        <td>{user.jp}</td>
                                        <td>{user.kadaluarsa}</td>
                                        <td>Rp.{user.harga}</td>
                                        <td>{user.stok} unit</td>
                                        <td>
                                            <Button label="Edit" className="edit" onClick={() => this.props.editData(idx)}  />
                                            <Button label="Delete" className="delete" onClick={() => this.props.hapusData(idx)} />
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


export default TablePenjual;