import { useState } from "react";
import Container from "./components/Container";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import CharterContainer from "./components/CharterContainer";
function App() {
  const [characters,setCharacters] = useState(null)
  const reqapi = async () =>{
    // const api = fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")
    const api = fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")
    const frase = await (await api).json();
    setCharacters(frase)
  }
  return (
        <Container>
           <Header/>
           {!characters ? (
             <Welcome reqapi={reqapi}/>
             ):(
             <CharterContainer characters={characters} reqapi={reqapi}/>
           )}
        </Container>
  );
}


export default App;
