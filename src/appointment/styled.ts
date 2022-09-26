import { Button } from './../login/styled';

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  `;
export const Title = styled.div`
font-size: 50px;
font-weight: bold;
margin-bottom: 20px;
color: black;`

export const Input = styled.input`
width: 100%;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
margin-bottom: 10px;`

export const ButtonC = styled.button`
justify-content: center;
align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: white;
  background-color: green;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;`

export const ButtonR = styled.button`
justify-content: center;
align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: white;
  background-color: red;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
`


