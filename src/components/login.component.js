import React, { Component, useState } from "react";
import { GoogleLogin, Google_Client } from 'react-google-login';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SearchComponent from './search'
import searchShowCards from './searchShowCards'
import { refreshTokenSetup } from '../utils/refreshToken';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux'
import $ from 'jquery';

import actions from '../Store/Redux/actions'
import { NavbarText } from "reactstrap";

const responseGoogle = (response) => {

    console.log(response);
}
// import Weather from 'weather.component'

// viewData = () => {
//     window.open({Weather});
// }


// const login = () => {
//     
//     console.log("aaa")
//     return fetch("http://localhost:5000/getAllUsers", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//     }).then(res => {
//         alert(`ok: _${res.status}`)
//     }).catch((err) => {
//         alert(`err:${err.status}`)
//     })
// }
const mapDispatchToProps = (dispatch) => ({
    set_user: (user) => dispatch(actions.setUser(user)),
    set_history_user: (histories) => dispatch(actions.setHistoryUser(histories))
})

export default connect(null, mapDispatchToProps)(class Login extends React.Component {

    constructor(props) {
        super(props)
        this.flag = true;
        this.state = {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""

            },
            email: "",
            password: "",
            isSignedIn: false,
            isWithGoogle: true
        }
        // props.set_user=props.set_user.bind(this)
        this.submit = this.submit.bind(this)
        this.set_withGoogle = this.set_withGoogle.bind(this)
        // this.history = useHistory();
        this.set_isSignedIn = this.set_isSignedIn.bind(this)
        this.set_email = this.set_email.bind(this)
        this.set_pass = this.set_pass.bind(this)
        this.log = this.log.bind(this)
        this.onFailure = this.onFailure.bind(this)
        this.onSuccess = this.onSuccess.bind(this)
        this.getHistoryForUser = this.getHistoryForUser.bind(this)
        this.func_saveStor = this.func_saveStor.bind(this)
    }
    set_withGoogle = () => {
        
        this.setState({ isWithGoogle: !this.state.isWithGoogle })
    }
    // const { user_name, setUserName } = useState('')
    //const { pass, setPass } = useState('')
    // this.setUserName = this.setUserName.bind(this)
    // render() {
    async set_email(e) {
        // 
        await this.setState({ email: e.target.value })
        return
        // setUserName({ user_name: e.target.value })
    }
    async set_pass(e) {
        // 
        await this.setState({ password: e.target.value })
        return
    }
    set_isSignedIn = (e) => {
        this.setState({ isSignedIn: !this.state.isSignedIn })
    }
    submit(e) {
        // debugger
        // this.setState({ isWithGoogle: false })
        e.preventDefault()
        this.flag = false;
        this.log();
    }
    getHistoryForUser = (userId) => {
        const p = this.props
        debugger
        $.ajax({
            url: `http://localhost:5000/getHistoryForUser/${userId}`,
            method: "get",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                // alert(data)
                console.log("data from server"+data)
                debugger
                data.res.map(m=>p.set_history_user(m))
                return data
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
            }
        });
    }
    func_saveStor(data) {
        debugger
        let histories = this.getHistoryForUser(data._id)
        this.props.set_user(data)
        debugger
        this.props.set_history_user(histories)
        this.props.history.push("/searchShowCards");

    }
    log(e) {
        var url = ''
        if (this.flag) {
            url = "http://localhost:5000/getUserByEmail/" + e + ""
        }
        else {
            // let em = document.getElementById("_email").value
            // let p = document.getElementById("_pass").value
            
            url = `http://localhost:5000/getUserLogin/${this.state.email}/${this.state.password}`
        }
        // 
        const p = this.props
        const r = this.getHistoryForUser
        const x = this.props.history


        $.ajax({
            url: url,
            method: "get",
            dataType: "json",
            contentType: "application/json",

            success: function (data) {
                
                // alert(data)
                console.log(data)
                
                let histories = r(data._id)
                p.set_user(data)
                p.history.push("/searchShowCards");
                // this.func_saveStor(data)

                // this.props.set_user(data);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
            }
        });


        // fetch(url
        //     , {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // 'Accept': 'application/json',
        //         // 'mode':'no-cors',
        //         'Accept': '*/*',
        //         'Connection':'keep-alive',
        //         'Accept-Encoding': 'deflate, gzip, br',
        //         'Access-Control-Allow-Origin':'*'
        //     }
        // }
        // ).then(res => {
        //     alert("ok")
        //     res.json()})
        //     .then((result) => {
        //         
        //         alert("ok_ok")
        //         this.props.set_user(result);
        //         // this.setState({
        //         //     isLoaded: true,
        //         //     items: data,
        //         // })
        //     }).catch((err) => {
        //         
        //         alert(`_err_:${err}`)
        //     })
    }
    onSuccess = (res) => {
        // <Redirect to="/search"></Redirect>
        // history.push(`/search`);
        // this.props.history.push("/search");
        // this.props.history.replace("/searchShowCards");


        // 
        this.log(res.profileObj.email)
        console.log('Login Success: currentUser:', res.profileObj);
        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
    }

    onFailure = (err) => {
        console.log('Login failed: res:', err);
        // alert('err:', err.details);
        // alert(
        //     `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        // );
    }
    render() {
        return (
            <>
                <form>
                    <h3>Sign In</h3>

                    <GoogleLogin
                        class="btn_google"
                        // clientId="http://877249565377-agmeq3s8ouoqntc2adufe3m98bcb807b.apps.googleusercontent.com/"
                        // clientId="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com"
                        // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        // clientId="945839483053-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com"
                        // clientId="MYTOKEN.apps.googleusercontent.com"
                        clientId="945839483053-hjleld4bkk2l4le2ui563fdt24m5u6bv.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        // onSuccess={responseGoogle}
                        // onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={this.state.isSignedIn}
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                    />
                    {document.getElementById('googleButton')}
                    <div className="form-group">
                        <label>Email address</label>
                        <input id="_email" type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.set_email} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input id="_pass" type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.set_pass} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={this.set_isSignedIn} />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    {/* <Link to={"/search"}>  */}
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.submit}>Submit</button>
                    {/* </Link> */}
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form >
                {/* <Router>
                    <Switch> */}
                {/* <Route path="/search" component={SearchComponent} /> */}
                {/* <Route path="/searchShowCards" component={searchShowCards} /> */}

                {/* </Switch>
                </Router> */}
            </>
        );
    }
});
