import Wraper from "./Wraper";
import DropDown from "./DropDown";
import Heading from "./Heading";

export default function LifestyleFactors() {
  const options1 = [
    { op: "Current Smoker" },
    { op: "Former Smoker" },
    { op: "Never Smoked" },
  ];
  return (
    <Wraper>
      <Heading text={"Lifestyle Factors"} />
      <DropDown labelContent={"Smoking Status"} options={[...options1]} />
      <DropDown labelContent={"Alcohol Consumption"} />
    </Wraper>
  );
}
