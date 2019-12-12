import React from 'react';
import {Link} from "react-router-dom";
import { Container } from "./style";

export default function Menu() {
  return (
    <Container>
      <div className="cad">
          <Link className="lk" to="/Cadastro">
              <p>Cadastrar Usuário</p>
            </Link>
      </div>

      <div className="com">
        <Link className="lk" to="/Comercio">
        <p>Cadastrar Comércio</p>
        </Link>
      </div>

      <div className="prod">
      <Link className="lk" to="/Produto">
        <p>Cadastrar Produto</p>
      </Link>
      </div>

      <div className="log">
        <Link className="lk" to="/Login">
          <p>Login</p>
        </Link>
      </div>
      
    </Container>
  );
}