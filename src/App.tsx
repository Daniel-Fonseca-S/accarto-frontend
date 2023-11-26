import React from 'react';
import './App.css';
import logo from './images/accarto-logo.png';

function App() {

  // const [imagem, setImagem] = React.useState<File | undefined>(undefined);
  const [imagem, setImagem] = React.useState<any | File | undefined>(null);

  function handleLogoClick() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  function handleEnviarImagem() {
    console.log(imagem);
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImagem(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className='app'>
      <main className='container'>
        <section className='cabecalho'>
          <img src={logo} alt="logo do Accarto" className='logo' onClick={handleLogoClick} />
          <h1 className='App-header'>Accarto - Identificador de veículos</h1>
        </section>
        <section className='form'>
          <p className='form-header'>Selecione uma imagem de um veículo e clique em "Enviar Imagem".</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onImageChange(e)}
            className='file-selector' placeholder='selecione uma imagem'
          />

          {imagem && <img src={imagem} alt="arquivo de imagem" className='imagem' />}

          <button onClick={handleEnviarImagem} className='button'>Enviar Imagem</button>
        </section>
      </main>
    </div>
  );
}

export default App;
