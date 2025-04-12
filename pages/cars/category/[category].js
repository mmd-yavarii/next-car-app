import CarsList from '@/components/CarsList';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router';

function CategoryCar() {
  const router = useRouter();
  const { category } = router.query;

  const cars = carsData.filter((i) => i.category == category);

  return (
    <div>
      <h1>{category}</h1>

      <CarsList data={cars} />
    </div>
  );
}

export default CategoryCar;
