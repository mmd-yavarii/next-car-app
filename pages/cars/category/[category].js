import { useRouter } from 'next/router';

function CategoryCar() {
  const router = useRouter();
  const { category } = router.query;

  console.log(category);

  return <div>CategoryCar</div>;
}

export default CategoryCar;
