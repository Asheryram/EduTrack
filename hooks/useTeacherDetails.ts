// hooks/useTeacherDetails.ts
import { useState } from "react";

export const useTeacherDetails = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleProceed = () => {
    if (!fullName || !dob || !age || !school || !idNumber) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Teacher details submitted:", {
      fullName,
      dob,
      age,
      school,
      idNumber,
    });
    // navigation or API call here
  };

  return {
    fullName,
    dob,
    age,
    school,
    idNumber,
    setFullName,
    setDob,
    setAge,
    setSchool,
    setIdNumber,
    handleProceed,
  };
};
