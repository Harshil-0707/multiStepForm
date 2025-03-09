import { formContext } from "./context";
import { useContext } from "react";

export default function InputField({ id, type, labelText }) {
  const { register } = useContext(formContext);
  return (
    <>
      <label htmlFor={id} className="mb-2 font-semibold inline-block">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className="border-[1px] border-[#ddd] rounded-md mb-3 h-[3rem] focus:border-[#647dee] px-3"
        required
        {...register(id)}
        autoComplete="off"
      />
    </>
  );
}
