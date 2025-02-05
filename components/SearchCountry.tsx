"use client";

import { useStepContext } from "@/context/GlobalContext";
import { countries } from "@/assets/listOfCountries";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { BiChevronDown } from "react-icons/bi";

type Countries = {
  name: string;
  code: string;
  phone: number;
};

const SearchCountry = () => {
  const { errorMessage, userData, setUserData } = useStepContext()!;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");
  const [filteredCountries, setFilteredCountries] =
    useState<Countries[]>(countries);

  const redBorderPrefix = errorMessage.prefix
    ? "outline-red-500"
    : "outline-gray-300";

  const toggleDropDown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const searchCountry = (e: any) => {
    let keyword = e.target.value;
    setSearchVal(keyword);

    let filtered = countries.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredCountries(filtered);

    console.log(filteredCountries);
  };

  return (
    <>
      <div className="relative">
        <input
          readOnly
          value={userData["prefix"]}
          onChange={(e) => {
            setUserData({ ...userData, prefix: e.target.value });
          }}
          onClick={toggleDropDown}
          data-dropdown-toggle="dropdown-search-country"
          id="dropdown"
          name="prefix"
          aria-label="country prefix number"
          className={`block col-start-1 outline outline-gray-300 outline-1 rounded-3xl row-start-1 w-full appearance-none py-1.5 pr-7 pl-3 text-base text-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6 ${redBorderPrefix}`}
        />
        <BiChevronDown
          aria-hidden="true"
          className="absolute inset-y-0 top-0 end-1 pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-6"
        />
      </div>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div className="x-100 overflow-y-auto fixed top-0 left-0 right-0 bottom-0 sm:mx-auto sm:w-full sm:max-w-sm mt-3">
          <div>
            <div className="relative flex">
              <input
                onChange={searchCountry}
                value={searchVal}
                type="text"
                id="default-search"
                className="block w-full rounded-3xl bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 outline placeholder:mt-4 sm:mx-auto sm:w-full sm:max-w-sm focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/7"
                placeholder="Search"
              />
              {/* <div className="absolute top-2.5 right-12 flex items-center ps-3 pointer-events-none text-gray-600">
                <CiSearch size={23} />
              </div> */}
              <div className="mt-2 ml-4 mr-4">
                <LiaTimesSolid
                  onClick={() => {
                    setIsOpen(false);
                    setSearchVal("");
                    setFilteredCountries(countries);
                  }}
                  size={26}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div
            id="dropdown-search-country"
            className="z-10 mt-3 w-full bg-white divide-y divide-gray-100 shadow-sm dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {filteredCountries.map((country, inx) => (
                <li key={inx}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div
                      onClick={() => {
                        setSearchVal(country.name);
                        setUserData({
                          ...userData,
                          prefix: `+${country.phone}`,
                        });
                      }}
                      className="inline-flex items-center"
                    >
                      <Icon
                        className="pr-3"
                        icon={`circle-flags:${country.code.toLowerCase()}`}
                        width="26"
                        height="26"
                      />
                      <span className="mr-3">+{country.phone}</span>
                      <span>{country.name}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCountry;
