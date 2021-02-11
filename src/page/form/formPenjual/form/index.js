import React, { Component } from 'react';
import "./style.css"

import Form from "../../../../component/form"
import Button from "../../../../component/button"

class Formpenjual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            jp: "",
            kadaluarsa: "",
            harga: "",
            stok: "",
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }
    
    render() {
        console.log("data:",this.state);
        // console.log("statusLogin disini :", this.props.statusLogin);
        // console.log("datamasuk : ", this.props.dataEdit);
         const { nama, jp, kadaluarsa, harga, stok} = this.state



        if ("nama" in this.props.dataEdit) {
            const { nama, jp, kadaluarsa, harga, stok } = this.props.dataEdit
            this.setState({
                nama: nama,
                jp : jp,
                kadaluarsa : kadaluarsa,
                harga: harga,
                stok: stok,
            })
            this.props.reset({nama, jp, kadaluarsa, harga, stok})
        }

        return (
            <>
                <div className="kiri1">
                    <div className="judul"><center>Masukkan Data Produk Dibawah Ini</center></div>
                    <hr />

                    <div>
                        <label className="label">Nama Produk</label>
                        <Form label="Nama" className="input" type="text" name="nama" type="text" value={this.state.nama} placeholder="masukkan nama produk" onChange={this.setValue}></Form>
                    </div>

                    <div>
                        <label className="label">Jenis Produk</label>
                        <select className="input" id="jp" name="jp" onClick={this.setValue}>
                            <option value="Makanan" >Makanan</option>
                            <option value="Minuman" >Minuman</option>
                            <option value="Obat" >Obat</option>
                        </select>
                        </div>

                    <div>
                        <label className="label">Tanggal Kadaluarsa</label>
                        <Form className="input" type="Date" value={this.state.kadaluarsa} name="kadaluarsa" onChange={this.setValue}></Form>
                    </div>

                    <div>
                        <label className="label">Harga</label>
                        <Form className="input" type="number" value={this.state.harga} name="harga" placeholder="masukkan harga" onChange={this.setValue}></Form>
                    </div>

                    <div>
                        <label className="label">Jumlah Stok</label>
                        <Form className="input" type="number" value={this.state.stok} name="stok" onChange={this.setValue}></Form>
                    </div>

                    <center>
                        <Button label="Submit" className="tombol" type="submit" onClick={() => this.props.simpan({ nama, jp, kadaluarsa, harga, stok})} />
                        {/* <button className="tombol" type="submit" onClick={() => this.props.simpan({ nama, tempat, ttl, alamat, jk, hobby, agama })}>Submit</button> */}
                    </center>
                </div>

            </>
        );
    }
}

export default Formpenjual;