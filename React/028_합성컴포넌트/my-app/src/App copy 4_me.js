import styled from "styled-components";

// const CardDiv = styled.div`
//   padding: 20px;
//   border-radius: 10px;
//   border: 1px solid #c4c4c4;
//   margin-bottom: 20px;
//   width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
// `;

function One(){
  return (
    <>
      <a href="#">SHARE</a>
      <a href="#">LEARN MORE</a>
    </>
      
  )
}

function Two(){
  return (
    <></>
  )
}

function Three(){
  return (
      <a href="#">SHARE</a>
  )
}

function Card(props) {
  return (
    <div>
      <img src="https://picsum.photos/200/300​" alt="" />
      <h2>{props.value}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <>
      <Card value="One">
        <One />
      </Card>
      <Card value="Two">
        <Two />
      </Card>
      <Card value="Three">
        <Three />
      </Card>
    </>
  );
}

export default App;