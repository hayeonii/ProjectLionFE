import { useState } from "react"

function Resume({이름, 취미, 자기소개}) {
    let [like, setLike] = useState(0)
    // let [like, setLike] = useState(100)
    // let [like, setLike] = useState('hello world')


    function handleClickLike() {
        // like += 1
        // setLike(like + 1) // like = like + 1
        // setLike(like + 2) // like = like + 2
        setLike(like + 'hello' + 'world') // like = like + 'hello' + 'world'

        console.log(like)
    }

    return (
        <section>
            <h2>{이름}</h2>
            <p>{취미}</p>
            <p>{자기소개}</p>
            <button onClick={handleClickLike}>{like}</button>
        </section>
    )
}

function App() {
	return (
		<main>
            <Resume 이름="임하연" 취미="방탈출" 자기소개="안뇽하세용"/>
        </main>
	);
}

export default App;
