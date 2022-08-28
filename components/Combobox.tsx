import React, { Dispatch, SetStateAction, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

interface comboboxProps {
  options: string[];
  title: string;
  selectedoption: string;
  setSelectedoption?: Dispatch<SetStateAction<string>>;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown({
  options,
  title,
  selectedoption,
  setSelectedoption,
}: comboboxProps) {
  const [query, setQuery] = useState("");

  const filteredoptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });
  const handleSelectedMember = (option: string) => {
    setSelectedoption ? setSelectedoption(option) : null;
  };
  return (
    <Combobox as="div" value={selectedoption} onChange={handleSelectedMember}>
      <Combobox.Label className="block text-md font-poppins text-gray-700">
        {title}
      </Combobox.Label>
      <div className="relative">
        <Combobox.Input
          className=" w-full rounded-md border border-gray-300 bg-white py-4 ml-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredoptions.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredoptions.map((option, i) => (
              <Combobox.Option
                key={i}
                value={option}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames("block truncate")}>
                      {option}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}

export default Dropdown;
