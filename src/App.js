import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acerca from './components/Acerca';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Header from './components/Header';
import Post from './components/Post';
import styled from 'styled-components';
import Error404 from './components/Error404';


const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
          <Route path='*' element={<Error404 />} />
            <Route path='/' element={<Inicio />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/acerca' element={<Acerca />}/>
          </Routes>
        </Main>

      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

const ContenedorPrincipal = styled.div`
  padding:40px;
  width:98%;
  max-width:700px;
`;
const Main = styled.main`
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
export default App;