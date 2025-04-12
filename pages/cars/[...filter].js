import CarsList from '@/components/CarsList';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router';

function Filters() {
  const router = useRouter();
  const [min, max] = router.query.filter ?? [];

  const cars = carsData.filter((i) => i.price > min && i.price < max);

  return <div>{cars.length ? <CarsList data={cars} /> : <h1>No result</h1>}</div>;
}

export default Filters;
