import styled from "styled-components";
import { Link } from "react-router-dom"

// Estilizando atributod html
export const Container = styled.div`
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: sans-serif;
  font-size: 2rem;
  color: #212121;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: none;
`;

export const ListItem = styled.li`
  margin:  .5rem 0;
  background-color: #212121;
  color: #fff;
  padding: .5rem
`;

// Estilizando componentes react
export const LinkHome = styled(Link)`
  display: block;
  width:  4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
  border-radius: 1rem;
`