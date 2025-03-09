import Wraper from "./Wraper";
import Heading from "./Heading";
import InputField from "./InputField";

export default function InsuranceDetails() {
  return (
    <>
      <Wraper>
        <Heading text={"Insurance Details"} />
        <InputField
          id="InsuranceProvider"
          type="text"
          labelText="Insurance Provider"
        />
        <InputField id="PolicyNumber" type="text" labelText="Policy Number" />
      </Wraper>
    </>
  );
}
