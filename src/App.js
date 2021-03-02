import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import 'fontsource-roboto'
import {Container, Typography} from '@material-ui/core'
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import {validarCPF, validarSenha} from './models/cadastro.js'


class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </ValidacoesCadastro.Provider>
      </Container>
    );
    }
}

function aoEnviarForm(dados){
  console.info(dados);
}

export default App;
