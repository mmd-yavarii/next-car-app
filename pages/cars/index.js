import CarsList from '@/components/CarsList';
import FiltersComp from '@/components/FiltersComp';
import carsData from '@/data/carsData';
import React from 'react';

function Cars() {
  return (
    <div>
      <FiltersComp />

      <CarsList data={carsData} />
    </div>
  );
}

export default Cars;
