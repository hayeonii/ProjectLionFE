import Contents from "../Contents/contents"
import { useState } from "react"

export default function NavBar() {
    const [listName, setListName] = useState('one')

    const handleChangeId = (e) => {
    setListName(e.target.id)
    }

    return(
    <>
        <nav>
        <ul>
            <li 
            id='one' 
            style={listName === 'one' ? {color : 'red'} : {color : 'black'}}
            onClick={handleChangeId}>
                One
            </li>
            <li 
            id='two' 
            style={listName === 'two' ? {color : 'red'} : {color : 'black'}}
            onClick={handleChangeId}>
                Two
            </li>
            <li 
            id='three' 
            style={listName === 'three' ? {color : 'red'} : {color : 'black'}}
            onClick={handleChangeId}>
                Three
            </li>
            <li 
            id='four' 
            style={listName === 'four' ? {color : 'red'} : {color : 'black'}}
            onClick={handleChangeId}>
                Four
            </li>
            <li 
            id='five' 
            style={listName === 'five' ? {color : 'red'} : {color : 'black'}}
            onClick={handleChangeId}>
                Five
            </li>
        </ul>
        </nav>
        <Contents listName={listName}/>
    </>
    )
}