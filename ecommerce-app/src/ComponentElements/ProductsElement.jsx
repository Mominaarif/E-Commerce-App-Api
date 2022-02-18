import styled from 'styled-components';
import { minimobile } from '../Responsive';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${minimobile({ padding: "0px" })}

`;
