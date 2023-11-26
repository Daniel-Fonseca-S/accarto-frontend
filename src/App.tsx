import React from 'react';
import './App.css';
import logo from './images/accarto-logo.png';

function App() {

  // const [imagem, setImagem] = React.useState<File | undefined>(undefined);
  const [imagem, setImagem] = React.useState<any | File | undefined>(null);

  function handleLogoClick() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      //verificar se é imagem
      if (event.target.files[0].type.split('/')[0] !== 'image') {
        alert('O arquivo selecionado não é uma imagem!');
        setImagem(null);
        return;
      }
      setImagem(file);
    }
  };

  function handleSendImage() {
    console.log(imagem);
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

          {imagem &&
            <div className='rainbow-container'>
              <img src={imagem} alt="arquivo de imagem" className='imagem rainbow' />
            </div>
          }

          <button onClick={handleSendImage} className={!imagem ? 'disabled' : 'button'} disabled={!imagem}>Enviar Imagem</button>
        </section>
      </main>
    </div>
  );
}

export default App;
