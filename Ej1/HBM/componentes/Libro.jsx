import React, { Fragment } from "react";
import sin_portada from "../src/assets/img/sin_portada.jpg";

const Libro = (props) => {
    // Se usa la desestructuración de objetos para recoger los datos que interesan.
    const { portada, titulo, autor, id } = props;
    return (
        <Fragment>
            <article id={id ? id : crypto.randomUUID()}>
                <img width='150px' height='225px' src={portada ? portada : sin_portada}></img>

                <div>{titulo ? titulo : "No se ha especificado título."}</div>
                <div>{autor ? autor : "No se ha especificado autor."}</div>

            </article>
        </Fragment>
    );
};
export default Libro;
