import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';

import { withRouter } from '../components/withRouter';

const POST_API_BASE_URL = "http://localhost:9002/microservice-passanger/login";

class LoginScreen extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       password:''
    }
  }

  handler = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  login = (event) => {
    event.preventDefault()
    const cookies = new Cookies();
    axios.post(POST_API_BASE_URL,this.state).then((res)=>{
      if(res.data===true){
        cookies.set('username',this.state.username,{path:'/'})
        this.props.navigate('/')
      }
      
    })
  }
    
    render(){
      const style = {
        color:'#00b894',
        'font-weight':'bold'
    }
      return (
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="main-panel">
            <div className="content-wrapper d-flex align-items-center auth px-0">
              <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                  <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                    <div className="brand-logo">
                      <h2 style={style}>AL Project</h2>
                    </div>
                    <h4>Hello! let's get started</h4>
                    <h6 className="font-weight-light">Sign in to continue.</h6>
                    <form className="pt-3" onSubmit={this.login}>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" onChange={this.handler} name="username" placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" onChange={this.handler} name="password" placeholder="Password"/>
                      </div>
                      <div className="mt-3">
                        <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
 
}

export default withRouter(LoginScreen);