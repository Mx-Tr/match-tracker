import styles from './Loader.module.css';
import loaderIcon from '../../../assets/Refresh.svg';

export default function Loader() {
    return (
        <div className={styles.loader}>
            <img src={loaderIcon} alt="Loading..." className={styles.loader_icon} />
        </div>
    );
}
