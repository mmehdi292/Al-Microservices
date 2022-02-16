import React, { Component } from 'react'
import axios  from 'axios';
import Cookies from 'universal-cookie';
import { withRouter } from './withRouter';

const POST_API_BASE_URL = "http://localhost:9002/microservice-reservation/historique";
const POST_API_BASE_URL1 = "http://localhost:9002/microservice-reservation/annuler";

class HistoriqueVoyages extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         historique:[]
      }
    }

    componentDidMount() {
        const cookies = new Cookies()
        if(cookies.get('username')){
            const username = cookies.get('username');
            axios.post(POST_API_BASE_URL,{username})
                .then(res => {
                    console.log('safsafsaf')
                    this.setState({historique:res.data})
                });
        }else{
            this.props.navigate('/login')
        }
            
	}

    annuler = (idReservation) =>{
        axios.post(POST_API_BASE_URL1,{idReservation})
			.then(res => {
				if(res.data){
				this.props.navigate('/historique')}
			});
    }

    render() {
        return (
            <div className="row">

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Historique des voyages</h4>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>idReservation</th>
                                            <th>idVoyage</th>
                                            <th>username</th>
                                            <th>prix</th>
                                            <th>Etat</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
											this.state.historique.map((v)=>{
												return (<tr key={v.idReservation}>
                                                    <td>{v.idReservation}</td>
													<td>{v.idVoyage}</td>
													<td>{v.username}</td>
													<td>{v.prix}</td>
                                                    <td><label className="badge badge-success">{v.etat}</label></td>
													<td><button type="button" onClick={()=>this.annuler(v.idReservation)} class="btn btn-danger btn-sm">Annuler</button></td>
												</tr>)
											})
										}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HistoriqueVoyages)