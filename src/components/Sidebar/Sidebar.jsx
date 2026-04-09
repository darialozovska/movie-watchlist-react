import styles from "./Sidebar.module.css";
import sprite from "../../assets/icons/symbol-defs.svg"

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
        <div className={styles.container}>
        <svg className={styles.iconLogo} width="131" height="32">
          <use href={`${sprite}#icon-Logo`}></use>
          </svg>
        <ul className={styles.list}>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-film`}></use>
          </svg>
          <p className={styles.text}>Home</p>
        </li>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
          <p className={styles.text}>Favourites</p>
        </li>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-trending-up`}></use>
          </svg>
          <p className={styles.text}>Trending</p>
        </li>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-calendar`}></use>
          </svg>
          <p className={styles.text}>Coming soon</p>
        </li>
      </ul>
      <ul className={styles.list2}>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-users`}></use>
          </svg>
          <p className={styles.text}>Community</p>
        </li>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-message-circle`}></use>
          </svg>
          <p className={styles.text}>Social</p>
        </li>
      </ul>
      <ul className={styles.list3}>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-sliders`}></use>
          </svg>
          <p className={styles.text}>Settings</p>
        </li>
        <li className={styles.item}>
          <svg className={styles.icon} width="24" height="24">
            <use href={`${sprite}#icon-log-out`}></use>
          </svg>
          <p className={styles.text}>Logout</p>
        </li>
        </ul>
        </div>
    </aside>
  )
}

export default Sidebar;