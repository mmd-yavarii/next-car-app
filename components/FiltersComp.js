import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import styles from '../styles/FiltersComp.module.css';

function FiltersComp() {
  const router = useRouter();

  const minInp = useRef();
  const maxInp = useRef();

  function setFilters() {
    if (maxInp.current.value && maxInp.current.value) {
      router.push(`/cars/${minInp.current.value}/${maxInp.current.value}`);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Car App</h1>

      <div className={styles.filterContainer}>
        <input type="number" placeholder="minimum price" ref={minInp} />
        <input type="number" placeholder="maximum price" ref={maxInp} />

        <button onClick={setFilters}>search</button>
      </div>

      <div className={styles.category}>
        <Link href={`/cars/category/sedan`}>sedan</Link>
        <br />
        <Link href={`/cars/category/suv`}>suv</Link>
        <br />
        <Link href={`/cars/category/hatchback`}>hatchback</Link>
        <br />
        <Link href={`/cars/category/sport`}>sport</Link>
      </div>

      <Link href="/cars" className={styles.seeAll}>
        See All Cars
      </Link>
    </div>
  );
}

export default FiltersComp;
