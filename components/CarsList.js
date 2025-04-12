import carsData from '@/data/carsData';
import styles from '../styles/CarCars.module.css';

import { IoLocationOutline } from 'react-icons/io5';
import Link from 'next/link';

function CarsList({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Link key={car.id} href={{ pathname: `/cars/${car.id}`, query: { carInfo: JSON.stringify(car) } }}>
          <CarCard info={car} />
        </Link>
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

      <div className={styles.info}>
        <p>{name}</p>
        <span>
          {year} / {distance}-km
        </span>
      </div>

      <div className={styles.info}>
        <p className={styles.price}>{price} $</p>
        <p>
          {location} <IoLocationOutline />
        </p>
      </div>
    </div>
  );
}
