import { useList } from "../../contexts/ListProvider";
import * as React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { useFilter } from "../../contexts/FilterProvider";
import { HeaderFilter } from "./styles";

export const Header: React.FC = () => {
  const { countries } = useList();
  const { setfilterLetters, handleClick } = useFilter();

  return (
    <HeaderFilter>
      <div>
        <p>Escolha a letra inicial do país desejado</p>
        <div>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            <Button variant="text" onClick={() => setfilterLetters(countries)}>
              Todos
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("A");
              }}
            >
              A
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("B");
              }}
            >
              B
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("C");
              }}
            >
              C
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("D");
              }}
            >
              D
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("E");
              }}
            >
              E
            </Button>
            <Button
              onClick={() => {
                handleClick("F");
              }}
            >
              F
            </Button>
            <Button
              onClick={() => {
                handleClick("G");
              }}
            >
              G
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("H");
              }}
            >
              H
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("I");
              }}
            >
              I
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("J");
              }}
            >
              J
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("K");
              }}
            >
              K
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("L");
              }}
            >
              L
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("M");
              }}
            >
              M
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("N");
              }}
            >
              N
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("O");
              }}
            >
              O
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("P");
              }}
            >
              P
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("Q");
              }}
            >
              Q
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("R");
              }}
            >
              R
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("S");
              }}
            >
              S
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("T");
              }}
            >
              T
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("U");
              }}
            >
              U
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("V");
              }}
            >
              V
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("W");
              }}
            >
              W
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("X");
              }}
            >
              X
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("Y");
              }}
            >
              Y
            </Button>
            <Button
              variant="text"
              onClick={() => {
                handleClick("Z");
              }}
            >
              Z
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </HeaderFilter>
  );
};
