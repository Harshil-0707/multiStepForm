import { useState } from "react";
import { useForm } from "react-hook-form";
import { formContext } from "./component/context";
import PersonalInfo from "./component/PersonalInfo";
import MedicalHistory from "./component/MedicalHistory";
import InsuranceDetails from "./component/InsuranceDetails";
import LifestyleFactors from "./component/LifestyleFactors";
import PreviosCardiacTest from "./component/PreviousCardiacTests";
import HeartRelatedSymptoms from "./component/HeartRelatedSymptoms";

function App() {
  const [width, setWidth] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  const submit = (e) => {
    setWidth(0);
    console.log(e);
    setCurrIndex(0);
    reset();
    alert("Your form is submitted");
  };

  return (
    <formContext.Provider value={{ register }}>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full min-h-[100dvh] flex justify-center items-center overflow-hidden"
      >
        <div className="shadow-[-2px_1px_24px_-2px_#b3b3b3] my-4 w-[80%] px-7 py-4 text-center rounded-xl">
          <div className="text-[#647dee] font-bold text-[2.3rem] mb-8 max-md:text-[clamp(1.5rem,6dvw-10px,2rem)]">
            Cardiology Intake Form
          </div>
          <div className="w-full bg-[#eee] h-1 mb-7 overflow-hidden">
            <div
              className="bg-linear-to-r from-[#647dee] to-[#7f53ac] h-1 transition-width duration-500"
              style={{ width: `${width}%` }}
            />
          </div>
          <div>
            {(() => {
              switch (currIndex) {
                case 0:
                  return <PersonalInfo />;
                case 1:
                  return <InsuranceDetails />;
                case 2:
                  return <MedicalHistory />;
                case 3:
                  return <HeartRelatedSymptoms />;
                case 4:
                  return <LifestyleFactors />;
                case 5:
                  return <PreviosCardiacTest />;
                default:
                  return "";
              }
            })()}
          </div>
          <div className="text-left flex justify-between w-full">
            {currIndex ? (
              <button
                type="button"
                className="bg-[#eee] text-black px-8 py-3 rounded-lg hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                onClick={() => {
                  setWidth((prev) => prev - 20);
                  setCurrIndex(currIndex - 1);
                }}
              >
                Previous
              </button>
            ) : (
              ""
            )}
            {currIndex >= 5 ? (
              <button
                type="submit"
                className="bg-[#04AA6D] text-white px-8 py-3 rounded-lg hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#647dee] text-white px-8 py-3 rounded-lg hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrIndex(currIndex + 1);
                  setWidth((prev) => prev + 20);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </formContext.Provider>
  );
}

export default App;
