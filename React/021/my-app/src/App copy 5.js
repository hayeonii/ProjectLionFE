import React, { Fragment } from 'react'

// function App() {
//   return (
//     <Fragment>
//       <p>hello world 10</p>
//       <p>hello world 20</p>
//     </Fragment>
//   );
// }

// function App() {
//   return (
//     <React.Fragment>
//       <p>hello world 10</p>
//       <p>hello world 20</p>
//     </React.Fragment>
//   );
// }

function App() {
  return (
    // 이 형식 권장
    <>
      <p>hello world 10</p>
      <p>hello world 20</p>
    </>
  );
}

export default App;
