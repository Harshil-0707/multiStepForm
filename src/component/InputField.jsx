export default function InputField({ id, type, labelText }) {
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
        autoComplete="off"
      />
    </>
  );
}
