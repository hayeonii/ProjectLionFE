import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle `
    ${reset}
    span {
        color : red;
    }
`

function One() {
    return (
        <section>
            <h2>hello one</h2>
            <span>hello</span>
        </section>
    )
}

function Two() {
    return (
        <section>
            <h2>hello two</h2>
            <span>hello</span>
        </section>
    )
}

function App() {
    // console.log('// reset 시작')
    // console.log('에릭 마이어 reset CSS 들어가있음')
    // console.log(reset[0])
    // console.log('-------------')
    return (
        <>
            <GlobalStyle />
            <h1>hello world</h1>
            <span>hello world</span>
            <One />
            <Two /> 
        </>
    );
}

export default App;