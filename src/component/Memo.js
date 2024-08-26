import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";

const Memo = ({ item }) => {
  let memoImg = `https://github.com/MystyS2/mysty-phonebook/blob/master/public/assets/memo${
    (item.index % 6) + 1
  }.png?raw=true`;
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <div className="w-[300px] relative">
      <div className="w-full align-middle">
        <img src={memoImg} alt="memo1" onLoad={handleImageLoad} />
      </div>
      {isImageLoaded ? (
        <div>
          {" "}
          <div className="absolute top-[65px] left-16 text-3xl text-center text-[#9b2a2a] font-semibold">
            Name
          </div>
          <div className="absolute top-[110px] left-16 text-2xl text-center text-white">
            {item.name}
          </div>
          <div className="absolute top-[152px] left-16 text-3xl text-center text-[#9b2a2a] font-semibold">
            Phone
          </div>
          <div className="absolute top-[195px] left-16 text-2xl text-center text-white">
            {item.phoneNumber}
          </div>
        </div>
      ) : (
        <Spinner label="Loading" color="danger" labelColor="danger" className="grid place-items-center m-28"/>
      )}
    </div>
  );
};

export default Memo;
