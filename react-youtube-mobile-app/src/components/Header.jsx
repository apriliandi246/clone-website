import logo from "../assets/logo.svg";
import styles from "../css/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <img src={logo} style={{ width: "9rem", height: "2rem" }} className={styles["header__logo"]} alt="YouTube logo" />

      <div className={styles["header__menus"]}>
        <div className={styles["header__menu-item"]}>
          <svg width="2.4rem" height="2rem" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 7.89478C3.37032 7.89478 4.72721 8.15616 5.99322 8.66399C7.25922 9.17183 8.40955 9.91618 9.37851 10.8545C10.3475 11.7929 11.1161 12.9069 11.6405 14.1329C12.1649 15.3589 12.4348 16.673 12.4348 18H10.6957C10.6957 16.8942 10.4707 15.7991 10.0337 14.7774C9.59674 13.7558 8.95622 12.8274 8.14876 12.0455C7.34129 11.2635 6.38269 10.6432 5.32768 10.22C4.27268 9.7968 3.14193 9.57899 2 9.57899V7.89478Z" fill="#0A0A0A" />
            <path fillRule="evenodd" clipRule="evenodd" d="M2 11.2631C2.91354 11.2631 3.81814 11.4373 4.66215 11.7759C5.50615 12.1144 6.27303 12.6107 6.919 13.2362C7.56498 13.8618 8.07739 14.6045 8.42699 15.4218C8.77659 16.2392 8.95652 17.1152 8.95652 17.9999H7.21739C7.21739 17.3364 7.08244 16.6794 6.82024 16.0663C6.55804 15.4533 6.17373 14.8963 5.68925 14.4272C5.20477 13.958 4.62961 13.5858 3.99661 13.3319C3.36361 13.078 2.68516 12.9473 2 12.9473V11.2631Z" fill="#0A0A0A" />
            <path fillRule="evenodd" clipRule="evenodd" d="M2 18L2 14.6316C2.45677 14.6316 2.90907 14.7187 3.33107 14.888C3.69337 15.0333 4.02724 15.2367 4.31884 15.4893C4.3669 15.531 4.4138 15.5739 4.4595 15.6182C4.5052 15.6624 4.54956 15.7078 4.59254 15.7544C4.85336 16.0368 5.06343 16.3601 5.21349 16.711C5.38829 17.1196 5.47826 17.5577 5.47826 18L2 18Z" fill="#0A0A0A" />
            <path fillRule="evenodd" clipRule="evenodd" d="M2 4.25641C2 3.01023 3.04784 2 4.34043 2H19.6596C20.9522 2 22 3.01023 22 4.25641V15.7436C22 16.9898 20.9522 18 19.6596 18H14.5532V16.7692H19.6596C20.2471 16.7692 20.7234 16.31 20.7234 15.7436V4.25641C20.7234 3.68996 20.2471 3.23077 19.6596 3.23077H4.34043C3.75289 3.23077 3.2766 3.68996 3.2766 4.25641V5.89744H2V4.25641Z" fill="#0A0A0A" />
          </svg>
        </div>

        <div className={styles["header__menu-item"]}>
          <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H14C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20ZM20 17.35V19H4V17.35L6 15.47V10.32C6 7.40004 7.56 5.10004 10 4.34004V3.96004C10 2.54004 11.49 1.46004 12.99 2.20004C13.64 2.52004 14 3.23004 14 3.96004V4.35004C16.44 5.10004 18 7.41004 18 10.33V15.48L20 17.35ZM19 17.77L17 15.89V10.42C17 7.95004 15.81 6.06004 13.87 5.32004C12.61 4.79004 11.23 4.82004 10.03 5.35004C8.15 6.11004 7 7.99004 7 10.42V15.89L5 17.77V18H19V17.77Z" fill="black" />
          </svg>
        </div>

        <div className={styles["header__menu-item"]}>
          <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z" fill="black" />
          </svg>
        </div>

        <button className={styles["header__user-menu"]}>
          <img src="https://via.placeholder.com/24/92c952" style={{ width: "2.4rem", height: "2.4rem" }} alt="user" />
        </button>
      </div>
    </header>
  );
}
