import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Hero from "./components/Hero";
import {
  FormButton,
  FormButtonsContainer,
  LoginFormContainer,
} from "./components/styled/Form.styled";
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
