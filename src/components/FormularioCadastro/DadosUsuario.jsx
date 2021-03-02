import React, { useState, useContext }  from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}){
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
            
        }}>
            <TextField id="email" label="Email" type="email" name="email" variant="outlined" fullWidth margin="normal" required value={email} 
            onChange={
                (event) => { setEmail(event.target.value)}
            }
            />
            <TextField id="senha" label="Senha" name="senha" type="password" variant="outlined" fullWidth margin="normal" required value={senha}
            onChange={
                (event) => { setSenha(event.target.value)}
            }
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            onBlur={validarCampos}
            />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;