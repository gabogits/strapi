import React from 'react';
import {Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Navegation from './Navegation';


const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;
const Header = () => {

    //consultar el logo.svg
   const {logo }=  useStaticQuery(graphql`
    query {
        logo: file(relativePath: {eq: "logo.svg"}) {
          publicURL
        }
      }
      
    `)


    return ( 
        <header
        css={css`
           background-color: #0D2838;
            padding: 1rem;
        `}
    >
        <div
            css={css`
                max-width: 1200px;
                margin: 0 auto;
                @media (min-width: 768px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}
        >
            <EnlaceHome  to='/'
                css={css`
                    color: #FFF;
                    text-align: center;
                `}
            > 
            <img src={logo.publicURL} alt="logotipo" />
            </EnlaceHome>

            <Navegation />

        </div>
    </header>
     );
}
 
export default Header;