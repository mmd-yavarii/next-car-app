import carsData from '@/data/carsData';
import styles from '../styles/CarCars.module.css';

import { IoLocationOutline } from 'react-icons/io5';

function CarsList({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <CarCard key={car.id} info={car} />
      ))}
    </div>
  );
}

export default CarsList;

function CarCard({ info }) {
  const { name, year, distance, image, price, location } = info;

  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={name} />

      <div>
        <p>{name}</p>
        <span>
          {year} / {distance}-km
        </span>
      </div>

      <div>
        <p>{price}</p>
        <p>
          {location} <IoLocationOutline />
        </p>
      </div>
    </div>
  );
}
