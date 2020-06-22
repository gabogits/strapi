import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import usePropiedades from "./../hooks/usePropiedades"
import PropiedadPreview from "./propiedadPreview";
import ListadoPropiedadesCSS from '../css/listadoPropiedades.module.css'
import useFilter from "../hooks/useFilter"

const ListadoPropiedades = () => {
  const propiedades = usePropiedades()
  const [filtradas, guardarFiltradas] = useState([]);
  const  { categoria, FiltroUI} = useFilter();

  useEffect(() => {
    if(categoria) {
    const filtro = propiedades.filter(propiedad => propiedad.categorias ?  propiedad.categorias.nombre  === categoria : null)
    guardarFiltradas(filtro)
    }else {
      guardarFiltradas(propiedades)
    }
  }, [categoria ])

  //FILTRADO DE PROPIEDADES


  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
      {FiltroUI()}

      <ul className={ListadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
