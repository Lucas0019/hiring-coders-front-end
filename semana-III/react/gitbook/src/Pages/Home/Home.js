import React, { useState } from "react";
import axios from "axios";
import * as S from './styled'
import { useHistory } from "react-router-dom"

function Home(props) {

  const history = useHistory()
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
         const repositories = response.data
         const repositoriesName = []
         
         repositories.map((repository) => {
             repositoriesName.push(repository.name)
         })
         localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
         history.push('/repositories')
      });
  }


  return (
    <S.Container>
      <S.Input
        clasName="usuario__input"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <S.Button type="button" onClick={handlePesquisa}>
        Pesquisar
      </S.Button>
    </S.Container>
  );
}

export default Home;
