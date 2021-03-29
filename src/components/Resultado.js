import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//styled components
const Menasje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const Total = styled.p`
  color: #333;
  padding: 1rem;
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return (
    <div>
      {cotizacion === 0 ? (
        <Menasje>Elige marca, año y tipo de seguro</Menasje>
      ) : (
        <ResultadoCotizacion>
          <TransitionGroup component="span" className="resultado">
            <CSSTransition
              classNames="resultado"
              key={cotizacion}
              timeout={{ enter: 500, exit: 500 }}
            >
              <Total>
                El total es $ <span>{cotizacion}</span>
              </Total>
            </CSSTransition>
          </TransitionGroup>
        </ResultadoCotizacion>
      )}
    </div>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
