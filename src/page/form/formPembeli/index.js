import React, { Component } from 'react';
import Formpembeli from "./form"
import TablePembeli from "../formPembeli/tabel"
import { Redirect } from "react-router-dom"
import "./style.css"
import Button from '../../../component/button';
import TablePenjual from "../formPembeli/tabel"

class Pembeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBeli: [
                {
                    kodeProduk: "A01",
                    namaProduk: "Minyak Goreng",
                    jumlah: 50
                },
                {
                    kodeProduk: "A02",
                    namaProduk: "Sabun Cuci",
                    jumlah: 44
                },
                {
                    kodeProduk: "A03",
                    namaProduk: "Biskuat Susu",
                    jumlah: 30
                },
                {
                    kodeProduk: "A04",
                    namaProduk: "Gula Merah",
                    jumlah: 10
                }
            ],
            dataEdit: {},
            act: 0,
            index: ""

        }
    }

    simpan = (user) => {
        const { kodeProduk, jumlah, namaProduk } = user
        let newData = this.state.dataBeli

        if (this.state.act === 0) {
            if (kodeProduk != "" && jumlah != "") {
                newData.push({ kodeProduk, jumlah, namaProduk })
                this.setState({ dataBeli: newData })
            } else {
                alert('Masukkan Data Secara Lengkap')
            }

        } else {
            let index = this.state.index
            newData[index].kodeProduk = kodeProduk;
            newData[index].jumlah = jumlah;
            newData[index].namaProduk = namaProduk;

            this.setState({
                dataBeli: newData,
                act: 0,
                index: ""
            })
        }
    }


    editData = (idx) => {
        const dataDipilih = this.state.dataBeli[idx]
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
        const dataHapus = this.state.dataBeli
            .filter((dataBeli, index) => index !== idx)
            .map((filterData) => {
                return filterData
            })

        this.setState({
            dataBeli: dataHapus
        })
    }

    render() {
        if (!this.props.statusLogin)
            return <Redirect to="/login" />

        return (
            <>
                <div>
                    <Button className="logout" label="logout" onClick={this.props.logout}></Button>
                    <label className="label">Selamat Datang Pembeli</label>
                </div>
                <div >
                    <Formpembeli simpan={this.simpan} dataEdit={this.state.dataEdit} reset={this.resetForm} />
                </div>
                <div>
                    <TablePembeli dataBeli={this.state.dataBeli} editData={this.editData} hapusData={this.hapusData} />
                </div>
            </>
        );
    }
}

export default Pembeli;