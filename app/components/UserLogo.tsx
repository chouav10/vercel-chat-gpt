import React from "react";
import Image from "next/image";

type Props = {};

const UserLogo = (props: Props) => {
  return (
    <div className="relative p-1 h-9 w-9 text-white flex items-center justify-center rounded-2xl">
      <Image
        src="/USBLogo.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default UserLogo;
