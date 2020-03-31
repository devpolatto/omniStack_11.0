import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import './styles.css';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
//import Button from '../../components/Button';
import api from '../../services/api';

export default function Logon() {

  const [ id, setId ] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try{
      const response = await api.post('session', { id }); 
      alert(`login efetuado com sucesso ${response.data.name}`)

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')
      console.log(response.data.name)
    } catch (err) {
      alert('falha no login, tente novamente')
    }
  }

  return (
    <div className="logon-container">
       <section className="form">
         <img src={logoImg} alt="be the heroes"/>

         <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>
            <input placeholder="sua ID" 
              value={id} 
              onChange={e => setId(e.target.value)}
            />
            <button className="button" type="submit">Entrar</button>
            <Link  className="back-link" to="/profile"><FiLogIn size={16} color="#E02041" />Não tenho cadastro</Link>
         </form>

       </section>

       <img src={heroesImg} alt="heroes"/>   
    </div> 
  );
}
