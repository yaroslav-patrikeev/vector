import styles from "./Numbers.module.css";
const Numbers = () => {
  return (
    <section className={styles.numbersSection}>
      <div>
        <p className={styles.number}>3</p>
        <p className={styles.word}>года</p>
        <p className={styles.description}>
          активно трудимся во благо наших клиентов
        </p>
      </div>
      <div>
        <p className={styles.number}>17</p>
        <p className={styles.word}>специалистов</p>
        <p className={styles.description}>
          высокого уровня обеспечивают корректность участия в торгах
        </p>
      </div>
      <div>
        <p className={styles.number}>208+</p>
        <p className={styles.word}>торгов</p>
        <p className={styles.description}>
          подавали заявки, участвовали и побеждали
        </p>
      </div>
    </section>
  );
};

export default Numbers;
