import { useState, useEffect } from "react"

export default function App() {
    const [결혼여부, set결혼여부] = useState('미혼')
    const [잔고, set잔고] = useState(1000000)
    const [결혼대상, set결혼대상] = useState('대상없음')

    const handle소개팅 = (e) => {
        set결혼여부('소개팅 중')
        set잔고(500000)
        set결혼대상('미정')
        alert('부모님께 용돈을 받았습니다!' + 잔고)
    }

    useEffect(() => {
        if ( 잔고 <= 500000 && 결혼대상 === '미정') {
            set잔고(잔고 + 2000000)
        }
    }, [잔고, 결혼대상])

    // 요구사항 : 소개팅 버튼을 눌렀을 때
        // 결혼 여부 -> 소개팅 중
        // 잔고 -> 50만원
        // 결혼대상 -> 미정
	return (
		<div>
            <button onClick={handle소개팅}>소개팅 Go</button>
            <p>{결혼여부}</p>
            <p>{잔고}</p>
            <p>{결혼대상}</p>
        </div>
	)
}
