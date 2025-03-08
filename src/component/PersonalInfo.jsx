import Heading from "./Heading";
import InputField from "./InputField";

export default function PersonalInfo() {
  return (
    <>
      <div className="mb-5 text-left flex flex-col">
        <Heading text={"Personal Information"} />
        <InputField id="fullName" type="text" labelText="Full Name" />
        <InputField id="Date" type="Date" labelText="Date of Birth" />
        <InputField id="phone" type="tel" labelText="Phone Number" />
        <InputField id="email" type="email" labelText="Email" />
      </div>
    </>
  );
}
