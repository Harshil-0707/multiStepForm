export default function Wraper({ children }) {
  return (
    <div className="mb-5 text-left flex flex-col animate !overflow-hidden">
      {children}
    </div>
  );
}
