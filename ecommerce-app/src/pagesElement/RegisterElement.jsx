import styled from 'styled-components';

//Import Local Files
import { mobile, minimobile, miniTablet, tablet } from '../Responsive';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: center;    
`;
export const Wrapper = styled.div`
    width: 33%;
    padding: 20px;
    background-color: white;
    ${minimobile({ width: "75%" })}
    ${mobile({ width: "75%" })}
    ${miniTablet({ width: "60%" })}
    ${tablet({ width: "40%" })}

`;
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
export const Agreement = styled.span`
    font-size: 12px; 
    margin: 20px 0px;
`;
export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 20px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;