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
