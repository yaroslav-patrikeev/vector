import styles from "./TitleSection.module.css";
const TitleSection = () => {
  return (
    <section className={styles.titleSection}>
      <p className={styles.logo}>ВЕКТОР</p>
      <h1 className={styles.title}>Тендерная компания</h1>
      <div className={styles.subtitle}>
        <p>грамотно оформим</p>
        <p>успешно подадим</p>
      </div>
    </section>
  );
};

export default TitleSection;
