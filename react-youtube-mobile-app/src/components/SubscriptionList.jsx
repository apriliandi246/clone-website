import styles from "../css/components/SubscriptionList.module.css";

export default function SubscriptionList() {
  return (
    <div className={styles["subscription-list__item"]}>
      <img src="https://via.placeholder.com/56/92c952" style={{ width: "5.6rem", height: "5.6rem" }} alt="user" />
      <div className={styles["subscription-list__channel-name"]}>YouTube Channel</div>
      <div className={styles["subscription-list__indicator"]}></div>
    </div>
  );
}
