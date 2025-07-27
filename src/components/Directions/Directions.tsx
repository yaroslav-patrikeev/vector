import styles from "./Directions.module.css";

const Directions = ({ data }: { data: string[] }) => {
  return (
    <section className={styles.directionsSection}>
      {data.map((d) => {
        return (
          <div>
            <p>{d}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Directions;
