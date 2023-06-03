import GlobalStyle from 'GlobalStyle';
import { Footer, Header } from 'containers';
import GeneDictionary from 'pages/GeneDictionary';
import PokeDictionary from 'pages/PokeDictionary';
import PokemonInfo from 'pages/PokemonInfo';
import TypeDictionary from 'pages/TypeDictionary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PokeDictionary />} />
          <Route path="/typedic" element={<TypeDictionary />} />
          <Route path="/genedic" element={<GeneDictionary />} />
          <Route path="/:id" element={<PokemonInfo />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
