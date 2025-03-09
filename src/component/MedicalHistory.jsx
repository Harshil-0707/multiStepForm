import Wraper from "./Wraper";
import Heading from "./Heading";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import CheckBox from "./CheckBox";

export default function MedicalHistory() {
  const checkBox = [
    { htmlFor: "Hypertension" },
    { htmlFor: "Diabetes" },
    { htmlFor: "High Cholesterol" },
  ];
  return (
    <Wraper>
      <Heading text={"Medical History"} />
      <CheckBox labelText={"Known Medical Conditions"} checkBox={checkBox} />
      <DropDown labelContent={"Family History of Heart Disease"} />
      <TextArea
        content={"Current Medications"}
        htmlFor={"CurrentMedications"}
      />
    </Wraper>
  );
}
