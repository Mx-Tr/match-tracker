import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';
import { FilterStatus } from '../../../types/extendedTypes';

interface Option {
    label: string;
    value: FilterStatus;
}

interface DropdownProps {
    options: Option[];
    selected: Option;
    onChange: (option: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    const handleOptionClick = (option: Option) => {
        onChange(option);
        setOpen(false);
    };

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <button
                type="button"
                className={`${styles.dropdownToggle} ${open ? styles.open : ''}`}
                onClick={handleToggle}
            >
                {selected.label}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrow}
                >
                    <path
                        d="M14.932 6.81567H5.06536C4.26536 6.81567 3.86536 7.78234 4.43203 8.34901L8.74869 12.6657C9.44036 13.3573 10.5654 13.3573 11.257 12.6657L12.8987 11.024L15.5737 8.34901C16.132 7.78234 15.732 6.81567 14.932 6.81567Z"
                        fill="currentColor"
                    />
                </svg>
            </button>

            {open && (
                <div className={styles.dropdownMenu}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`
                ${styles.dropdownItem} 
                ${option.value === selected.value ? styles.activeItem : ''}
              `}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
