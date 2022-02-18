import styled from 'styled-components';


//Import Local Files
import { minimobile, mobile, tablet } from '../Responsive';

export const Container = styled.div`

`;
export const Title = styled.h1`
    margin: 20px;
`;
export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Filter = styled.div`
    margin: 20px;
    ${minimobile({ marginTop: "0px" })}
    ${mobile({ width : "0px 20px", display: "flex", flexDirection: "column" })}
    ${tablet({ display: "flex", flexDirection: "column", width : "0px 20px" })}

`;
export const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${minimobile({ fontSize: "15px" })}
    ${mobile({ marginRight: "0px" })}
`;
export const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${minimobile({marginRight: "5px", padding: "5px", marginBottom: "5px" })}
    ${mobile({ margin: "10px 0px" })}

`;
export const Option = styled.option``;
export const Div = styled.div`
`;