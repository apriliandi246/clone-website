import { Link } from "react-router-dom";
import styles from "../css/components/BottomMenu.module.css";

export default function BottomMenu({ currentRoute }) {
  return (
    <div className={styles["bottom-menu"]}>
      <Link to="/" className={styles["bottom-menu-link"]}>
        <div className={styles["bottom-menu__item"]}>
          {currentRoute === "home" && (
            <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="#030303" />
            </svg>
          )}
          {currentRoute !== "home" && (
            <svg width="2.4rem" height="2.4rem" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.33L19 10.45V20H15V14H9V20H5V10.45L12 4.33ZM12 3L4 10V21H10V15H14V21H20V10L12 3Z" fill="#030303" />
            </svg>
          )}
          Home
        </div>
      </Link>

      <Link to="/shorts" className={styles["bottom-menu-link"]}>
        {currentRoute === "shorts" && (
          <div className={styles["bottom-menu__item"]}>
            <svg width="3.1rem" height="2.6rem" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.792161 10.2903C-0.154613 8.65042 0.407246 6.55354 2.04711 5.60676L10.2125 0.892479C11.8523 -0.0542955 13.9492 0.507561 14.896 2.14742C15.8428 3.78728 15.2809 5.88416 13.6411 6.83094L12.1637 7.68389C13.8025 6.74296 15.8946 7.30557 16.84 8.94302C17.7867 10.5829 17.2249 12.6798 15.585 13.6265L7.41963 18.3408C5.77977 19.2876 3.68289 18.7257 2.73611 17.0859C1.78934 15.446 2.3512 13.3491 3.99106 12.4024L5.46842 11.5494C3.82964 12.4903 1.73754 11.9277 0.792161 10.2903ZM7.92602 7.56544C7.59269 7.37299 7.17602 7.61356 7.17602 7.99846L7.17602 11.5531C7.17602 11.938 7.59269 12.1785 7.92602 11.9861L11.0044 10.2088C11.3377 10.0163 11.3377 9.53519 11.0044 9.34274L7.92602 7.56544Z"
                fill="black"
              />
            </svg>
            Shorts
          </div>
        )}

        {currentRoute !== "shorts" && (
          <div className={styles["bottom-menu__item"]}>
            <svg width="3.1rem" height="2.6rem" fill="none" viewBox="0 0 31 26" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.13874 8.83851C5.08891 9.98726 4.38659 12.5315 5.57006 14.5212C6.23184 15.6338 7.25877 16.3847 8.36003 16.6487C6.84281 17.9289 6.42147 20.1127 7.46427 21.8659C8.64774 23.8556 11.2688 24.5373 13.3187 23.3885L23.5228 17.67C25.5726 16.5212 26.2749 13.977 25.0914 11.9873C24.4385 10.8896 23.348 10.19 22.1572 9.97625C23.7911 8.7154 24.2723 6.45021 23.1972 4.64266C22.0138 2.65296 19.3926 1.97124 17.3428 3.11999L7.13874 8.83851ZM19.2397 10.4632L21.0928 9.42466C22.6302 8.56309 23.1569 6.65493 22.2693 5.16266C21.3817 3.67039 19.4159 3.1591 17.8785 4.02066L7.67445 9.73918C6.13708 10.6007 5.61034 12.5089 6.49794 14.0012C7.38554 15.4935 9.03297 16.1832 10.4248 15.4032L10.9605 16.3038L9.56866 17.0839C8.0313 17.9454 7.50455 19.8536 8.39215 21.3459C9.27975 22.8381 11.2456 23.3494 12.783 22.4879L22.987 16.7693C24.5244 15.9078 25.0511 13.9996 24.1635 12.5073C23.2759 11.0151 21.3101 10.5038 19.7728 11.3653L19.237 10.4647C19.2379 10.4642 19.2388 10.4637 19.2397 10.4632Z"
                fill="black"
              />
              <path d="M13.2781 11.635C13.2781 11.2573 13.6937 11.0243 14.0307 11.2132L18.3163 13.6149C18.6571 13.8059 18.6619 14.2839 18.3249 14.4728L14.0392 16.8746C13.7022 17.0634 13.2781 16.8204 13.2781 16.4385L13.2781 11.635Z" fill="black" />
            </svg>
            Shorts
          </div>
        )}
      </Link>

      <button className={styles["bottom-menu__add"]}>
        <svg width="4.3rem" height="4.2rem" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.5 36.5556C30.0911 36.5556 37.0556 29.5911 37.0556 21C37.0556 12.4089 30.0911 5.44444 21.5 5.44444C12.9089 5.44444 5.94444 12.4089 5.94444 21C5.94444 29.5911 12.9089 36.5556 21.5 36.5556ZM21.5 38.5C31.165 38.5 39 30.665 39 21C39 11.335 31.165 3.5 21.5 3.5C11.835 3.5 4 11.335 4 21C4 30.665 11.835 38.5 21.5 38.5Z" fill="#030303" />
          <path fillRule="evenodd" clipRule="evenodd" d="M32 22.75H11V20.125H32V22.75Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.75 31.5L19.75 10.5L22.375 10.5L22.375 31.5L19.75 31.5Z" fill="black" />
        </svg>
      </button>

      <Link to="/subscription" className={styles["bottom-menu-link"]}>
        <div className={styles["bottom-menu__item"]}>
          {currentRoute === "subscription" && (
            <svg width="2.8rem" height="2.8rem" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3333 8.16667H4.66665V7H23.3333V8.16667ZM25.6666 10.5V24.5H2.33331V10.5H25.6666ZM17.5 17.5L11.6666 14V21L17.5 17.5ZM19.8333 3.5H8.16665V4.66667H19.8333V3.5Z" fill="black" />
            </svg>
          )}
          {currentRoute !== "subscription" && (
            <svg width="2.8rem" height="2.8rem" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6667 21V14L17.5 17.5L11.6667 21ZM19.8334 3.5H8.16671V4.66667H19.8334V3.5ZM23.3334 7H4.66671V8.16667H23.3334V7ZM25.6667 10.5H2.33337V24.5H25.6667V10.5ZM3.50004 11.6667H24.5V23.3333H3.50004V11.6667Z" fill="#030303" />
            </svg>
          )}
          Subscription
        </div>
      </Link>

      <Link to="/library" className={styles["bottom-menu-link"]}>
        <div className={styles["bottom-menu__item"]}>
          {currentRoute === "library" && (
            <svg width="2.8rem" height="2.8rem" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66667 23.3333H21V24.5H3.5V7H4.66667V23.3333ZM24.5 3.5V21H7V3.5H24.5ZM19.8333 12.25L12.8333 8.16667V16.3333L19.8333 12.25Z" fill="black" />
            </svg>
          )}
          {currentRoute !== "library" && (
            <svg width="2.8rem" height="2.8rem" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8333 8.16667L19.8333 12.25L12.8333 16.3333V8.16667ZM21 23.3333H4.66667V7H3.5V24.5H21V23.3333ZM24.5 21H7V3.5H24.5V21ZM8.16667 19.8333H23.3333V4.66667H8.16667V19.8333Z" fill="#030303" />
            </svg>
          )}
          Library
        </div>
      </Link>
    </div>
  );
}
