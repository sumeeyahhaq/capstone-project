import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg />
      </HeroBg>
      <HeroContent>
        <HeroH1>AWS Employer Portal</HeroH1>
        <HeroP>
          Welcome to the AWS Employer Portal! This platform provides clarity
          into the educational programs and recruiting resources SMB customers
          can utilize when looking to acquire new cloud talent for their
          organization. 
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
