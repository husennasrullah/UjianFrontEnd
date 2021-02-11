import React, { Component } from 'react';

import Button from "../../component/button"
import Form from "../../component/form"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux"
import "./style.css"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user :"",
            pass :""
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        
        if(this.props.isLogin && this.props.role === "penjual") {
            return <Redirect to="/penjual" />
        } 
        
        if(this.props.isLogin && this.props.role === "pembeli") {
            return <Redirect to="/pembeli" />
        } 

        const { user, pass } = this.state;
        return (
            <>
                <center>
                    <div className="blok">
                        <p><label className="label2">Sign in</label></p>
                        <label className="label2">Email/Username</label>
                        <div>
                            <Form className="login" type="text" name="user" placeholder="email/username" onChange={this.setValue}></Form>
                        </div>
                        <label className="label2">Password</label>
                        <div>
                            <Form className="login" type="text" name="pass" placeholder="password" onChange={this.setValue}></Form>
                        </div>
                    
                        <Button className="tombol" label="LOGIN" onClick={() => this.props.doLogin(user, pass)}></Button>
                        <p><label className="label2">Belum Punya Akun? Register</label></p>
                    </div>
                </center>
            </>
        );
    }
}

const mapStateToProps = state => {
    console.log("state redux", state);
    return {
        isLogin: state.Auth.statusLogin
    }
}

const mapDispatchToProps = dispatch => ({
    changeLogin: () => dispatch({ type: "LOGIN_SUCCESS" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);


// export default Login