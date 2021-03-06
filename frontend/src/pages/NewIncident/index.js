import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button'

export default function NewIncident() {
   const history = useHistory();
   const ongId = localStorage.getItem('ongId');

   const [ title, setTitle ] = useState('');
   const [ description, setDescription ] = useState('');
   const [ value, setValue ] = useState('');

   async function handleNewIncident(e) {
      e.preventDefault();
      const data = { title, description, value };
      try {
         await api.post('incidents', data, { headers: { Authorization: ongId, } }); 
         alert("caso cadastrado com sucesso")
         history.push('/profile')
      } catch (err) {
         alert("Erro ao cadatrar novo caso, tente novamente")
      }
   }

  return (
   <div className="new-incident">
      <div className="content">
         <section>

         <img src={logoImg} alt="be the hero"/>
         
         <h1>Cadastro novo caso</h1>
         <p>Descreva o caso detalhadamente para encontrar um Herói para resolver isso</p>
         <Link  className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041" />voltar para home</Link>
         
         </section>

         <form onSubmit={handleNewIncident}>

         <input placeholder="Titulo do caso"
            value={title} onChange={e => setTitle(e.target.value)}
         />
         <textarea type="text" placeholder="descricao"
            value={description} onChange={e => setDescription(e.target.value)}
         />
         <input placeholder="valor em reais"
            value={value} onChange={e => setValue(e.target.value)}
         />
         
         <Button type="submit" name="Cadastrar"/>
         
         </form>
      </div>
   </div>
  );
}
