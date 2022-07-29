import ReactCountryFlag from "react-country-flag";
import { useList } from "../../contexts/ListProvider";
import { useFilter } from "../../contexts/FilterProvider";

export const ListCountries: React.FC = () => {
  const { countries } = useList();
  const { filterLetters } = useFilter();

  return (
    <section>
      <div>
        {filterLetters.length > 0
          ? filterLetters.map((country) => (
              <div key={country.code}>
                <h1> {country.name}</h1>
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "5em",
                    height: "5em",
                  }}
                  title={country.code}
                />
                <p>Capital: {country.capital} </p>
                <p>Currency: {country.currency}</p>
                <p>Languages: {country.languages.name} </p>
              </div>
            ))
          : countries.map((country) => (
              <div key={country.code}>
                <h1> {country.name}</h1>
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "5em",
                    height: "5em",
                  }}
                  title={country.code}
                />
                <p>Capital: {country.capital} </p>
                <p>Currency: {country.currency}</p>
                <p>Languages: {country.languages.name} </p>
              </div>
            ))}
      </div>
    </section>
  );
};
