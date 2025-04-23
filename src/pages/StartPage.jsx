import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeWrapper from "../components/FadeWrapper";
import NamePrompt from "../components/NamePrompt";
import BirthdayPrompt from "../components/BirthdayPrompt";

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  const handleNameSubmit = (enteredName) => {
    setName(enteredName);
    setStep(2);
  };

  const handleBirthdaySubmit = (enteredBirthday) => {
    setBirthday(enteredBirthday);
    navigate("/results", { state: { name, birthday } });
  };

  return (
    <FadeWrapper>
      {step === 1 && <NamePrompt onSubmit={handleNameSubmit} />}
      {step === 2 && <BirthdayPrompt onSubmit={handleBirthdaySubmit} />}
    </FadeWrapper>
  );
}
