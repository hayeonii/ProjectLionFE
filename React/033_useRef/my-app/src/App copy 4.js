import { useState, useEffect, useRef } from "react"

// 목표: 검색 키워드를 가지고 와서 fetch로 보내는 것

export default function App() {
  const searchValue = useRef(null)

  const handleSearch = (e) => {
    console.log('클릭했음')
    console.log(searchValue)
    console.log(searchValue.current.value)
    
    
    // 여기에 fetch 코드가 들어감
    // fetch(어쩌구)
    // 중략


    searchValue.current.value = 'hello'
  }

  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type="text" ref={searchValue}/>
      </label>
      <button type="button" onClick={handleSearch}>검색</button>
    </div>
  )
}
