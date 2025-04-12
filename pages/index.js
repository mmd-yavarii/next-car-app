import carsData from '@/data/carsData';

import FiltersComp from '@/components/FiltersComp';

import CarsList from '@/components/CarsList';

export default function Home() {
  const cars = carsData.slice(0, 6);

  return (
    <>
      <FiltersComp />

      <CarsList data={cars} />
    </>
  );
}
