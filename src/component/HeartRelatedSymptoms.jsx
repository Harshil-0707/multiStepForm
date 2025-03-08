import Heading from "./Heading";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import Wraper from "./Wraper";

export default function HeartRelatedSymptoms() {
  const checkBox = [
    { htmlFor: "Chest Pain" },
    { htmlFor: "Shortness of Breath" },
    { htmlFor: "Irregular Heartbeat" },
  ];
  return (
    <Wraper>
      <Heading text={"Heart-Related Symptoms"} />
      <CheckBox labelText={"Current Symptoms"} checkBox={checkBox} />
      <TextArea content={"Other Symptoms"} htmlFor={"OtherSymptoms"} />
    </Wraper>
  );
}
