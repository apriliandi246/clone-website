import styles from "../css/components/GenreList.module.css";

export default function GenreList({ isWithExplore, isSticky }) {
  const genres = [...new Array(10)];

  return (
    <div className={styles["genre-list"]}>
      {isWithExplore && (
        <>
          <div className={styles["genre-list__explore"]}>
            <svg width="1.6rem" height="1.6rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.53334 6.53337L3.98001 12.02L9.46668 9.46671L12.02 3.98004L6.53334 6.53337ZM8.72001 8.51338C8.58001 8.70671 8.38001 8.83337 8.14668 8.87338C8.10001 8.88004 8.04668 8.88671 8.00001 8.88671C7.81334 8.88671 7.64001 8.83337 7.48668 8.72004C7.29334 8.58004 7.16668 8.38004 7.12668 8.14671C7.08668 7.91337 7.14001 7.67337 7.28001 7.48671C7.42001 7.29337 7.62001 7.16671 7.85334 7.12671C8.08668 7.08671 8.32001 7.14004 8.51335 7.28004C8.70668 7.42004 8.83335 7.62004 8.87335 7.85337C8.91335 8.08671 8.86001 8.32004 8.72001 8.51338ZM8.00001 2.00004C11.3067 2.00004 14 4.69337 14 8.00004C14 11.3067 11.3067 14 8.00001 14C4.69334 14 2.00001 11.3067 2.00001 8.00004C2.00001 4.69337 4.69334 2.00004 8.00001 2.00004ZM8.00001 1.33337C4.32001 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00001 1.33337Z"
                fill="#030303"
              />
            </svg>
            Explore
          </div>

          <div className={styles["genre-list__line"]}>.</div>
        </>
      )}

      <div className={styles["genre-list__genre-list"]}>
        <div className={`${styles["genre-list__item"]} ${styles["genre-list__item--active"]}`}>All</div>

        {genres.map((genre, index) => (
          <div key={index} className={styles["genre-list__item"]}>
            War Game
          </div>
        ))}
      </div>
    </div>
  );
}
