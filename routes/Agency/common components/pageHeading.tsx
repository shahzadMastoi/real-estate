import styles from "./style.module.scss";

interface pageHeadingProps {
  title: string;
  heading: string;
  detail: string;
}
export default function PageHeading({ title, heading, detail }: any) {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.section1}>
          <div className={styles.section1Inner}>
            <p>{title}</p>
            <h1>{heading}</h1>
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </>
  );
}
