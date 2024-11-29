import styles from "./TrainCard.module.css";

const TraiCard = ({ train }) => {
  return (
    <div className={styles.train_card}>
      <h3 className={styles.heading}>{train.name}</h3>
      <p className={styles.paragraph}>
        From: {train.from} To: {train.to}
      </p>
      <p className={styles.paragraph}>Departure Time: {train.deptTime}</p>
      <p className={styles.paragraph}>Arrival Time: {train.arivalTime}</p>
      <p className={styles.paragraph}>Fare: $ {train.fare}</p>
      <button>Book Now</button>
    </div>
  );
};

export { TraiCard };
