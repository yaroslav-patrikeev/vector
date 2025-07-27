import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.firstBlock}>
        <p>
          Делаем тендерные процессы проще, сохраняя быстроту и эффективность.
        </p>
      </div>
      <div className={styles.secondBlock}>
        <p>
          Делаем сложное простым и понятным, повышая качество участия и шанс на
          успех.
        </p>
      </div>
      <div className={styles.thirdBlock}>
        <p>Показываем острые углы и чистоту каждой закупки.</p>
      </div>
      <div className={styles.fourthBlock}>
        <p>Опыт и консалтинг, специалисты и внимание к деталям.</p>
      </div>
    </section>
  );
};

export default AboutUs;
