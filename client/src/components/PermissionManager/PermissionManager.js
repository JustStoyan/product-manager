import PermissionPopUp from '../PopUps/PermissionPopUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import styles from './PermissionManager.module.css'
import { useState } from 'react'

const PermissionManager = props => {

    const [isActive, setIsActive] = useState(false);

    const popUpHandler = e => {
        setIsActive(!isActive)
    }

    return (
        <>
            <FontAwesomeIcon onClick={popUpHandler} className={styles.wrapper} icon={faCog} />
            {isActive && <PermissionPopUp />}
        </>

    )
}

export default PermissionManager;