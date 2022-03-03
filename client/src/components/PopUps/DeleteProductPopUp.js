import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './DeleteProductPopUp.module.css';



const DeleteProductPopUp = props => {

    const clickHandler = e => {
        if (e.target.textContent === 'Yes') {
            return props.onDelete(true)
        } else {
            return props.onDelete(false)
        }
    }

    return (

        <>
            <div className={styles.backdrop} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h3>{props.title}</h3>
                </header>
                <main className={styles.content}>
                    <p>{props.message}</p>
                </main>
                <footer className={styles.actions}>
                    <Button onClick={clickHandler}>Yes</Button>
                    <Button onClick={clickHandler}>No</Button>
                </footer>
            </Card>
        </>

    )

}

export default DeleteProductPopUp;