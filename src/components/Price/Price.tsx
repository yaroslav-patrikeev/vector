import styles from "./Price.module.css";
const Price = () => {
  return (
    <section className={styles.priceSection}>
      <div>
        <h4>Разовое участие</h4>
        <p>Сопроводим в процедуре участия любого способо закупки.</p>
        <p className={styles.price}>от 25 000 ₽</p>
      </div>
      <div>
        <h4>Подписка на серию торгов</h4>
        <p>Тщательная выборка и участие в торгах по вашей тематике.</p>
        <p className={styles.price}>от 120 000 ₽</p>
      </div>
    </section>
  );
};

export default Price;
