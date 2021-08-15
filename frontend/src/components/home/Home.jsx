import React from 'react'
import Main from '../template/Main'
import logo from '../../assets/img/logo-002.png'

export default props =>
    <Main icon="home" title="Início" 
        subtitle="">
        <div className="display-4">Bem Vindo!</div>
        <img src={logo} alt="logo" />
        <hr />
        <p className="mb-0">Sistema para cadastro dos alunos da sua escola! 
        Tenha o melhor controle e gerenciamento de seus acadêmicos!</p>
    </Main>