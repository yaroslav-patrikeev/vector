import styles from "./AboutMarket.module.css";
const AboutMarket = () => {
  return (
    <section className={styles.aboutMarketSection}>
      <div>
        <h2>Рынок торгов — объемный</h2>
        <p>
          Мы помогаем компаниям увеличивать выручку на дополнительном рынке
          сбыта.
        </p>
      </div>
      <div className={styles.stairway}>
        <div>
          <p>Дайджест</p>
        </div>
        <div>
          <p>Выбор и подготовка</p>
        </div>
        <div>
          <p>Участие в торгах</p>
        </div>
        <div>
          <p>Результат</p>
        </div>
      </div>
    </section>
  );
};
export default AboutMarket;
