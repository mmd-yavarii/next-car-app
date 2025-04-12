import { useRouter } from 'next/router';
import styles from '@/styles/CarDetailPage.module.css';

function Car() {
  const carInfo = JSON.parse(useRouter().query.carInfo);

  const { image, name, model, description, distance, location, price, year } = carInfo;

  return (
    <div>
      <img className={styles.image} src={image} alt={name} />

      <h3 className={styles.title}>
        {name} {model}
      </h3>

      <div className={styles.session}>
        <p>
          <span>comany :</span> <span>{name}</span>
        </p>
        <p>
          <span>model :</span> <span>{model}</span>
        </p>
        <p>
          <span>first registration :</span> <span>{year}</span>
        </p>
        <p>
          <span>kms driven :</span> <span>{distance}</span>
        </p>
      </div>

      <div className={styles.session}>
        <p>
          <span>Loacation</span> <span>{location}</span>
        </p>
      </div>

      <div className={styles.session}>
        <h3>Extra Information</h3>
        <br />
        {description}
      </div>
    </div>
  );
}

export default Car;
