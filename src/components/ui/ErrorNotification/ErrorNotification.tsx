import  React from 'react'
import styles from './ErrorNotification.module.css'

interface ErrorNotificationProps {
    message: string;
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({message}) => {
    return (
        <span className={styles.error}>{message}</span>
    )
}