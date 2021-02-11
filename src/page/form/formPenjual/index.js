import React, { Component } from 'react';
import Formpenjual from "./form"
import { Redirect } from "react-router-dom"
import "./style.css"
import Button from "../../../component/button"
import TablePenjual from "./tabel"

class Penjual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduk: [
                {
                    nama: "Minyak Goreng",
                    jp: "Makanan",
                    kadaluarsa: "2021-10-19",
                    harga: "21000",
                    stok: "50",
                },
                {
                    nama: "Saos Indofoof",
                    jp: "Makanan",
                    kadaluarsa: "2021-10-19",
                    harga: "13000",
                    stok: "45",
                },
                {
                    nama: "Kecap ABC",
                    jp: "Makanan",
                    kadaluarsa: "2021-10-19",
                    harga: "12000",
                    stok: "50",
                },
                {
                    nama: "Panadol",
                    jp: "Obat",
                    kadaluarsa: "2021-10-19",
                    harga: "10000",
                    stok: "50",
                },
                {
                    nama: "Freshtea",
                    jp: "minuman",
                    kadaluarsa: "2021-10-19",
                    harga: "8000",
                    stok: "50",
                },
            ],
            dataEdit: {},
            act: 0,
            index: ""

        }
    }

    simpan = (user) => {
        const { nama, jp, kadaluarsa, harga, stok } = user
        let newData = this.state.dataProduk

        if (this.state.act === 0) {
            if (nama != "" && jp != "" && kadaluarsa != "" && harga != "" && stok != "") {
                newData.push({ nama, jp, kadaluarsa, harga, stok })

                this.setState({ dataProduk: newData })
            } else {
                alert('Masukkan Data Secara Lengkap')
            }

        } else {
            let index = this.state.index
            newData[index].nama = nama;
            newData[index].jp = jp;
            newData[index].kadaluarsa = kadaluarsa;
            newData[index].harga = harga;
            newData[index].stok = stok;

            this.setState({
                dataProduk: newData,
                act: 0,
                index: ""
            })
        }
    }


    editData = (idx) => {
        const dataDipilih = this.state.dataProduk[idx]
        this.setState({
            dataEdit: dataDipilih,
            act: 1,
            index: idx
        })
    }

    resetForm = () => {
        this.setState({
            dataEdit: {}
        })
    }

    hapusData = (idx) => {
        const dataHapus = this.state.dataProduk
            .filter((dataProduk, index) => index !== idx)
            .map((filterData) => {
                return filterData
            })

        this.setState({
            dataProduk: dataHapus
        })
    }

    render() {

        if (!this.props.statusLogin)
            return <Redirect to="/login" />

        return (
            <>
                <div>
                    <Button className="logout" label="logout" onClick={this.props.logout}></Button>
                    <label className="label">Selamat Datang Penjual</label>
                </div>
                <div >
                    <Formpenjual simpan={this.simpan} dataEdit={this.state.dataEdit} reset={this.resetForm} />
                </div>
                <div>
                    <TablePenjual dataProduk={this.state.dataProduk} editData={this.editData} hapusData={this.hapusData} />
                </div>
            </>
        );
    }
}

export default Penjual;