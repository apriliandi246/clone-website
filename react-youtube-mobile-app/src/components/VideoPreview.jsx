import styles from "../css/components/VideoPreview.module.css";

export default function VideoPreview() {
  return (
    <div className={styles["video-preview-wrapper"]}>
      <div className={styles["video-thumbnail"]}></div>

      <div className={styles["video-detail"]}>
        <h2 className={styles["video-title"]}>React JS - React Tutorial for Beginners</h2>
        <div className={styles["video-channel"]}>YouTube channel</div>
        <div className={styles["video-views"]}>2M views</div>
      </div>

      <button className={styles["video-menu"]}>
        <svg width="2rem" height="2rem" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13.75C10.6917 13.75 11.25 14.3083 11.25 15C11.25 15.6917 10.6917 16.25 10 16.25C9.30833 16.25 8.75 15.6917 8.75 15C8.75 14.3083 9.30833 13.75 10 13.75ZM8.75 10C8.75 10.6917 9.30833 11.25 10 11.25C10.6917 11.25 11.25 10.6917 11.25 10C11.25 9.30833 10.6917 8.75 10 8.75C9.30833 8.75 8.75 9.30833 8.75 10ZM8.75 5C8.75 5.69167 9.30833 6.25 10 6.25C10.6917 6.25 11.25 5.69167 11.25 5C11.25 4.30833 10.6917 3.75 10 3.75C9.30833 3.75 8.75 4.30833 8.75 5Z" fill="#0A0A0A" />
        </svg>
      </button>
    </div>
  );
}
