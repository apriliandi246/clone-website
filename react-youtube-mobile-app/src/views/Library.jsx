import { Link } from "react-router-dom";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import styles from "../css/views/Library.module.css";
import RecentWatchedVideo from "../components/RecentWatchedVideo";

export default function Library() {
  const videos = [...new Array(10)];

  return (
    <main className={styles["library-page"]}>
      <Header />

      <h2 className={styles["library-title"]}>Recent</h2>

      <div className={styles["library__video-list"]}>
        {videos.map((video, index) => (
          <RecentWatchedVideo key={index} />
        ))}
      </div>

      <div className={styles["library__line"]}></div>

      <div className={styles["library__menus"]}>
        <Link to="/history" className={styles["library-link"]}>
          <div className={styles["library__menu-item"]}>
            <svg width="2.4rem" height="2.5rem" fill="none" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.97 17.1278L10 14.0478V7.1778H12V12.9378L16.03 15.4278L14.97 17.1278ZM22 12.1778C22 17.6878 17.51 22.1778 12 22.1778C6.49002 22.1778 2.00002 17.6878 2.00002 12.1778H3.00002C3.00002 17.1378 7.04002 21.1778 12 21.1778C16.96 21.1778 21 17.1378 21 12.1778C21 7.2178 16.96 3.1778 12 3.1778C8.81002 3.1778 5.92002 4.8178 4.28002 7.5578C4.17002 7.7378 4.06002 7.9278 3.97002 8.1178C3.96002 8.1378 3.95002 8.1578 3.94002 8.1778H8.00002V9.1778H1.96002V3.1778H2.96002V7.9178C3.00002 7.8278 3.03002 7.7478 3.07002 7.6678C3.18002 7.4478 3.30002 7.2478 3.42002 7.0378C5.22002 4.0378 8.51002 2.1778 12 2.1778C17.51 2.1778 22 6.6678 22 12.1778Z"
                fill="black"
              />
            </svg>

            <div className={styles["library__menu-name"]}>History</div>
          </div>
        </Link>

        <div className={styles["library__menu-item"]}>
          <svg width="2.4rem" height="2.5rem" fill="none" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.1778L16 12.1778L10 16.1778V8.1778ZM21 3.1778V21.1778H3V3.1778H21ZM20 4.1778H4V20.1778H20V4.1778Z" fill="black" />
          </svg>

          <div className={styles["library__menu-name"]}>Your videos</div>
        </div>

        <Link to="/downloads" className={styles["library-link"]}>
          <div className={`${styles["library__menu-item"]} ${styles["library__menu-item-icon"]}`}>
            <div className={styles["library__inner-menu"]}>
              <svg width="2.8rem" height="2.6rem" fill="none" viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3.17743V17.4274" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 10.5L15 17.5L22 10.5" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 17.5H23" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div>
                <div className={styles["library__menu-name"]}>Downloads</div>
                <div className={styles["library__submenu-name"]}>24 videos</div>
              </div>
            </div>

            <svg width="2rem" height="2.1rem" fill="none" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className={styles["library__right-icon-menu"]}>
              <path
                d="M10 0.927795C8.07164 0.927795 6.18657 1.49962 4.58319 2.57097C2.97982 3.64231 1.73013 5.16505 0.992179 6.94663C0.254225 8.72821 0.061142 10.6886 0.437348 12.5799C0.813554 14.4712 1.74215 16.2085 3.10571 17.5721C4.46928 18.9356 6.20656 19.8642 8.09787 20.2405C9.98919 20.6167 11.9496 20.4236 13.7312 19.6856C15.5127 18.9477 17.0355 17.698 18.1068 16.0946C19.1782 14.4912 19.75 12.6062 19.75 10.6778C19.747 8.09285 18.7188 5.61464 16.891 3.7868C15.0632 1.95897 12.5849 0.930783 10 0.927795V0.927795ZM14.6436 8.97052L9.14307 14.2205C9.00322 14.3536 8.81756 14.4278 8.62452 14.4278C8.43147 14.4278 8.24582 14.3536 8.10596 14.2205L5.35645 11.5955C5.2128 11.4579 5.12965 11.2689 5.12524 11.0701C5.12084 10.8712 5.19555 10.6787 5.33297 10.5349C5.47038 10.3911 5.65927 10.3077 5.85813 10.303C6.05699 10.2984 6.24956 10.3728 6.39356 10.5101L8.62452 12.6407L13.6064 7.88507C13.7504 7.74784 13.943 7.67337 14.1419 7.67803C14.3407 7.68268 14.5296 7.76608 14.667 7.9099C14.8045 8.05372 14.8792 8.2462 14.8748 8.44507C14.8704 8.64393 14.7872 8.83292 14.6436 8.97052V8.97052Z"
                fill="#0A0A0A"
              />
            </svg>
          </div>
        </Link>

        <div className={styles["library__menu-item"]}>
          <svg width="2.4rem" height="2.5rem" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 20.4278L19.5 3.9278C19.5 3.51358 19.1642 3.1778 18.75 3.1778L5.25 3.17779C4.83579 3.17779 4.5 3.51358 4.5 3.92779L4.5 20.4278C4.5 20.842 4.83579 21.1778 5.25 21.1778L18.75 21.1778C19.1642 21.1778 19.5 20.842 19.5 20.4278Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" /> <path d="M16.5 19.3028L16.5 21.1778" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 19.3028L7.5 21.1778" stroke="black" strokeLinecap="round" strokeLinejoin="round" /> <path d="M16.5 3.1778L16.5 5.0528" stroke="black" strokeLinecap="round" strokeLinejoin="round" /> <path d="M7.5 3.1778L7.5 5.0528" stroke="black" strokeLinecap="round" strokeLinejoin="round" /> <path d="M16.5 8.8028L16.5 10.3028" stroke="black" strokeLinecap="round" strokeLinejoin="round" /> <path d="M7.5 8.8028L7.5 10.3028" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 14.0528L16.5 15.5528" stroke="black" strokeLinecap="round" strokeLinejoin="round" /> <path d="M7.5 14.0528L7.5 15.5528" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className={styles["library__menu-name"]}>Your movies</div>
        </div>

        <div className={styles["library__menu-item"]}>
          <div className={styles["library__inner-menu"]}>
            <svg width="2.8rem" height="2.6rem" fill="none" viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3.17743V17.4274" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 10.5L15 17.5L22 10.5" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 17.5H23" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div>
              <div className={styles["library__menu-name"]}>Watch later</div>
              <div className={styles["library__submenu-name"]}>4 unwatched videos</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["library__line-2"]}></div>

      <div className={styles["library-playlist"]}>
        <div className={styles["library-playlist__title"]}>Playlist</div>

        <button className={styles["library-playlist__menu"]}>
          Recently addedd
          <svg width="2rem" height="2rem" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 7.5L10 13.75L3.75 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <button className={styles["library__new-playlit-btn"]}>
        <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 12H20.25" stroke="#068BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3.75V20.25" stroke="#068BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        New Playlist
      </button>

      <div className={styles["video-liked"]}>
        <img src="https://via.placeholder.com/36/92c952" style={{ width: "3.6rem", height: "3.6rem" }} alt="liked videos" />

        <div>
          <div className={styles["video-liked__title"]}>Liked videos</div>
          <div className={styles["video-liked__total"]}>40 videos</div>
        </div>
      </div>

      <BottomMenu currentRoute="library" />
    </main>
  );
}
