import GlobalStyle from 'GlobalStyle';
import { Footer, Header } from 'containers';
import PokeDictionary from 'pages/PokeDictionary';
import TypeDictionary from 'pages/TypeDictionary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PokeDictionary />} />
          <Route path="/typedic" element={<TypeDictionary />} />
          <Route path="/genedic" element={<TypeDictionary />} />
        </Routes>
        <ToastContainer />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
