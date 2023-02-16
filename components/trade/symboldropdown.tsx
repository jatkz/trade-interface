import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import styles from "./symboldropdown.module.css";
import { clsx } from "clsx";

const people = [
  { id: 1, name: "Wade Cooper", online: true },
  { id: 2, name: "Arlene Mccoy", online: false },
  { id: 3, name: "TSLA", online: true },
  { id: 4, name: "Tom Cook", online: true },
  { id: 5, name: "Tanya Fox", online: false },
  { id: 6, name: "Hellen Schmidt", online: true },
  { id: 7, name: "Caroline Schultz", online: true },
  { id: 8, name: "Mason Heaney", online: false },
  { id: 9, name: "Claudie Smitham", online: true },
  { id: 10, name: "Emil Schaefer", online: false },
];

export default function TickerSymbolDropdown() {
  const [selected, setSelected] = useState(people[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className={styles.dropdown}>
            <Listbox.Button className={styles.button}>
              <span className={styles.flexcenter}>
                <span
                  aria-label={selected.online ? "Online" : "Offline"}
                  className={clsx(
                    {
                      [styles.selectedOnline]: selected.online === true,
                      [styles.selectedOffline]: selected.online === false,
                    },
                    styles.selectedStatus
                  )}
                />
                <span className={styles.selectedLabel}>{selected.name}</span>
              </span>
              <span className={styles.buttoniconwrapper}>
                <ChevronDownIcon
                  className={styles.buttoniconGray}
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave={styles.transition}
              leaveFrom={styles.transitionFrom}
              leaveTo={styles.transitionTo}
            >
              <Listbox.Options className={styles.dropdownContainer}>
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      clsx(
                        active
                          ? [styles.textwhite, styles.bgindigo]
                          : styles.dropdownInactive,
                        styles.dropdownOption
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className={styles.flexcenter}>
                          <span
                            className={clsx(
                              person.online
                                ? styles.selectedOnline
                                : styles.selectedOffline,
                              styles.dropdownOnlineIcon
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={clsx(
                              selected ? styles.semibold : styles.normal,
                              styles.selectedLabel
                            )}
                          >
                            {person.name}
                            <span className={styles.sr_only}>
                              {" "}
                              is {person.online ? "online" : "offline"}
                            </span>
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? styles.textwhite : styles.textindigo,
                              styles.dropdownActiveIconWrapper
                            )}
                          >
                            <CheckIcon
                              className={styles.buttonicon}
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
