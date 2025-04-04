import styles from './UpdateButton.module.css'
import reloadIcon from '@assets/Refresh.svg';

export default function UpdateButton({...props}) {
  return (
	<button {...props} className={styles.button}>
		<span className={styles.text}>Обновить</span>
		<img src={reloadIcon} alt="reloadIcon" className={styles.reloadIcon}/>
	</button>
  )
}
