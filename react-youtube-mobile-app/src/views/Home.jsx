import { useState } from "react";
import Header from "../components/Header";
import GenreList from "../components/GenreList";
import BottomMenu from "../components/BottomMenu";
import styles from "../css/views/Pages.module.css";
import DetailVideo from "../components/DetailVideo";
import YTShortPreviewList from "../components/YTShortPreviewList";

let LargeVideoPreview;

import("../components/LargeVideoPreview").then(
  (component) => (LargeVideoPreview = component.default)
);

export default function Home() {
  const videos = [...new Array(6)];
  const [showVideo, setShowVideo] = useState(false);

  function setStatusVideo() {
    setShowVideo(!showVideo);
  }

  return (
    <main className={styles["page-wrapper"]}>
      <Header />

      <GenreList isWithExplore={true} isSticky={true} />

      {videos.map((video, index) => (
        <LargeVideoPreview key={index} onToggleVideo={setStatusVideo} />
      ))}

      <div className={styles["separate-yt-short"]}></div>

      <YTShortPreviewList />

      <div
        className={`${styles["separate-yt-short"]} ${styles["separate-yt-short--bottom"]}`}
      ></div>

      {videos.map((video, index) => (
        <LargeVideoPreview key={index + 10} onToggleVideo={setStatusVideo} />
      ))}

      <BottomMenu currentRoute="home" />

      {showVideo && <DetailVideo onToggleVideo={setStatusVideo} />}
    </main>
  );
}
