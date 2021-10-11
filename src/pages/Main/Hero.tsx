import React from "react";
import { HeroDecorationsImage, HeroImg } from "../../images/Hero/index";
import {
  HeroContainer,
  HeroImage,
  HeroDecorations,
  HeroTitle,
  HeroPara,
  TextContainer,
} from "./styled/Hero.styled";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroDecorations src={HeroDecorationsImage} />
      <HeroDecorations src={HeroDecorationsImage} />
      <HeroImage src={HeroImg} />
      <TextContainer>
        <HeroTitle>Tract your CV now!</HeroTitle>
        <HeroPara>It's easy!</HeroPara>
      </TextContainer>
    </HeroContainer>
  );
}
