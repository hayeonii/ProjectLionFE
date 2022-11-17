import { useState, useEffect, useRef } from "react"

// 목표: 검색 키워드를 가지고 와서 fetch로 보내는 것

// 실제로는 fetch 해서 얻어온 data라고 생각해주자
const data = [
  '개발자 키링 개리',
  '개발자 파우리 위니브',
  '담요',
  '개발자 키보드',
  '코딩 노트',
  '일반 무지 노트',
  '위니브 스티커팩 -1',
  '위니브 스티커팩 -2'
]

export default function App() {
  const searchValue = useRef(null)
  const [searchResult, setsearchResult] = useState([])

  const handleSearch = (e) => {
    console.log('클릭했음')
    console.log(searchValue)
    console.log(searchValue.current.value)
    
    
    // 여기에 fetch 코드가 들어감
    // fetch(어쩌구)
    // 중략

    setsearchResult(data.filter(item => item.indexOf(searchValue.current.value) !== -1).map(item => <p key={item}>{item}</p>))
    
    searchValue.current.value = ''
  }

  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type="text" ref={searchValue}/>
      </label>
      <button type="button" onClick={handleSearch}>검색</button>
      {/* 여기에 컴포넌트 Array로 넣어주면 됨 */}
      {searchResult}
    </div>
  )
}
