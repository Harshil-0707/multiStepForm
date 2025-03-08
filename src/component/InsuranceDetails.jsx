import InputField from "./InputField";
import Heading from "./Heading";

export default function InsuranceDetails() {
  return (
    <>
      <div className="mb-5 text-left flex flex-col">
        <Heading text={"Insurance Details"} />
        <InputField
          id="InsuranceProvider"
          type="text"
          labelText="Insurance Provider"
        />
        <InputField id="PolicyNumber" type="text" labelText="Policy Number" />
      </div>
    </>
  );
}
