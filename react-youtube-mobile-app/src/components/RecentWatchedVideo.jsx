import styles from "../css/components/RecentWatchedVideo.module.css";

export default function RecentWatchedVideo() {
  return (
    <div className={styles["video-wrapper"]}>
      <div className={styles["video-thumbnail"]}>
        <div className={styles["video-time"]}>2:46</div>
      </div>

      <div className={styles["video-detail"]}>
        <h3 className={styles["video-detail__title"]}>React JS - React Tutorial for Beginners</h3>

        <button className={styles["video-detail__menu"]}>
          <svg width="1.6rem" height="1.7rem" fill="none" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99994 11.8889C8.55327 11.8889 8.99994 12.3355 8.99994 12.8889C8.99994 13.4422 8.55327 13.8889 7.99994 13.8889C7.44661 13.8889 6.99994 13.4422 6.99994 12.8889C6.99994 12.3355 7.44661 11.8889 7.99994 11.8889ZM6.99994 8.88885C6.99994 9.44219 7.44661 9.88885 7.99994 9.88885C8.55327 9.88885 8.99994 9.44219 8.99994 8.88885C8.99994 8.33552 8.55327 7.88885 7.99994 7.88885C7.44661 7.88885 6.99994 8.33552 6.99994 8.88885ZM6.99994 4.88885C6.99994 5.44219 7.44661 5.88885 7.99994 5.88885C8.55327 5.88885 8.99994 5.44219 8.99994 4.88885C8.99994 4.33552 8.55327 3.88885 7.99994 3.88885C7.44661 3.88885 6.99994 4.33552 6.99994 4.88885Z"
              fill="#0A0A0A"
            />
          </svg>
        </button>
      </div>

      <div className={styles["video-detail__channel"]}>YouTube channel</div>
    </div>
  );
}
