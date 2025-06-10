import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackArrow = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="absolute top-4 left-4 z-50">
      <button
        onClick={handleClick}
        className="flex items-center space-x-2 text-black/60 hover:text-black/80 transition-colors"
      >
        <ArrowLeft className="w-7 h-7" />
        {/* <span>Volver al inicio</span> */}
      </button>
    </div>
  );
};

export default BackArrow;
