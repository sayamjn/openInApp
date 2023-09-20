import React, { useState, useEffect } from "react";
import Image from "next/image";
import user from "../../public/user.png";
import { BsBell } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const [image, setImage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      setImage(session.data.user.image);
    }
  }, [session.status,session.data.user.image]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            placeholder="Search"
            className="hidden md:block rounded-md px-2 py-1 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
          />
          <BsBell className="w-6 h-6 text-gray-600" />
          <div className="relative">
            <Image
              src={image ? image : user}
              width={32}
              height={32}
              id="userImage"
              alt="user"
              className="rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute z-10 flex flex-col right-0 mt-10 w-40 bg-white border border-gray-300 rounded-lg shadow-lg divide-y divide-gray-300">
                <button
                  className="py-2 px-4 hover:bg-gray-100 text-left w-full text-sm font-semibold"
                  onClick={toggleDropdown}
                >
                  Dashboard
                </button>
                <button
                  className="py-2 px-4 hover:bg-red-500 hover:text-white text-left w-full text-sm font-semibold"
                  onClick={() => signOut("google")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default NavBar;
