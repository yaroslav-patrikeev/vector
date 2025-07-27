import styles from "./WhyNow.module.css";

const WhyNow = () => {
  return (
    <section className={styles.whyNowSection}>
      <div className={styles.firstBlock}>
        <h3>Почему сейчас?</h3>
        <p>
          Рынок торгов растет и объем закупок кратно увеличивается. Возможности
          эффективного участия выходят на новый уровень, поэтому каждая компания
          с нами или без работает на быстрорастущем рынке.
        </p>
      </div>
      <div className={styles.fourthBlock}>
        <h3>Почему мы?</h3>
        <p>
          Потому что мы без прикрас и настоящие. Мы показываем нашим партнерам
          все стороны данного рынка, открыто говоря о сложностях и рисках,
          минимизируя их, за счет опыта и компетенций.
        </p>
      </div>
    </section>
  );
};

export default WhyNow;
