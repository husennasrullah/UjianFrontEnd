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
                        <th>Kode Produk</th>
                        <th>Nama Produk</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </>
        );
    }
}
 
export default Thead ;