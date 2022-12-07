import styled from 'styled-components';


export const ButtonContainer = styled.button`
    margin-left: 2.5rem;
    width: 80%;
    height: 42px;
    background-color: #E4105D;
    color: #FFF;

    border: 1px solid #E4105D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`
export const ButtonContainerIsValed = styled.button`
    width: 100%;
    height: 42px;
    background-color: #555;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`