import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Accordion = ({ heading, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded bg-white">
      <button
        className="w-full flex justify-between items-center p-3"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{heading}</h3>
        <span className="text-xl transition-rotate duration-300" style={{rotate: isOpen ? "180deg" : "0deg"}}>
          <IoIosArrowDown />
        </span>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${bodyRef.current.scrollHeight}px` : "0px",
        }}
      >
        <p className="px-4 pb-4">{body}</p>
      </div>
    </div>
  );
};

export default Accordion;
