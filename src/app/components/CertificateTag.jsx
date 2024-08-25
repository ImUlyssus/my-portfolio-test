import React from "react";

const CertificateTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-blue-400"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-2 md:px-3 py-3 sm:text-xs md:text-sm lg:text-xl cursor-pointer whitespace-nowrap`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default CertificateTag;
