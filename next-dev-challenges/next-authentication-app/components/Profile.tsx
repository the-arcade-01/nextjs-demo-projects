import Image from "next/image";
import { userData } from "@/data";

import Link from "next/link";

import { useSession } from "next-auth/react";

interface UserType {
  image: string;
  name: string;
  bio?: string;
  phone?: number;
  email: string;
  password?: string;
}

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl text-gray-700">Personal info</h1>
        <p className="text-gray-500">Basic info, like your name and photo</p>
      </div>
      <div className="w-[800px] h-[500px] border-2 border-gray-100 my-12 rounded-xl shadow-md">
        <div className="flex justify-between py-6 px-10">
          <h1 className="text-[18px]">Profile</h1>
          <Link href="/profile/edit">
            <button className="px-6 py-2 border border-red-400 text-red-500 rounded-lg">
              Edit
            </button>
          </Link>
        </div>
        <div className="border-b-2 border-gray-100 w-full" />
        <div className="flex items-center py-4 px-10 gap-28">
          <div className="w-[100px]">
            <p className="text-gray-400 text-sm font-medium">PHOTO</p>
          </div>
          <div className="relative h-12 w-12">
            <Image
              src={`${session?.user?.image}`}
              fill
              className="object-cover rounded-lg"
              alt="profile"
            />
          </div>
        </div>
        <div className="border-b-2 border-gray-100 w-full" />
        <div className="flex items-center py-4 px-10 gap-28">
          <div className="w-[100px]">
            <p className="text-gray-400 text-sm font-medium">NAME</p>
          </div>
          <p>{session?.user?.name}</p>
        </div>
        <div className="border-b-2 border-gray-100 w-full" />
        <div className="flex items-center py-4 px-10 gap-28">
          <div className="w-[100px]">
            <p className="text-gray-400 text-sm font-medium">BIO</p>
          </div>
          <p>
            {session?.user?.bio ? (
              session.user.bio
            ) : (
              <span className="text-gray-400">Please add bio</span>
            )}
          </p>
        </div>
        <div className="border-b-2 border-gray-100 w-full" />
        <div className="flex items-center py-4 px-10 gap-28">
          <div className="w-[100px]">
            <p className="text-gray-400 text-sm font-medium">PHONE</p>
          </div>
          {session?.user?.phone ? (
            session.user.phone
          ) : (
            <span className="text-gray-400">Please add phone</span>
          )}
        </div>
        <div className="border-b-2 border-gray-100 w-full" />
        <div className="flex items-center py-4 px-10 gap-28">
          <div className="w-[100px]">
            <p className="text-gray-400 text-sm font-medium">EMAIL</p>
          </div>
          <p>{session?.user?.email}</p>
        </div>
        <div className="border-b-2 border-gray-100 w-full" />
        <div className="flex items-center py-4 px-10 gap-28">
          <div className="w-[100px]">
            <p className="text-gray-400 text-sm font-medium">PASSWORD</p>
          </div>
          {session?.user?.password ? (
            <input
              type="password"
              value={`${session.user.password}`}
              disabled
              className="bg-white"
            />
          ) : (
            <span className="text-gray-400">Logged in with Github</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
