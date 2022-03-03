import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './WrongInputPopUp.module.css';



const WrongInputPopUp = props => {

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
                    <Button>Okay</Button>
                </footer>
            </Card>
        </>

    )

}

export default WrongInputPopUp;