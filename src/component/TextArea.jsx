import { useContext } from "react";
import { formContext } from "./context";
export default function TextArea({ content, htmlFor }) {
  const { register } = useContext(formContext);

  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="mb-2 block font-semibold">
        {content}
      </label>
      <textarea
        name={htmlFor}
        id={htmlFor}
        className="border-[1px] p-2 h-[6rem] focus:border-[#647dee] border-[#ddd] rounded-md w-full"
        {...register(htmlFor)}
      ></textarea>
    </div>
  );
}
