function Resume({이름, 취미, 자기소개}) {
    let like = 0

    function clickLike() {
        like += 1
        console.log(like)
    }

    return (
        <section>
            <h2>{이름}</h2>
            <p>{취미}</p>
            <p>{자기소개}</p>
            {/* 여기가 왜 증가되지 않을까?? - 변수가 변경이 된다고 하더라도 렌더링이 다시 일어나지 않기 때문 */}
            <button onClick={clickLike}>{like}</button>
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
