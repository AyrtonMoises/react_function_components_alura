import React, { useState, useEffect } from 'react';
import DadosPessoais from './DadosPessoais.jsx';
import DadosUsuario from './DadosUsuario.jsx';
import DadosEntrega from './DadosEntrega.jsx';
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados}/>,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ];

    useEffect(()=>{
        if(etapaAtual === formularios.length-1){
            console.log(dadosColetados);
        }
    })

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }

    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}        
        </>
    );
}

export default FormularioCadastro;