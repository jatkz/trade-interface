import { Fragment, useState } from "react";
import { Listbox, Combobox, Transition } from "@headlessui/react";
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
  const [query, setQuery] = useState<any>("");
  const [selected, setSelected] = useState<any>(null);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className={styles.dropdown}>
        <Combobox.Input
          className={styles.input}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: any) => person?.name}
        />
        <Combobox.Button className={styles.button}>
          {/* <span className={styles.flexcenter}> */}
          {/* <span
              aria-label={selected.online ? "Online" : "Offline"}
              className={clsx(
                {
                  [styles.selectedOnline]: selected.online === true,
                  [styles.selectedOffline]: selected.online === false,
                },
                styles.selectedStatus
              )}
            />

            <span className={styles.selectedLabel}>{selected.name}</span> */}

          {/* <span className={styles.buttoniconwrapper}> */}
          <ChevronDownIcon
            className={styles.buttoniconGray}
            aria-hidden="true"
          />
          {/* </span> */}
          {/* </span> */}
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className={styles.dropdownContainer}>
            {people.map((person) => (
              <Combobox.Option
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
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
