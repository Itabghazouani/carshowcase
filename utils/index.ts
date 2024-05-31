import { ICarProps } from "@/types";

export const fetchCars = async () => {
  const headers = {
    "x-rapidapi-key": "4b48784be5msh9cb85b8f20575c5p1e656cjsn9a7d8bae5f35",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const data = await response.json();

  return data;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const convertMpgToKml = (mpg: number) => {
  return mpg * (1.60934 / 3.78541)
}

export const generateCarImageUrl = async(car: ICarProps, angle?: string) => {

}
