import { useRouter } from 'next/router';

function Filters() {
  const router = useRouter();
  const [min, max] = router.query.filter ?? [];

  return <div>Filters</div>;
}

export default Filters;
