import { createContext, useState, useContext, ReactNode } from "react";
import { Countries, useList } from "./ListProvider";

interface FilterProviderProps {
  children: ReactNode;
}

interface FilterProviderData {
  filterLetters: Countries[];
  setfilterLetters: React.Dispatch<React.SetStateAction<Countries[]>>;
  handleClick: (letter: string) => void;
}

const FilterContext = createContext<FilterProviderData>(
  {} as FilterProviderData
);

const useFilter = () => {
  const context = useContext(FilterContext);

  return context;
};

const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filterLetters, setfilterLetters] = useState<Countries[]>(
    [] as Countries[]
  );

  const { countries } = useList();

  //Filtro de letras
  const handleClick = (letter: string) => {
    const filter = countries.filter((country) => {
      return country.name[0] === letter;
    });
    filter.sort();
    setfilterLetters(filter);
  };

  return (
    <FilterContext.Provider
      value={{
        filterLetters,
        setfilterLetters,
        handleClick,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
