import ReactCountryFlag from "react-country-flag";
import { useList } from "../../contexts/ListProvider";
import { useFilter } from "../../contexts/FilterProvider";
import { Grid, Paper } from "@mui/material";
import { Section } from "./styles";

export const ListCountries: React.FC = () => {
  const { countries } = useList();
  const { filterLetters } = useFilter();

  return (
    <Section>
      <Grid
        container
        justifyContent="center"
        sx={{
          padding: 10,
          gap: 4,
        }}
      >
        {filterLetters.length > 0
          ? filterLetters.map((country) => (
              <Grid key={country.code} item>
                <Paper
                  sx={{
                    height: 260,
                    width: 240,
                  }}
                >
                  <h2> {country.name}</h2>
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
                  <p>
                    Languages:
                    {country.languages.map((el) => el.name).toString()}
                  </p>
                  <p>Currency: {country.currency}</p>
                </Paper>
              </Grid>
            ))
          : countries.map((country) => (
              <Grid key={country.code} item>
                <Paper
                  sx={{
                    height: 260,
                    width: 240,
                  }}
                >
                  <h2> {country.name}</h2>
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
                  <p>
                    Languages:
                    {country.languages.map((el) => el.name).toString()}
                  </p>
                  <p>Currency: {country.currency}</p>
                </Paper>
              </Grid>
            ))}
      </Grid>
    </Section>
  );
};
