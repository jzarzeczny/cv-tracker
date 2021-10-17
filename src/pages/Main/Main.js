import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Hero from "./Hero";
import {
  FormButton,
  FormButtonsContainer,
  LoginFormContainer,
} from "./styled/Form.styled";
import { MainContainer } from "../../components/Container.styled";

export default function Main() {
  const [register, setRegister] = useState(false);

  const toggleRegister = () => {
    setRegister((prevState) => !prevState);
  };

  console.log(register);
  return (
    <MainContainer>
      <Hero />
      <LoginFormContainer>
        <FormButtonsContainer>
          <FormButton
            onClick={() => toggleRegister()}
            active={register ? false : true}
            disabled={!register}
          >
            Login
          </FormButton>
          <FormButton
            onClick={() => toggleRegister()}
            active={register ? true : false}
            disabled={register}
          >
            Register
          </FormButton>
        </FormButtonsContainer>
        {register ? <RegisterForm /> : <LoginForm />}
      </LoginFormContainer>
    </MainContainer>
  );
}
