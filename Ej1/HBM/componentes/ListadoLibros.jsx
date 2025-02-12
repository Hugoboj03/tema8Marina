import biblioteca from "../src/assets/bbdd/biblioteca.json";
import Libro from "../componentes/Libro.jsx";
import React, { Fragment } from "react";
//import { Container, Header, Title } from '../src/styles.js'

const ListadoLibros = () => {
    return (
        <Fragment>
            <h2>Listado de libros</h2>

            {/* Se recorre el array libros dentro del objeto biblioteca. */}
            {Array.isArray(biblioteca.libros) && biblioteca.libros.length
            ?
            biblioteca.libros.map((datos_libro) => {
                /* En cada iteración se devuelve un componente <Libro>. */
                return (
                    <Libro
                    key={datos_libro.id}
                    id={datos_libro.id}
                    titulo={datos_libro.titulo}
                    autor={datos_libro.autor}
                    portada={datos_libro.portada}
                    />
                );
            })
            : /* ...o se muestra un mensaje en su lugar. */
            "No se han encontrado libros."
           }
        </Fragment>


    );
};


export default ListadoLibros;