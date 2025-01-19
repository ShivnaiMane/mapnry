import React, { useEffect, useState } from "react";

const ProfilesList = () => {
  const [users, setUsers] = useState([]);

  const fetchProfilesData = async () => {
    try {
      const resopnse = await fetch(
        "https://dummyjson.com/users?limit=5&select=firstName,lastName,image,university,address"
      );
      const data = await resopnse.json();
      setUsers(data.users);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProfilesData();
  }, [users]);

  return (
    <div className="px-5 py-10 md:px-20 sm:px-30 sm:py-20  sm:m-auto ">
      <div className="flex m-auto  w-1/2  mb-5 rounded-lg overflow-hidden"></div>
      {users.map((user) => (
        <ul role="list" className="divide-y divide-gray-100 " key={user.id}>
          <li className="flex justify-between items-center gap-x-6 py-2">
            <div className="flex min-w-0 gap-x-4 ">
              <img
                className="size-10 flex-none rounded-full bg-gray-50"
                src={user.image}
                alt="Profile-Picture"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {user.firstName}
                </p>
                <p className="mt-1 truncate text-xs/5 ">{user.university}</p>
              </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end"></div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProfilesList;
