import React from "react";
import '../../App.css'
import education_program_backdrop from "../../assets/blue-background-image.png";

export default function EducationPrograms() {
  return (
    <>
     <div className="card text-center">
      <div className="overflow"></div>
      <img src={education_program_backdrop} alt="Education Program Backdrop"/>
    </div>
    </>
  );
}

