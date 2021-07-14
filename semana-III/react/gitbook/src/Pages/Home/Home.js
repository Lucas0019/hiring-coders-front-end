import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [error, setError] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];

        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setError(false);
        history.push("/repositories");
      })

      .catch((error) => {
        setError(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          clasName="usuario__input"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>
      {error ? (
        <S.ErrorMsg>Usuário não encontrado, tente uma nova busca</S.ErrorMsg>
      ) : null}
    </S.HomeContainer>
  );
}

export default Home;
