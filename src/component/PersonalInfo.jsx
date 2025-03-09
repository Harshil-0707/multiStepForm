import Wraper from "./Wraper";
import Heading from "./Heading";
import InputField from "./InputField";

export default function PersonalInfo() {
  return (
    <>
      <Wraper>
        <Heading text={"Personal Information"} />
        <InputField id="fullName" type="text" labelText="Full Name" />
        <InputField id="Date" type="Date" labelText="Date of Birth" />
        <InputField id="phone" type="tel" labelText="Phone Number" />
        <InputField id="email" type="email" labelText="Email" />
      </Wraper>
    </>
  );
}
