import { useState, useRef} from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputAge = useRef(null)
  const inputGender = useRef(null)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')


  const handleIntroduce = (e) => {
    setName(inputName.current.value)
    setAge(inputAge.current.value)
    setGender(inputGender.current.value)

    inputName.current.value = ''
    inputAge.current.value = ''
    inputGender.current.value = ''
  }

  let result = `제 이름은 ${name}입니다. 저는 ${gender}이고요. 나이는 ${age}살입니다.`

  return (
    <div>
      <label>
        이름 : 
        <input type="text" ref={inputName}/>
      </label>
      <label>
        성별 : 
        <input type="text" ref={inputGender}/>
      </label>
      <label>
        나이 : 
        <input type="text" ref={inputAge}/>
      </label>
      <button type='button' onClick={handleIntroduce}>자기소개</button>
      <p>{result}</p>
    </div>
  )
}
