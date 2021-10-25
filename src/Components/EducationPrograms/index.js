import React from "react";
import Icon1 from "/Users/hsumeeya/Desktop/react-website-techu/src/Images/education-programs-card-bg-o.png";
import Icon2 from "/Users/hsumeeya/Desktop/react-website-techu/src/Images/education-programs-card-bg-o.png";
import Icon3 from "/Users/hsumeeya/Desktop/react-website-techu/src/Images/education-programs-card-bg-o.png";
import {
  EducationProgramsContainer,
  EducationProgramsH1,
  EducationProgramsWrapper,
  EducationProgramsCard,
  EducationProgramsIcon,
  EducationProgramsH2,
  EducationProgramsP,
} from "./EducationProgramElements";

const EducationPrograms = () => {
  return (
    <EducationProgramsContainer id="education-programs">
      <EducationProgramsH1>AWS Education Programs</EducationProgramsH1>
      <EducationProgramsWrapper>
        <EducationProgramsCard>
          <EducationProgramsIcon src={Icon1} />
          <EducationProgramsH2>AWS Academy</EducationProgramsH2>
          <EducationProgramsP>
            Provides higher education institutions with cloud
            computing curriculum that prepares students for AWS Certifications
            and cloud jobs. 
          </EducationProgramsP>
        </EducationProgramsCard>
        <EducationProgramsCard>
          <EducationProgramsIcon src={Icon2} />
          <EducationProgramsH2>AWS Educate</EducationProgramsH2>
          <EducationProgramsP>
            Gives self-paced learners access to content aligned
            to the 12 most in-demand cloud jobs at AWS. Provides digital
            literacy skills for learners.‬‬‬
          </EducationProgramsP>
        </EducationProgramsCard>
        <EducationProgramsCard>
          <EducationProgramsIcon src={Icon3} />
          <EducationProgramsH2>AWS re/Start</EducationProgramsH2>
          <EducationProgramsP>
            A full-time, classroom-based development and
            training program that prepares individuals for entry-level cloud
            positions. 
          </EducationProgramsP>
        </EducationProgramsCard>
      </EducationProgramsWrapper>
    </EducationProgramsContainer>
  );
};

export default EducationPrograms;
