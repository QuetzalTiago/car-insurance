import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import styled from "@emotion/styled";

//styled components
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  //react state
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
  });

  const [cargando, guardarCargando] = useState(false);

  //extraer datos de resumen
  const { datos, cotizacion } = resumen;
  return (
    <Contenedor>
      <Header titulo={"Cotizador de seguros"} />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        ></Formulario>
        {cargando ? <Spinner /> : null}
        {datos ? !cargando ? <Resumen datos={datos} /> : null : null}
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
