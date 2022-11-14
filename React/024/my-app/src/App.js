import { useState } from 'react';

const Login = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const handleLoginSubmit = (e) => {
        console.log('로그인 버튼을 클릭했음')
        e.preventDefault()
        console.log('refresh 막혔음')
        alert(`id : ${id} pw : ${pw}`)
    }

    const handleIdInput = (e) => {
        console.log('아이디가 수정되었음')
        // 실시간으로 정규표현식 사용해서 이상한 문자열이 포함되진 않았는지 알려줄 수 잇음
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        setId(e.target.value)
    }

    const handlePwInput = (e) => {
        console.log('패스워드가 수정되었음')
        setPw(e.target.value)
    }

    return (
        <form action='' onSubmit={handleLoginSubmit}>
            <label>
                아이디 : 
                <input type="text" onChange={handleIdInput}/>
            </label>
            <label>
                패스워드 : 
                <input type="password" onChange={handlePwInput}/>
            </label>
            <button type='submit'>로그인</button>
        </form>
    )
}

function App() {
    return (
        <div>
            <Login />
        </div>
    );
}

export default App;
