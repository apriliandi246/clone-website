import BottomMenu from "../components/BottomMenu";
import HeaderMenu from "../components/HeaderMenu";
import VideoPreview from "../components/VideoPreview";
import styles from "../css/views/History.module.css";
import YTShortPreviewList from "../components/YTShortPreviewList";

export default function History() {
  const videos = [...new Array(10)];

  return (
    <main className={styles["history-wrapper"]}>
      <HeaderMenu headerMenu="History" headerLink="/library" />

      <form className={styles["input-form"]}>
        <input type="text" className={styles["input-form__input"]} placeholder="Search watch history" />

        <svg width="2.4rem" height="2.4rem" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles["input-form__icon"]}>
          <path d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z" fill="#9D9D9D" />
        </svg>
      </form>

      <div className={styles["history-line"]}></div>
      <h2 className={styles["history-title"]}>Today</h2>

      <YTShortPreviewList />

      {videos.map((video, index) => (
        <VideoPreview key={index} />
      ))}

      <BottomMenu currentRoute="library" />
    </main>
  );
}
