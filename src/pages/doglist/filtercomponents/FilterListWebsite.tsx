import React from "react";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { filters, subCategories } from "./FilterCategories";
import { FilterProps } from "../../../components/Interfaces";

const FilterListWebsite: React.FC<FilterProps> = ({ onChange }) => {
  const [currentFilterWebsite, setCurrentFilterWebsite] = useState<
    FilterProps[]
  >([]);

  let filterFunction: FilterProps[] = [];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("checkad i filter");
    const { id, value } = event.currentTarget;
    setCurrentFilterWebsite((filterTerm) => {
      return filterTerm.map((filter) => {
        if (filter.id === id) {
          filter.options = filter.options.map((option) => {
            if (option.value === value) {
              option.checked = !option.checked;
            }
            return option;
          });
        }
        return filter;
      });
    });
    filterFunction = currentFilterWebsite;
    onChange(currentFilterWebsite);
  };

  return (
    <div>
      {" "}
      {/* Filters responsiove for websites*/}
      <form className="hidden lg:block">
        <h3 className="sr-only">Kategorier</h3>
        <h3 className="pb-8 text-xl text-stone-700">Filtrera</h3>
        <ul
          role="list"
          className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
        >
          {subCategories.map((category) => (
            <li key={category.name}>
              <a href={category.href}>{category.name}</a>
            </li>
          ))}
        </ul>

        {filters.map((section) => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-b border-gray-200 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      {section.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          onChange={handleChange}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-stone-500 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </div>
  );
};

export default FilterListWebsite;
