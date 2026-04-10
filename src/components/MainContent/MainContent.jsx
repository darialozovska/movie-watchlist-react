import styles from "./MainContent.module.css";

const MainContent = ({ children }) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export default MainContent;