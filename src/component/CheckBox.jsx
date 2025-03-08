export default function CheckBox({ labelText = "", checkBox = [] }) {
  return (
    <div className="mb-7">
      <label className="mb-2 inline-block font-semibold">{labelText}</label>
      <div className="flex max-[588px]:flex-col">
        {checkBox.map((cb) => {
          return (
            <div className="grow-1" key={cb.htmlFor}>
              <input
                type="checkbox"
                name={cb.htmlFor}
                id={cb.htmlFor}
                className="mr-2"
              />
              <label htmlFor={cb.htmlFor} className="font-semibold">
                {cb.htmlFor}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
