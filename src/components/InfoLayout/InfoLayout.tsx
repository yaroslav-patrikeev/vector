import styles from "./InfoLayout.module.css";

const InfoLayout = ({ title, text }: { title: string; text: string }) => {
  return (
    <section className={styles.infoLayoutSection}>
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default InfoLayout;
