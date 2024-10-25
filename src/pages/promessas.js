import { useState } from "react";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from "react-bootstrap";
export default function promessa(){
const[pao, setpao] = useState("")
    setTimeout(() => {
    document.tittle = "promessa é divida";
    setpao("é uma divida")
    }, 2000);
    return<>
        <menu />
        <Container>
            promessa {pao}
        </Container>
        <footer/>
    </>
}
