import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 35vh;
`;

export const Div = styled.div`
  padding: 15px 25px;
  background-color: teal;
  color: white;
  font-size: 25px;
  border-radius: 5px;
  font-weight: 300;
 
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  background-position: center;
  border: 1.5px solid teal;
  margin-bottom: 25px;
`;

export const Para = styled.p`
  font-size: 20px;
  /* width: 400px; */
  padding-top: 25px;
  text-align: center;
`;
