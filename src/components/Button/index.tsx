import { ButtonContainer, ButtonContainerIsValed } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValue }: IButtonProps) => {

  if(isValue) {
    return ( 
      <ButtonContainer onClick={onClick}>{title}</ButtonContainer>     
    );
  }else {
    return(
      <ButtonContainerIsValed onClick={onClick}>{title} </ButtonContainerIsValed>
    );  
  }
};

export default Button;
