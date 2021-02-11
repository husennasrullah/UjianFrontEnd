import React, { Component } from 'react';
import "./style.css"

import Form from "../../../../component/form"
import Button from "../../../../component/button"

class Formpembeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kodeProduk: "",
            namaProduk: "",
            jumlah: ""
            
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value,
        })
    }

    render() {
        console.log("data:", this.state);
        const { kodeProduk, jumlah, namaProduk } = this.state



        if ("namaProduk" in this.props.dataEdit) {
            const { kodeProduk, jumlah, namaProduk } = this.props.dataEdit
            this.setState({
                kodeProduk: kodeProduk,
                jumlah: jumlah,
                namaProduk: namaProduk
            })
            this.props.reset({ kodeProduk, jumlah, namaProduk })
        }

        return (
            <>
                <div className="kiri1">
                    <div className="judul"><center>Masukkan Data Produk yang ingin dibeli </center></div>
                    <hr />

                    <div>
                        <label className="label">Kode Produk</label>
                        <Form className="input" type="text" name="kodeProduk" value={this.state.kodeProduk} placeholder="masukkan kode produk" onChange={this.setValue}></Form>
                    </div>

                    <div>
                        <label className="label">Nama Produk</label>
                        <Form className="input" type="text" name="namaProduk" value={this.state.namaProduk} placeholder="masukkan kode produk" onChange={this.setValue}></Form>
                    </div>

                    <div>
                        <label className="label">Jumlah</label>
                        <Form className="input" type="number" name="jumlah" value={this.state.jumlah} onChange={this.setValue}></Form>
                    </div>

                    <center>
                        <Button label="Beli" className="tombol" type="submit" onClick={() => this.props.simpan({ kodeProduk, jumlah, namaProduk})} />
                    </center>
                </div>

            </>
        );
    }
}

export default Formpembeli;