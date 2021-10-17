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
  email: String;
  password: String;
  password2: String;
};

const schema = yup.object().shape({
  nickname: yup.string().required("Nickname is required"),
  email: yup.string().email("Wrong email").required("Email is required"),
  password: yup.string().min(6, "At least 6 characters"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        <Label htmlFor="email">Email:</Label>
        <InputText
          placeholder="Email Adress"
          id="email"
          type="email"
          {...register("email")}
        ></InputText>
        {errors.email?.message && (
          <ErrorText>{errors.email?.message}</ErrorText>
        )}{" "}
      </FormControl>
      <FormControl>
        <Label htmlFor="password">Password:</Label>
        <InputText
          placeholder="Password"
          id="password"
          type="password"
          {...register("password")}
        ></InputText>
        {errors.password?.message && (
          <ErrorText>{errors.password?.message}</ErrorText>
        )}{" "}
      </FormControl>
      <FormControl>
        <Label htmlFor="password2">Confirm Password:</Label>
        <InputText
          placeholder="Confirm Password"
          id="password2"
          type="password"
          {...register("password")}
        ></InputText>
        {errors.password2?.message && (
          <ErrorText>{errors.password2?.message}</ErrorText>
        )}{" "}
      </FormControl>
      <FormControl>
        <SubmitButton type="submit" value="Register"></SubmitButton>
      </FormControl>
    </Form>
  );
}
