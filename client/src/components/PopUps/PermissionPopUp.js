import { useContext, useState } from 'react';
import PermissionContext from '../../context/permission-context';
import styles from './PermissionPopUp.module.css'

const PermissionPopUp = props => {

    let currentPermissions = useContext(PermissionContext)

    const [canCreate, setCanCreate] = useState(currentPermissions.permissions.CREATE);
    const [canRead, setCanRead] = useState(currentPermissions.permissions.READ);
    const [canUpdate, setCanUpdate] = useState(currentPermissions.permissions.UPDATE);
    const [canDelete, setCanDelete] = useState(currentPermissions.permissions.DELETE);

    fetch(`http://localhost:8000/permissions/`, {
        method: 'PATCH',
        body: JSON.stringify({
            CREATE: canCreate,
            READ: canRead,
            UPDATE: canUpdate,
            DELETE: canDelete
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(res => res.json())
        .then(res => currentPermissions.permissions = { ...res })
        .catch(err => err)



    const createHandler = e => {
        setCanCreate((prevState) => prevState = !canCreate)
        e.target.classList.toggle(`${styles.disabled}`)
        currentPermissions.RERENDER()

    }

    const readHandler = e => {
        setCanRead((prevState) => prevState = !canRead)
        e.target.classList.toggle(`${styles.disabled}`);
        currentPermissions.RERENDER();
    }

    const updateHandler = e => {
        setCanUpdate((prevState) => prevState = !canUpdate);
        e.target.classList.toggle(`${styles.disabled}`);
        currentPermissions.RERENDER();
    }

    const deleteHandler = e => {
        setCanDelete((prevState) => prevState = !canDelete);
        e.target.classList.toggle(`${styles.disabled}`);
        currentPermissions.RERENDER();
    }



    return (
        <div className={styles.wrapper}>

            <div onClick={createHandler} className={styles.option}> <p>Create</p>
                {canCreate ?
                    <div className={styles.toggle} >
                        <div className={styles.circle} />
                    </div>
                    :
                    <div className={`${styles.toggle} ${styles.disabled}`} >
                        <div className={styles.circle} />
                    </div>}
            </div>

            <div onClick={readHandler} className={styles.option}> <p>Read</p>
                {canRead ?
                    <div className={styles.toggle}>
                        <div className={styles.circle} />
                    </div>
                    :
                    <div className={`${styles.toggle} ${styles.disabled}`}>
                        <div className={styles.circle} />
                    </div>}
            </div>

            <div onClick={updateHandler} className={styles.option}> <p>Update</p>
                {canUpdate ?
                    <div className={styles.toggle}>
                        <div className={styles.circle} />
                    </div>
                    :
                    <div className={`${styles.toggle} ${styles.disabled}`}>
                        <div className={styles.circle} />
                    </div>}
            </div>

            <div onClick={deleteHandler} className={styles.option}> <p>Delete</p>
                {canDelete ?
                    <div className={styles.toggle}>
                        <div className={styles.circle} />
                    </div>
                    :
                    <div className={`${styles.toggle} ${styles.disabled}`}>
                        <div className={styles.circle} />
                    </div>}
            </div>
        </div >
    )

}

export default PermissionPopUp;