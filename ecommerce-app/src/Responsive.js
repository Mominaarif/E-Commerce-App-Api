import { css } from "styled-components";

export const minimobile = (props) => {
    return css`
      @media only screen and (max-width: 325px) and (min-width: 230px){
        ${props}
      }
    `;
  };

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 450px) and (min-width: 325px){
      ${props}
    }
  `;
};

export const miniTablet = (props) => {
    return css`
      @media only screen and (max-width: 550px) and (min-width: 450px) {
        ${props}
      }
    `;
  };

export const tablet = (props) => {
    return css`
      @media only screen and (max-width: 800px) and (min-width: 550px) {
        ${props}
      }
    `;
  };
