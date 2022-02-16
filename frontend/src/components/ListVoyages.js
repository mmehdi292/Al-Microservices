import axios from 'axios';
import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import { withRouter } from '../components/withRouter';

const POST_API_BASE_URL = "http://localhost:9002/microservice-voyage/voyages";
const POST_API_BASE_URL1 = "http://localhost:9002/microservice-reservation/reservation";

class ListVoyages extends Component {

	constructor(props) {
		super(props)
		{/*idVoyage:'',
		trajet:0,
		idBus:'',
		LieuDepart:'',
		destination:'',
		tempDepart:''
	
		 */}

		this.state = {
			voyages: []
		}
	}

	

	componentDidMount() {
		axios.get(POST_API_BASE_URL)
			.then(res => {
				this.setState({voyages:res.data})
			});
	}

	reserver = (idVoyage) =>{
		const cookies = new Cookies()
		if(cookies.get('username')){
			const username = cookies.get('username')
			const data = {
				'idVoyage': idVoyage,
				'username': username
			  };
			console.log(username+"------------"+idVoyage)
			axios.post(POST_API_BASE_URL1,{username})
			.then(res => {
				if(res.data){
				this.props.navigate('/historique')}
			});
		}else{
			this.props.navigate('/login')
		}
	}
	
	render() {
		return (
			<div className="row">
				<div className="col-lg-12 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">La liste des voyages</h4>
							<div className="table-responsive">
								<table className="table table-hover">
									<thead>
										<tr>
											<th>Trajet</th>
											<th>Bus</th>
											<th>Depart</th>
											<th>Destination</th>
											<th>Temps</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{
											this.state.voyages.map((v)=>{
												return (<tr key={v.idVoyage}>
													<td>{v.trajet}</td>
													<td>{v.idBus}</td>
													<td>{v.lieuDepart}</td>
													<td>{v.destination}</td>
													<td>{new Date(v.tempDepart).getFullYear()}
													/{new Date(v.tempDepart).getMonth()}
													/{new Date(v.tempDepart).getDay()} {new Date(v.tempDepart).getHours()}:{new Date(v.tempDepart).getMinutes()}
													</td>
													<td><button type="button" onClick={()=>this.reserver(v.idVoyage)} class="btn btn-danger btn-sm">Reserver</button></td>
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

export default withRouter(ListVoyages)