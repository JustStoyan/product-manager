import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './UpdatePopUp.module.css'


const UpdatePopUp = props => {
    const [currentName, currentPrice, currentCurrency] = [...props.contentToChange];

    const [name, setName] = useState(currentName);
    const [price, setPrice] = useState(currentPrice);
    const [currency, setCurrency] = useState(currentCurrency);

    const nameChange = e => {
        setName((prevName) => prevName = e.target.value);
    }

    const priceChange = e => {
        setPrice((prevPrice) => prevPrice = e.target.value);
    }

    const currencyChange = e => {
        setCurrency((prevCurr) => prevCurr = e.target.value);
    }

    const clickHandler = e => {
        if (e.target.textContent === 'Update') {
            return props.onEditRequst([name, price, currency])
        } else {
            return props.onEditRequst([])
        }
    }



    return (
        <>
            <div className={styles.backdrop} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h3>Update Window</h3>
                </header>
                <main className={styles.content}>
                    <label htmlFor="updateName">Name</label>
                    <input type="text" id="updateName" value={name} onChange={nameChange} />

                    <label htmlFor="updatePrice">Price</label>
                    <input type="number" value={price} onChange={priceChange} />

                    <label htmlFor="updateCurrency">Currency</label>
                    <input type="text" maxLength={3} value={currency} onChange={currencyChange} />
                </main>

                <footer className={styles.actions}>
                    <Button type="submit" onClick={clickHandler}>Update</Button>
                    <Button type="button" onClick={clickHandler}>Cancel</Button>
                </footer>

            </Card>
        </>
    )

}

export default UpdatePopUp;