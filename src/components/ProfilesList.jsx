const ProfilesList = ({ profiles, setShowMap, setProfile }) => {
  return (
    <div
      className="px-5 py-10 md:px-20 sm:px-30 sm:py-20  sm:m-auto "
      to="/profileslist"
    >
      <div className="flex m-auto  w-1/2  mb-5 rounded-lg overflow-hidden"></div>
      {profiles?.map((profile) => (
        <ul role="list" className="divide-y divide-gray-100 " key={profile.id}>
          <li className="flex justify-between items-center gap-x-6 py-2">
            <div className="flex min-w-0 gap-x-4 ">
              <img
                className="size-10 flex-none rounded-full bg-gray-50"
                src={profile.image}
                alt="Profile-Picture"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {profile.firstName}
                </p>
                <p className="mt-1 truncate text-xs/5 ">{profile.university}</p>
              </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <button
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  setShowMap(true);
                  setProfile(profile);
                }}
              >
                Summary
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProfilesList;
