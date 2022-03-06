import { useState } from "react";
import DeleteProductPopUp from "../PopUps/DeleteProductPopUp";
import Button from "../UI/Button";


const DeleteButton = props => {

    const [confirmation, setConfirmation] = useState(false);
    const [currentProduct, setCurrentProduct] = useState('')


    const deleteRequest = (e) => {
        setCurrentProduct((prevState) => prevState = e.target.parentNode.parentNode.id)
        setConfirmation(!confirmation)
    }

    const deleteAction = (answer) => {
        if (answer) {
            fetch(`http://localhost:8000/products/${currentProduct}`, {
                method: 'DELETE'
            });
            return props.onDelete(currentProduct);
        }
        setConfirmation(!confirmation);

    }

    return (
        <>
            {confirmation && <DeleteProductPopUp onDelete={deleteAction} title="You are about to delete a product!" message="Do you want to delete it?" />}
            <Button type="button" onClick={deleteRequest} >Delete</Button>
        </>
    )
}

export default DeleteButton