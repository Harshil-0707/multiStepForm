import Wraper from "./Wraper";
import Heading from "./Heading";
import CheckBox from "./CheckBox";
import DropDown from "./DropDown";

export default function PreviosCardiacTest() {
  const checkBox = [
    { htmlFor: "EKG" },
    { htmlFor: "Stress Test" },
    { htmlFor: "High Cholesterol" },
  ];
  return (
    <Wraper>
      <Heading text={"Previous Cardiac Tests or Procedures"} />
      <CheckBox labelText={"Previous Tests"} checkBox={checkBox} />
      <DropDown labelContent={"Previous Surgeries or Interventions"} />
    </Wraper>
  );
}
