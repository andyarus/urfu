import React from 'react';
import './App.css';
import useToken from './components/Hooks/useToken';
import Auth from './components/Auth/Auth'
import Authorized from './components/Authorized/Authorized'

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Auth setToken={setToken} />
  }

  return (
    <div className="App">
      <Authorized />
    </div>
  )
}

export default App;
