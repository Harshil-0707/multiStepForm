import { useContext } from "react";
import { formContext } from "./context";

export default function DropDown({
  labelContent = "",
  options = [{ op: "Yes" }, { op: "No" }],
}) {
  const { register } = useContext(formContext);
  return (
    <div className="mb-7">
      <label className="mb-2 block font-semibold">{labelContent}</label>
      <select
        name="answer"
        id="answer"
        defaultValue={"select..."}
        className="w-full h-13 px-2 border-[1px] focus:border-[#647dee] border-[#ddd] rounded-md"
        {...register(labelContent)}
      >
        <option value="select..." disabled>
          Select...
        </option>
        {options.map((op) => {
          return (
            <option key={op.op} value={op.op}>
              {op.op}
            </option>
          );
        })}
      </select>
    </div>
  );
}
