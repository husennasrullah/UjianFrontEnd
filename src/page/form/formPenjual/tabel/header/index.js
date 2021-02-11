import React, { Component } from 'react';
import "./style.css"

class Thead extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Produk</th>
                        <th>Jenis Produk</th>
                        <th>Tanggal kadaluarsa</th>
                        <th>Harga</th>
                        <th>Jumlah-Stok</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </>
        );
    }
}
 
export default Thead ;