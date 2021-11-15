import './App.css';
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations';


function Banner({banner}) {

    const StyledBanner = styled.h2`
    animation: 2s ${keyframes`${pulse}`};
    font-size: 6rem;
    text-align: center;
    color: yellow;
    padding: 5rem;
    margin: auto;

    @media screen and (max-width: 300px) {
      transition: all .25s ease-in-out;
    };
    `;

    const Box = styled.div`
        max-width: 800px;
        border-radius: 50px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0 0 1px rgb(10 10 10 / 2%);
        background-color: rgba(122,7,46,0.3);

        @media screen and (max-width: 500px) {
            transition: all .25s ease-in-out;
            max-width: 300px;
        };
`;

    return (
        <Box>
        <StyledBanner>{banner}</StyledBanner>
        </Box>
    )
}

export default Banner;