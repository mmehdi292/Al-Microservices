import VoyagesListScreen from './pages/VoyagesListScreen';
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen';
import Register from './pages/Register';
import HistoriqueVoyagesScreen from './pages/HistoriqueVoyagesScreen';
import ProfileScreen from './pages/ProfileScreen';
import { UserProvider } from './context/userContext';
import React from 'react';

class App extends React.Component {

  

  constructor(props) {
    super(props)

    this.state = {
      user: null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.setState({ user: null });
  }

  login(username, password){
    this.setState({ user: username });
    
  }

  render() {
    return (
      <div className="App">
        <UserProvider value={this.state.user}>
          <Routes>
            <Route path='/' element={<VoyagesListScreen />} />
            <Route path='historique' element={<HistoriqueVoyagesScreen />} />
            <Route path='profile' element={<ProfileScreen />} />
            <Route path='login' element={<LoginScreen login={this.login} />} />
            <Route path='register' element={<Register />} />
          </Routes>
        </UserProvider>
      </div>
    )
  }


}

export default App;
