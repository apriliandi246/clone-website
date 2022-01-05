import BottomMenu from "../components/BottomMenu";
import styles from "../css/views/Shorts.module.css";

export default function Shorts() {
  const videos = [...new Array(10)];

  return (
    <main className={styles["shorts-page"]}>
      <div className={styles["shorts-videos"]}>
        {videos.map((video, index) => (
          <div key={index} className={styles["shorts-video"]}>
            <button className={styles["shorts__camera"]}>
              <svg width="3.2rem" height="3.2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 26H6C5.46957 26 4.96086 25.7893 4.58579 25.4142C4.21071 25.0391 4 24.5304 4 24V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H9.99927L11.9993 5H19.9993L21.9993 8H26C26.5304 8 27.0391 8.21071 27.4142 8.58579C27.7893 8.96086 28 9.46957 28 10V24C28 24.5304 27.7893 25.0391 27.4142 25.4142C27.0391 25.7893 26.5304 26 26 26Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 21C18.4853 21 20.5 18.9853 20.5 16.5C20.5 14.0147 18.4853 12 16 12C13.5147 12 11.5 14.0147 11.5 16.5C11.5 18.9853 13.5147 21 16 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={styles["shorts-page__menus"]}>
              <button>
                <svg width="3.6rem" height="3.6rem" fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 18C11.25 19.245 10.245 20.25 9 20.25C7.755 20.25 6.75 19.245 6.75 18C6.75 16.755 7.755 15.75 9 15.75C10.245 15.75 11.25 16.755 11.25 18ZM18 15.75C16.755 15.75 15.75 16.755 15.75 18C15.75 19.245 16.755 20.25 18 20.25C19.245 20.25 20.25 19.245 20.25 18C20.25 16.755 19.245 15.75 18 15.75ZM27 15.75C25.755 15.75 24.75 16.755 24.75 18C24.75 19.245 25.755 20.25 27 20.25C28.245 20.25 29.25 19.245 29.25 18C29.25 16.755 28.245 15.75 27 15.75Z" fill="white" />
                </svg>
              </button>

              <button>
                <svg width="3.6rem" height="3.6rem" fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 16.5H9V31.5H4.5V16.5ZM28.155 16.5H21.81L24.09 9.09C24.57 7.545 23.31 6 21.57 6C20.7 6 19.86 6.36 19.29 6.975L10.5 16.5V31.5H26.145C27.735 31.5 29.115 30.495 29.43 29.085L31.44 20.085C31.845 18.225 30.27 16.5 28.155 16.5Z" fill="white" />
                </svg>
                246
              </button>

              <button>
                <svg width="3.6rem" height="3.6rem" fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.5 19.5L27 19.5L27 4.5L31.5 4.5L31.5 19.5ZM7.845 19.5L14.19 19.5L11.91 26.91C11.43 28.455 12.69 30 14.43 30C15.3 30 16.14 29.64 16.71 29.025L25.5 19.5L25.5 4.5L9.855 4.5C8.265 4.5 6.885 5.50501 6.57 6.91501L4.56 15.915C4.155 17.775 5.73 19.5 7.845 19.5Z" fill="white" />
                </svg>
                Dislike
              </button>

              <button>
                <svg width="3.6rem" height="3.6rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.69822 2.76923C4.08058 2.76923 2.76923 4.08098 2.76923 5.69911V24.4504C2.76923 26.0685 4.08058 27.3802 5.69822 27.3802H25.6154L30.5916 32.7409C31.5335 33.7555 33.2308 33.0888 33.2308 31.7042V27.3802V5.69911C33.2308 4.08098 31.9194 2.76923 30.3018 2.76923H5.69822ZM8.62721 11.5589C8.62721 10.588 9.41402 9.80094 10.3846 9.80094H25.6154C26.5859 9.80094 27.3728 10.588 27.3728 11.5589C27.3728 12.5297 26.5859 13.3168 25.6154 13.3168H10.3846C9.41402 13.3168 8.62721 12.5297 8.62721 11.5589ZM8.62721 18.5906C8.62721 17.6197 9.41402 16.8327 10.3846 16.8327H20.929C21.8995 16.8327 22.6864 17.6197 22.6864 18.5906C22.6864 19.5614 21.8995 20.3485 20.929 20.3485H10.3846C9.41402 20.3485 8.62721 19.5614 8.62721 18.5906Z"
                    fill="white"
                  />
                </svg>
                16
              </button>

              <button>
                <svg width="3.6rem" height="3.6rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.5844 4.33773L33.5836 17.1335C34.1388 17.641 34.1388 18.5156 33.5836 19.0232L19.5844 31.819C18.763 32.5698 17.4408 31.9871 17.4408 30.8743V25.2733C17.4408 25.2733 17.4407 25.2733 17.4405 25.2733C9.58534 25.2733 5.44523 28.2379 3.48732 30.3614C3.0339 30.8531 1.96643 30.5374 2.00081 29.8695C2.28936 24.2626 4.38251 11.5359 17.4405 11.5359C17.4407 11.5359 17.4408 11.5359 17.4408 11.5359V5.28251C17.4408 4.16966 18.763 3.58691 19.5844 4.33773Z"
                    fill="white"
                  />
                </svg>
                Share
              </button>

              <div className={styles["shorts-page__sound"]}>
                <svg width="1.8rem" height="2rem" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="-0.000488281" width="2" height="20" rx="1" fill="white" />
                  <rect x="4" y="3.99951" width="2" height="12" rx="1" fill="white" />
                  <rect y="6.99951" width="2" height="6" rx="1" fill="white" />
                  <rect x="16" y="6.99951" width="2" height="6" rx="1" fill="white" />
                  <rect x="12" y="3.99951" width="2" height="12" rx="1" fill="white" />
                </svg>
              </div>
            </div>

            <div className={styles["shorts__details"]}>
              <div className={styles["shorts__title"]}>React JS - React Tutorial for Beginners - {index + 1}</div>

              <div className={styles["shorts__channel"]}>
                <img src="https://via.placeholder.com/28/92c952" style={{ width: "3.2rem", height: "3.2rem" }} alt="user" />

                <div className={styles["shorts__channel-name"]}>YouTube Channel</div>
                <button className={styles["shorts__btn-subscribe"]}>subscribe</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomMenu currentRoute="shorts" />
    </main>
  );
}
