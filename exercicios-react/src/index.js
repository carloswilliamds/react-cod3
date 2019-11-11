import ReactDOM from "react-dom";
import React from "react"
import AD, {CompA as A, CompB as B} from "./components/MyComponent.jsx";
import Membro from "./components/Membro"
import Familia from "./components/Familia"
import ComponentF from "./components/ComponentFunction"
import Pai from "./components/Pai"
import Contador from "./components/Contador.jsx";
var element = document.getElementById("root");


ReactDOM.render(
    <>

    <Contador numeroInicial={100}></Contador>
    <Pai></Pai>
        <ComponentF></ComponentF>

        <Familia sobrenome="WAKA" idade="22">
            <Membro nome="Carlos"></Membro>
            <Membro nome="Brunna"></Membro>
        </Familia>

        <A valor="Aprendendo mais sobre react"></A>
        <B valor="Ta só começando..."></B>
        <AD valor="exportado por default"></AD>
    </>, element)