import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button'

export default function NewIncident() {
  return (
   <div className="new-incident">
      <div className="content">
         <section>

         <img src={logoImg} alt="be the hero"/>
         
         <h1>Cadastro novo caso</h1>
         <p>Descreva o caso detalhadamente para encontrar um Herói para resolver isso</p>
         <Link  className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041" />voltar para home</Link>
         
         </section>

         <form action="">

         <input placeholder="Titulo do caso"/>
         <textarea type="email" placeholder="descricao"/>
         <input placeholder="valor em reais"/>
         
         <Button type="submit" name="Cadastrar"/>
         
         </form>
      </div>
   </div>
  );
}
