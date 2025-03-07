import  React from 'react'
import styles from './Header.module.css'
import { ErrorNotification } from '../ui/ErrorNotification/ErrorNotification';

interface HeaderProps {
    onRefresh: () => void;
    errorMessage?: string;
}

export const Header: React.FC<HeaderProps> = ({onRefresh, errorMessage}) => {
    
    return (
        <header className={styles.header}>
        <div className={styles.left}>
          <h1 className={styles.logo}>MatchTracker</h1>
        </div>
        <div className={styles.right}>
          <button className={styles.refreshButton} onClick={onRefresh}>
            Обновить
          </button>

          {errorMessage && <ErrorNotification message={errorMessage} />}
        </div>
      </header>
    )
    
}