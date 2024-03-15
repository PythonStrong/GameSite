import React from "react";

function Pos() {
  return (
    <div className="pos flex flex-col gap-10">
      <div className="translate-x-40 mt-[100px] flex flex-col gap-14">
        <h1 className="text-[50px] text-[white]">Xbox Design Lab</h1>
        <h3 className="text-[34px] w-[533px] text-[white]">
          Make yours one in a billion with new colors, metallic finishes and
          rubberized grips.
        </h3>
        <div className="flex items-center gap-5">
          <button className="text-[white] w-[257px] bg-gray-600 h-[58px] rounded-[10px]">
            Design Yours
          </button>
          <button className="text-[white] w-[309px] bg-[#8DD83D] h-[58px] rounded-[10px]">
            Explore Consoles & Accessories
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pos;
