import { useState, useContext } from "react";
import PermissionContext from "../../context/permission-context";
import UpdatePopUp from '../PopUps/UpdatePopUp'
import Button from "../UI/Button";


const EditButton = props => {

    const permissionContext = useContext(PermissionContext)
    const [id, setId] = useState('')
    const [currentData, setCurrentData] = useState('');
    const [popUp, setPopUp] = useState(false);

    const editRequest = (e) => {
        setId((previd) => previd = e.target.parentNode.parentNode.id)
        setCurrentData((prevData) => prevData = [e.target.parentNode.parentNode.children[0].textContent, e.target.parentNode.parentNode.children[1].textContent, e.target.parentNode.parentNode.children[2].textContent])
        setPopUp(!popUp);
    }

    const editHandler = (data) => {
        if (data.length > 0) {
            fetch(`http://localhost:8000/products/${Number(id)}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: data[0],
                    price: data[1],
                    currency: data[2],
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }

            })
               
                .catch(err => console.log(err))

        } else {
        }
        setPopUp(!popUp);
        permissionContext.RERENDER();
    }




    return (
        <>
            {popUp && <UpdatePopUp onEditRequst={editHandler} contentToChange={currentData} />}
            < Button type="button" onClick={editRequest} > Edit</Button >
        </>
    )
}

export default EditButton