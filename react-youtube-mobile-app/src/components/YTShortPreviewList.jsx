import ytShortLogo from "../assets/yt-short-logo.png";
import styles from "../css/components/YTShortPreviewList.module.css";

export default function YTShortPreviewList() {
  const videos = [...new Array(10)];

  return (
    <div className={styles["yt-short-preview"]}>
      <img src={ytShortLogo} className={styles["yt-short-logo"]} style={{ width: "10.2rem", height: "3rem" }} alt="YouTube Short logo" />

      <div className={styles["preview-list"]}>
        {videos.map((video, index) => (
          <div key={index} className={styles["preview-list__item"]}>
            <button className={styles["preview-list__btn"]}>
              <svg width="2.4rem" height="2.5rem" fill="none" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16.6429C12.83 16.6429 13.5 17.3129 13.5 18.1429C13.5 18.9729 12.83 19.6429 12 19.6429C11.17 19.6429 10.5 18.9729 10.5 18.1429C10.5 17.3129 11.17 16.6429 12 16.6429ZM10.5 12.1429C10.5 12.9729 11.17 13.6429 12 13.6429C12.83 13.6429 13.5 12.9729 13.5 12.1429C13.5 11.3129 12.83 10.6429 12 10.6429C11.17 10.6429 10.5 11.3129 10.5 12.1429ZM10.5 6.14286C10.5 6.97286 11.17 7.64286 12 7.64286C12.83 7.64286 13.5 6.97286 13.5 6.14286C13.5 5.31286 12.83 4.64286 12 4.64286C11.17 4.64286 10.5 5.31286 10.5 6.14286Z"
                  fill="white"
                />
              </svg>
            </button>

            <div className={styles["preview-list__detail"]}>
              <h2 className={styles["preview-list__title"]}>DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation...</h2>
              <div className={styles["preview-list__views"]}>24m views</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
