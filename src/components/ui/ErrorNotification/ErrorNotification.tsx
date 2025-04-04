import React, { useEffect, useState } from 'react';
import styles from './ErrorNotification.module.css';
import errorNotificationIcon from '@assets/alert_triangle.svg';

interface ErrorNotificationProps {
    message: string;
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({ message }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [message]);

    return (
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
            <img src={errorNotificationIcon} alt="alert-icon" className={styles.icon} />
            <span className={styles.message}>{message}</span>
        </div>
    );
};
