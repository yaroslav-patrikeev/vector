import styles from "./GetConsultation.module.css";

const GetConsultation = () => {
  return (
    <section className={styles.getConsultationSection}>
      <h3 className={styles.title}>
        Получить консультацию
        <span className={styles.time}>30 минут</span>
      </h3>

      <p className={styles.description}>
        Вы можете задать нам вопросы по процедурам и возможностям.
      </p>
      <div className={styles.formBlock}>
        <form className={styles.form}>
          <input type="text" placeholder="Название или ИНН вашей организации" />
          <input type="text" placeholder="Как к вам обращаться" />
          <input type="text" placeholder="Телефон" />
          <input type="text" placeholder="Удобный способ связи" />
          <button>Отправить</button>
        </form>
        <div className={styles.extraInformation}>
          <p>Да, это бесплатно</p>
          <p>Ответим честно, объясним сложное простым языком</p>
        </div>
      </div>
    </section>
  );
};

export default GetConsultation;
