import styled from 'styled-components'

const CopntentsDivOne = styled.div`
    color : red;
`

const CopntentsDivTwo = styled.div`
    color : green;
`

const CopntentsDivThree = styled.div`
    color : blue;
`

const SectionTitle = styled.h2`
    color : hotpink;
    font: 32px;
`

function App() {
    return (
        <>
            <SectionTitle>Hello</SectionTitle>
            <CopntentsDivOne>hello world</CopntentsDivOne>
            <CopntentsDivTwo>hello world</CopntentsDivTwo>
            <CopntentsDivThree>hello world</CopntentsDivThree>
        </>
    );

    /*
        styled components의 장점
        1. className을 고민할 필요가 없음
        2. 클래스명 유추 불가 - 정보를 빼가기가 굉장히 힘들다
        
    */
}

export default App;