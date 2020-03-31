import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';

export default function Register() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ city, setCity ] = useState('')
  const [ uf, setUf ] = useState('')

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    const data={ name, email, whatsapp, city, uf }

    try{
      const response = await api.post('ongs', data); history.push('/')
      alert(`seu ID de acesor: ${ response.data.id }`)
    } catch(err) {
      alert('erro no cadastro, tente novamente')
      console.log(err)
    }

  }

  return (
    <div className="register-container">
       <div className="content">
          <section>

            <img src={logoImg} alt="be the hero"/>
            
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na lpataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
            <Link  className="back-link" to="/"><FiArrowLeft size={16} color="#E02041" />Não tenho cadastro</Link>
          
          </section>

          <form onSubmit={handleRegister}>

            <input placeholder="Nome da ONG"
              value={name} onChange={e => setName(e.target.value)}
            />
            <input type="email" placeholder="email"
              alue={email} onChange={e => setEmail(e.target.value)}
            />
            <input placeholder="whatsapp"
            alue={whatsapp} onChange={e => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
              <input placeholder="cidade"
                alue={city} onChange={e => setCity(e.target.value)}
              />
              <input placeholder="UF" style={{ width: 80 }}
              value={uf} onChange={e => setUf(e.target.value)}
              />
            </div>
            
            <Button type="submit" name="Cadastrar"/>
            
          </form>
       </div>
    </div>
  );
}
