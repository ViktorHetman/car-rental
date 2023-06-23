import { CarCard } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b828305ea3mshcdafdbd7e9e989bp1c5576jsnead5387a30cf",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day
  const mileAgeFactor = 0.1; // Additional rate per miles driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  //Calculate additional rate based on mileage and age
  const mileAgeRate = city_mpg * mileAgeFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //Calculating total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileAgeRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarCard, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
