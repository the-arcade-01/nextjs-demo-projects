import plusIcon from "../public/images/icon-plus.svg";
import minusIcon from "../public/images/icon-minus.svg";
import deleteIcon from "../public/images/icon-delete.svg";
import editIcon from "../public/images/icon-edit.svg";
import replyIcon from "../public/images/icon-reply.svg";
import profile from "../public/images/avatars/image-juliusomo.png";

import Image from "next/image";
import { useState } from "react";

const CommentBox = () => {
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="w-[800px] flex items-center justify-evenly bg-white p-6 gap-5 rounded-lg">
      <div className="flex flex-col items-center gap-3 justify-center bg-gray-100 rounded-lg p-3 self-start">
        <div className="relative h-3 w-3">
          <Image
            src={plusIcon}
            fill
            className="object-contain cursor-pointer"
            alt="plusIcon"
            onClick={handlePlus}
          />
        </div>
        <p className="text-purple-700 text-md font-semibold">{counter}</p>
        <div className="relative h-3 w-3">
          <Image
            src={minusIcon}
            fill
            className="object-contain cursor-pointer"
            alt="minusIcon"
            onClick={handleMinus}
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-evenly gap-5 pb-3">
            <div className="relative h-9 w-9">
              <Image
                src={profile}
                fill
                className="object-cover"
                alt="profile"
              />
            </div>
            <h2 className="font-bold text-gray-700">juliusomo</h2>
            <p className="text-gray-400">1 month ago</p>
          </div>
          {!active ? (
            <div className="flex gap-2 items-center cursor-pointer">
              <Image width={12} height={12} src={replyIcon} alt="reply" />
              <p className="font-semibold text-purple-700 text-[15px] hover:text-blue-300 transition duration-300 ease-in-out">
                Reply
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <div className="flex gap-2 items-center cursor-pointer">
                <Image width={12} height={12} src={deleteIcon} alt="reply" />
                <p className="font-semibold text-red-600 text-[15px] hover:text-red-300 transition duration-300 ease-in-out">
                  Delete
                </p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <Image width={12} height={12} src={editIcon} alt="reply" />
                <p className="font-semibold text-purple-700 text-[15px] hover:text-blue-300 transition duration-300 ease-in-out">
                  Edit
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ad libero, sint autem similique officiis cum alias in error
            molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
