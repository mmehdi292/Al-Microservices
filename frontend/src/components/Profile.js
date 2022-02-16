import axios from 'axios';
import React, { Component, Fragment } from 'react'
import Cookies from 'universal-cookie';
import { withRouter } from '../components/withRouter';
const POST_API_BASE_URL = "http://localhost:9002/microservice-passanger/profile";

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            "username": "",
            "password": "",
            "email": "",
            "nom": "",
            "prenom": "",
            "age": 0,
            "sexe": "",
            "idCarteRFID": "",
            "profession": "",
            "typeAbonnement": "",
            "debutAbonnement": "",
            "finAbonnement": "",
            "role": "",
            "ntelephone": "",
            "solde": 0
        }
    }

    componentDidMount() {
        const cookies = new Cookies()
        const username = cookies.get('username');
        axios.post(POST_API_BASE_URL, { username })
            .then(res => {
                console.log(res.data)
                this.setState(res.data)
            });
    }

    handler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    update = (e) => {
        e.preventDefault()
        axios.put(POST_API_BASE_URL, this.state).then((res) => {
            if (res.data === true) {
                this.props.navigate('/')
            }

        })
    }


    render() {
        return (
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Your profile</h4>
                            <p className="card-description">
                                You can edit your data
                            </p>
                            <form className="forms-sample" onSubmit={this.update}>
                                <div className="form-group">
                                    <label for="exampleInputName1">Username</label>
                                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handler} placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail3">Email address</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handler} placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword4">Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handler} placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputName1">Phone number</label>
                                    <input type="text" className="form-control" name="ntelephone" value={this.state.ntelephone} onChange={this.handler} placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputName1">First name</label>
                                    <input type="text" className="form-control" name="nom" value={this.state.nom} onChange={this.handler} placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputName1">Last name</label>
                                    <input type="text" className="form-control" name="prenom" value={this.state.prenom} onChange={this.handler} placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputName1">Age</label>
                                    <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handler} placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleSelectGender">Gender</label>

                                    <select className="form-control" name="sexe" onChange={this.handler}>
                                        {this.state.sexe === 'Male' ?
                                            <Fragment>
                                                <option value="Male" selected>Male</option>
                                                <option value="Female">Female</option>
                                            </Fragment> :
                                            this.state.sexe === 'Female' ?
                                                <Fragment>
                                                    <option value="Male" >Male</option>
                                                    <option value="Female" selected>Female</option>
                                                </Fragment>
                                                :
                                                <Fragment>
                                                    <option selected >Select---</option>
                                                    <option value="Male" >Male</option>
                                                    <option value="Female" selected>Female</option>
                                                </Fragment>}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputName1">RFID tag</label>
                                    <input type="text" className="form-control" name="idCarteRFID" value={this.state.idCarteRFID} onChange={this.handler} placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputName1">proffesion</label>
                                    <input type="text" className="form-control" name="profession" value={this.state.profession} onChange={this.handler} placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputName1">Abonement</label>
                                    <input type="text" className="form-control" name="typeAbonnement" value={this.state.typeAbonnement} onChange={this.handler} placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputName1">Debut d'Abonement</label>
                                    <input type="text" className="form-control" name="debutAbonnement" value={this.state.debutAbonnement} onChange={this.handler} placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputName1">Fin d'Abonement</label>
                                    <input type="text" className="form-control" name="finAbonnement" value={this.state.finAbonnement} onChange={this.handler} placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputName1">Role</label>
                                    <input type="text" className="form-control" name="role" value={this.state.role} onChange={this.handler} placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputName1">Solde</label>
                                    <input type="text" className="form-control" name="solde" value={this.state.solde} onChange={this.handler} placeholder="Name" />
                                </div>


                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile)