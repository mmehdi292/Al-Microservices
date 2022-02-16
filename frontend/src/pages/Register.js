import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from '../components/withRouter';

const POST_API_BASE_URL = "http://localhost:9002/microservice-passanger/insciption";

class Register extends React.Component{
    style = {
        color:'#00b894',
        'font-weight':'bold'
    }
    constructor(props) {
      super(props)
  
      this.state = {
        username:'',
        email:'',
        password:'',
      }
    }
  
  handler = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  validateData = (event) =>{
    event.preventDefault()
    console.log("validation")
    if(this.state.password===document.getElementById('ps').value){
      console.log("===")
      this.register();
      this.props.navigate('/login')
    }
    console.log("end")
  }
  register =()=>{
    console.log("Exectured")
    axios.post(POST_API_BASE_URL,this.state).then(res=>console.log(res.data))
  }

  render(){
  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="main-panel">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <h2 style={this.style}>AL Project</h2>
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3" onSubmit={this.validateData}>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" name="username" placeholder="Username" onChange={this.handler}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" name="email" placeholder="Email" onChange={this.handler}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" name="password" placeholder="Password" onChange={this.handler}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" name="password1" id="ps" placeholder="Password"/>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )}
}

export default withRouter(Register);
