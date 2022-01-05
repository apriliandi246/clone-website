import BottomMenu from "../components/BottomMenu";
import HeaderMenu from "../components/HeaderMenu";
import styles from "../css/views/Pages.module.css";
import VideoPreview from "../components/VideoPreview";

export default function Download() {
  const videos = [...new Array(10)];

  return (
    <main>
      <HeaderMenu headerMenu="Download" headerLink="/library" />

      <div className={styles["video-downloaded-wrapper"]}>
        {videos.map((video, index) => (
          <VideoPreview key={index} />
        ))}
      </div>

      <BottomMenu currentRoute="library" />
    </main>
  );
}
