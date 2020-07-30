import React from 'react';
import Menu from '../../componentes/Menu';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import Footer from '../../componentes/Footer';

function Home() {
  return (
    <div className="Home">
      <Menu />
      <style>
        {"body { background-color: rgb(20,20,20); }"}
      </style>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />
      <Footer/>
    </div>
  );
}

export default Home;
