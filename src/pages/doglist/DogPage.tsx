import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
// import SearchBar from "./SearchBar";
import DogList from "./DogList";
import {
  filters,
  subCategories,
  sortOptions,
} from "./filtercomponents/FilterCategories";
<<<<<<< HEAD
<<<<<<< HEAD
import FilterMobile from "./filtercomponents/FilterMobile";
import FilterWebsite from "./filtercomponents/FilterWebsite";
=======
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
import { FilterProps } from "../../components/Interfaces";
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e

// export interface FilterBarProps {
//   onChange: (filter: FilterProps[]) => void;
//   filterTerm?: FilterProps[];
// }

// export interface FilterBarProps {
//   onChange: (filter: FilterProps[]) => void;
//   filterTerm?: FilterProps[];
// }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function DogPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState("");
=======
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
  // const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (searchTerm: string) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
  };
<<<<<<< HEAD
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e

  return (
    <div>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Stäng menyn</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
                    <FilterMobile />
=======
<<<<<<< HEAD
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
                    {/* Filters responsive for mobiles*/}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Kategorier</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
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
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        onChange={handleChange}
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
=======
                    <FilterList />
>>>>>>> parent of 1a6932f... better search kode, refactor and styling
<<<<<<< HEAD
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline border-b border-stone-200 pt-14 pb-8">
              <h3 className="text-2xl font-semibold">Aussiegalleriet</h3>
              <div className="w-5/6">
<<<<<<< HEAD
<<<<<<< HEAD
                <SearchBar
                  onChange={(searchTerm) => setSearchTerm(searchTerm)}
                />
=======
<<<<<<< HEAD
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
                {/* <SearchBar
                  onChange={(searchTerm) => setSearchTerm(searchTerm)}
                /> */}
=======
                <SearchBar
                  onSubmit={handleSearchSubmit}
                  onChange={handleSearchSubmit}
                />
>>>>>>> parent of 1a6932f... better search kode, refactor and styling
<<<<<<< HEAD
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
              </div>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sortera
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-stone-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                ></button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filtrera</span>
                  <FunnelIcon
                    className="h-5 w-5 text-stone-500"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Hundar
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
<<<<<<< HEAD
<<<<<<< HEAD
                <FilterWebsite />

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <DogList searchTerm={searchTerm} />
=======
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
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
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
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

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <DogList
                    filteredData={filteredData}
                    filterTerm={filterTerm}
                  />
<<<<<<< HEAD
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
=======
>>>>>>> 6cb8395e70e6bc96de8030ffa4368e08aabffb4e
                  <div />
                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DogPage;
