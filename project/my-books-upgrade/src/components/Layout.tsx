import styles from "./Layout.module.css";

// const Layout: React.FC = (children) => {
//     return <div className={styles.layout}>children</div>;
// };

const Layout: React.FC<any> = ({ children }) => {
    return <div className={styles.layout}>{children}</div>;
};

export default Layout;
