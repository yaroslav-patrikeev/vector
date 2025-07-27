import styles from "./ListLayout.module.css";

const ListLayout = ({ data }: { data: string[] }) => {
  return (
    <section className={styles.listLayoutSection}>
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

export default ListLayout;
