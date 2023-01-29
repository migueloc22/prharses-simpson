import Container from "./components/Container";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
function App() {
  const reqapi = async () =>{
    const api = fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")
      
  }
  return (
        <Container>
           <Header/>
          <Welcome/>
        </Container>
  );
}


export default App;
