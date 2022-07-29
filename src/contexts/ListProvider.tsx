import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface ListProviderProps {
  children: ReactNode;
}

export interface Countries {
  name: string;
  code: string;
  emoji: string;
  capital: string;
  currency: string;
  languages: [{ name: string }];
}

interface ListProviderData {
  countries: Countries[];
}

const ListContext = createContext<ListProviderData>({} as ListProviderData);

const useList = () => {
  const context = useContext(ListContext);

  return context;
};

const ListProvider = ({ children }: ListProviderProps) => {
  const [countries, setCountries] = useState<Countries[]>([] as Countries[]);

  useEffect(() => {
    fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query {
              countries {
                name,
                code,
                emoji,
                capital,
                currency,
                languages {name}
    }}
            `,
      }),
    })
      .then((response) => response.json())
      .then((response) => setCountries(response.data.countries))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ListContext.Provider
      value={{
        countries,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListProvider, useList };
