import { useEffect, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './UpdatePopUp.module.css'


const UpdatePopUp = props => {
    const [currentName, currentPrice, currentCurrency] = [...props.contentToChange];

    const [name, setName] = useState(currentName);
    const [price, setPrice] = useState(currentPrice);
    const [currency, setCurrency] = useState(currentCurrency);
    const [isEmpty, setIsEmpty] = useState(false)

    const emptyChecker = e => {

        if (!name.trim() || !price.trim() || !currency.trim() || Number(price) < 0) {

            return setIsEmpty((prevState) => {
                return prevState = true;
            })
        } else {
            return setIsEmpty((prevState) => {
                return prevState = false;
            })
        }
    }

    const nameChange = e => {

        setName((name) => {
            return name = e.target.value
        });

    }

    const priceChange = e => {
        let numbers = /^[0-9]*$/;
        if (numbers.test(e.target.value)) {
            return setPrice((prevPrice) => prevPrice = (e.target.value));
        }

    }

    const currencyChange = e => {

        let letters = /^[A-Za-z]*$/;
        if (letters.test(e.target.value)) {
            return setCurrency((prevCurr) => prevCurr = (e.target.value).toUpperCase());
        }
    }

    const clickHandler = e => {


        if (e.target.innerText === 'Update') {
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
                    <input type="text" id="updateName" value={name} onChange={(e) => { nameChange(e); emptyChecker() }} />

                    <label htmlFor="updatePrice">Price</label>
                    <input type="number" value={price} onChange={(e) => { priceChange(e); emptyChecker() }} />

                    <label htmlFor="updateCurrency">Currency</label>
                    <input type="text" maxLength={3} value={currency} onChange={(e) => { currencyChange(e); emptyChecker() }} />
                </main>

                <footer className={styles.actions}>
                    <Button type="submit" disabled={isEmpty} onClick={clickHandler}>Update</Button>
                    <Button type="button" onClick={clickHandler}>Cancel</Button>
                </footer>

            </Card>
        </>
    )

}

export default UpdatePopUp;