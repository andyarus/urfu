import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Auth.css';

async function auth(credentials) {
  return fetch('http://localhost:8080/shopServer-1.0-SNAPSHOT/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Auth({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!username) {
      alert("Введите логин!");
      return;
    }
    if (!password) {
      alert("Введите пароль!");
      return;
    }

    const user = await auth({
      username,
      password
    });

    const errorString = user["error"];
    if (errorString) {
      alert(errorString);
      return;
    }

    let hash = require('object-hash');
    let token = hash(user)

    setToken(token);
  }

  return (
    <div className="auth-wrapper">
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Логин</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Пароль</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Войти</button>
        </div>
      </form>
    </div>
  )
}

Auth.propTypes = {
  setToken: PropTypes.func.isRequired
};
