import Header from "../components/Header";
import GenreList from "../components/GenreList";
import BottomMenu from "../components/BottomMenu";
import styles from "../css/views/Pages.module.css";
import SubscriptionList from "../components/SubscriptionList";
import LargeVideoPreview from "../components/LargeVideoPreview";

export default function Subscription() {
  const videos = [...new Array(10)];

  return (
    <main className={styles["page-wrapper"]}>
      <Header />

      <div className={styles["subscription-list"]}>
        {videos.map((video, index) => (
          <SubscriptionList key={index} />
        ))}
      </div>

      <GenreList isWithExplore={false} />

      {videos.map((video, index) => (
        <LargeVideoPreview key={index} />
      ))}

      <BottomMenu currentRoute="subscription" />
    </main>
  );
}
