import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
<<<<<<< HEAD:src/pages/doglist/filtercomponents/FilterListMobile.tsx
import { filters, subCategories } from "./FilterCategories";
import { FilterProps } from "../../../components/Interfaces";

<<<<<<< HEAD:src/pages/doglist/filtercomponents/FilterListMobile.tsx
<<<<<<< HEAD:src/pages/doglist/filtercomponents/FilterMobile.tsx
function FilterMobile() {
  // const [filterTerm, setFilterTerm] = useState<FilterProps[]>([]);

  // let filterFunction: FilterProps[] = [];
  // const handleChange = (event: any) => {
  //   event.preventDefault();
  //   setFilterTerm(filterFunction);
  //   onChange(filterFunction);
  // };
=======
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e:src/pages/doglist/filtercomponents/FilterList.tsx
const FilterListMobile: React.FC<FilterProps> = ({ onChange }) => {
  const [currentFilterMobile, setCurrentFilterMobile] = useState<FilterProps[]>(
    []
  );

  let filterFunction: FilterProps[] = [];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("checkad i filter");
    const { id, value } = event.currentTarget;
    setCurrentFilterMobile((filterTerm) => {
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
    onChange(currentFilterMobile);
  };
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e:src/pages/doglist/filtercomponents/FilterListMobile.tsx

=======
import { filters, subCategories, sortOptions } from "./FilterCategories";

<<<<<<< HEAD:src/pages/doglist/filtercomponents/FilterListMobile.tsx
=======
=======
import { filters, subCategories, sortOptions } from "./FilterCategories";

>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e:src/pages/doglist/filtercomponents/FilterList.tsx
function FilterList() {
>>>>>>> parent of 1a6932f... better search kode, refactor and styling:src/pages/doglist/filtercomponents/FilterList.tsx
  return (
    <div>
      {/* Filters responsive for mobiles*/}
      <form className="mt-4 border-t border-gray-200">
        <h3 className="sr-only">Kategorier</h3>
        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
          {subCategories.map((category) => (
            <li key={category.name}>
              <a href={category.href} className="block px-2 py-3">
                {category.name}
              </a>
            </li>
          ))}
        </ul>

        {filters.map((section) => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
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
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          // onChange={handleChange}
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500"
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
      ;
    </div>
  );
}

<<<<<<< HEAD:src/pages/doglist/filtercomponents/FilterListMobile.tsx
<<<<<<< HEAD:src/pages/doglist/filtercomponents/FilterMobile.tsx
export default FilterMobile;
=======
export default FilterListMobile;
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e:src/pages/doglist/filtercomponents/FilterListMobile.tsx
=======
export default FilterListMobile;
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e:src/pages/doglist/filtercomponents/FilterList.tsx
