import styled from 'styled-components';

//Import Local Files
import { minimobile, mobile, miniTablet, tablet } from '../Responsive';

export const Container = styled.div`

`;
export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${minimobile({ padding : "10px", flexDirection: "column" })}
    ${mobile({ padding : "10px", flexDirection: "column" })}
    ${miniTablet({ padding : "10px", flexDirection: "column" })}
    ${tablet({ padding : "30px", height: "65vh" })}
`;
export const ImageContainer = styled.div`
    flex: 1;
    height: 80vh;
;
`;
export const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${minimobile({ height : "40vh" })}
    ${mobile({ height : "40vh" })}
    ${miniTablet({ height : "40vh" })}
    ${tablet({ height: "65vh" })}


`;
export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${minimobile({ padding : "10px" })}
    ${mobile({ padding : "10px" })}
    ${miniTablet({ padding : "10px" })}
    ${tablet({ padding : "0px 20px"})}
`;
export const Title = styled.h1`
    font-weight: 200;
`;
export const Desc = styled.p`
    margin: 20px 0px;
    ${tablet({ margin : "15px 0px"})}
`;
export const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
    ${tablet({ fontSize : "30px"})}
`;
export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 20px 0px;
    ${minimobile({ padding : "10px" })}
    ${mobile({ padding : "10px" })}
    ${miniTablet({ padding : "10px" })}

`;
export const Filter = styled.div`
    display: flex;
    align-items: center;
    ${tablet({ marginRight: "-9pc"})}
`;
export const FilterText = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
export const Select = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
export const Option = styled.option`
    padding: 5px 0px;
`;
export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
    ${tablet({ margin: "0px 2.5px"})}
`;
export const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${minimobile({ width : "100%" })}
    ${mobile({ width : "100%" })}
    ${miniTablet({ width : "100%" })}
    ${tablet({ width : "100%" })}

`;
export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
export const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: teal;
        color: white;
    }
`;
