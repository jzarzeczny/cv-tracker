import React from "react";
import {
  Form,
  Label,
  InputText,
  FormControl,
  ErrorText,
  SubmitButton,
} from "./styled/Form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type Inputs = {
  nickname: String;
  password: String;
};

const schema = yup.object().shape({
  nickname: yup.string().required("Nickname is required"),
  password: yup.string().required("Password is required"),
});
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Label htmlFor="nickname">Username:</Label>
        <InputText
          placeholder="Nickname"
          id="nickname"
          {...register("nickname")}
        ></InputText>
        {errors.nickname?.message && (
          <ErrorText>{errors.nickname?.message}</ErrorText>
        )}
      </FormControl>
      <FormControl>
        <Label htmlFor="password">Password:</Label>
        <InputText
          placeholder="Password"
          id="password"
          type="password"
          {...register("password", { required: true })}
        ></InputText>
        {errors.password?.message && (
          <ErrorText>{errors.password?.message}</ErrorText>
        )}
      </FormControl>
      <FormControl>
        <SubmitButton type="submit" value="Login"></SubmitButton>
      </FormControl>
    </Form>
  );
}
