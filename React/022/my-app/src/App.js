import Footer from "./components/footer";
import InputForm from "./components/inputForm";
import Modal from "./components/modal";
import ResultCont from "./components/resultCont";
import ResultLoad from "./components/resultLoad";
import Title from "./components/title";

function App() {
  return (
    <>
      <main>
        <Title />
        <InputForm />
        <ResultLoad />
        <ResultCont />
        <Footer />
      </main>
      <Modal />
    </>
  );
}

export default App;
