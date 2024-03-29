import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../Store';
import io from 'socket.io-client';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { reducer, setIdUser } from '../../Ducks/Reducer';
import './change.css';
import https from 'https';
require('dotenv').config()
class change extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.change = this.change.bind(this);
    }


    change() {
      
        const { username, password } = this.state;

        const domain = process.env.REACT_APP_DOMAIN
        let url = domain + "/change";
        console.log(url)

        if (username && password) {
          
            axios.post(url, { username, password })
                .then((res) => {
                    const { message, id } = res.data;
                    if (message === 'ok') {
                        console.log(' co data')
                        this.props.setIdUser(id);
                    } else {
                        console.log('k co data')
                    }
                })

                .catch(err => {

                    console.error(err);
                    alert('Something went wrong :(');
                });
        } else {
            alert('Please enter all fields');
        }
    }
    //check
    check() {    
        const domain = process.env.REACT_APP_DOMAIN
        let url = domain + "/check";
        console.log('check url: ', url)
            axios.get(url)
                .then((res) => {
                    const  message = res.data;
                  
                    console.log(message)
                }) 
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to='/host' />;
        }
        return (
            
                   

            <div className='login-wrapper'>
                <div className='login-form'>
                    <h1>Login</h1>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input type='text' onChange={(e) => this.setState({ username: e.target.value })} />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <button onClick={this.change}>Login</button>
                </div>
                <button onClick={this.check}>check</button>
            </div> 
        );
    }
}
function mapStateToProps(state) {

    return {
        iduser: state.iduser,
        loggedIn: state.loggedIn

    }
}

const mapDispatchToProps = dispatch => ({
    setIdUser: id => dispatch(setIdUser(id))
});

// Connect the component to the Redux store with mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(change);