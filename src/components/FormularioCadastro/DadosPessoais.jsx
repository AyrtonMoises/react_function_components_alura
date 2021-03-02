import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome,setNome] = useState("Tinho");
    const [sobrenome,setSobrenome] = useState("Sousa");
    const [cpf,setCpf] = useState("");
    const [promocoes,setPromocoes] = useState(true);
    const [novidades,setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome,sobrenome,cpf,promocoes,novidades});
            }
            
        }}>
            <TextField id="nome" label="Nome" name="nome" variant="outlined" fullWidth margin="normal" required
            value={nome}
            onChange={(event)=> {
                setNome(event.target.value);        
            }} />
            <TextField id="sobrenome" label="Sobrenome" name="sobrenome" variant="outlined" fullWidth margin="normal" required
            value={sobrenome}
            onChange={(event)=> {
                setSobrenome(event.target.value);
            }} />
            <TextField id="CPF" label="CPF" name="cpf" variant="outlined" fullWidth margin="normal" required
            value={cpf}
            onChange={(event)=> {
                setCpf(event.target.value);        
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            onBlur={validarCampos}
            />
            <FormControlLabel label="Promoções" control={<Switch name="promocoes" checked={promocoes} color="primary" 
                onChange={(event) =>{
                    setPromocoes(event.target.checked);
                }}
            />} />
            <FormControlLabel label="Novidades" control={<Switch name="novidades" checked={novidades} color="primary" 
                onChange={(event)=>{
                    setNovidades(event.target.checked);
                }}
            />} />
            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    )
}

export default DadosPessoais;