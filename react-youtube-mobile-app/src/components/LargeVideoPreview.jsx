import styles from "../css/components/LargeVideoPreview.module.css";

export default function LargeVideoPreview({ onToggleVideo }) {
  return (
    <div className={styles["video-wrapper"]}>
      <div className={styles["video-thumbnail"]} onClick={onToggleVideo}></div>

      <div className={styles["video-detail"]}>
        <div className={styles["video-detail__wrapper"]}>
          <img src="https://via.placeholder.com/36/92c952" style={{ width: "3.6rem", height: "3.6rem" }} className={styles["video-detail__img-profile"]} alt="user" />

          <div className={styles["video-detail__detail-channel"]} onClick={onToggleVideo}>
            <h2 className={styles["video-detail__title"]}>React JS - React Tutorial for Beginners</h2>
            <div className={styles["video-detail__channel"]}>YouTube Channel • 19M views • 8 months ago</div>
          </div>
        </div>

        <button className={styles["video-detail__menu"]}>
          <svg width="2.4rem" height="2.4rem" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.5C12.83 16.5 13.5 17.17 13.5 18C13.5 18.83 12.83 19.5 12 19.5C11.17 19.5 10.5 18.83 10.5 18C10.5 17.17 11.17 16.5 12 16.5ZM10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5C11.17 10.5 10.5 11.17 10.5 12ZM10.5 6C10.5 6.83 11.17 7.5 12 7.5C12.83 7.5 13.5 6.83 13.5 6C13.5 5.17 12.83 4.5 12 4.5C11.17 4.5 10.5 5.17 10.5 6Z" fill="#0A0A0A" />
          </svg>
        </button>
      </div>
    </div>
  );
}
