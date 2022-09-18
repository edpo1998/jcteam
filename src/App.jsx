import { useState } from 'react'
import Plan from './containers/Plan'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './App.css'
import domtoimage from 'dom-to-image';
function App() {
  const [comidas,setComidas] = useState([])

  const toDataURL = (url) => {
    return fetch(url).then((response) => {
            return response.blob();
        }).then(blob => {
            return URL.createObjectURL(blob);
        });
  }

  const download = async (url) => {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
 }

  const getPDF = () =>{
    const node = document.querySelector(".Plan");
      domtoimage.toPng(node)
      .then (function (dataUrl) {
          //var img = new Image();
          //img.src = dataUrl;
          //const edit = document.querySelector("#editor");
          //edit.download = "myImage.png";
          //edit.appendChild(img);
          //edit.click();
          download(dataUrl)
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });    
  } 
  return (
    <div className="App">
      <div className="App__container">
        <Plan></Plan>
        <div className='buttons__plan'>
          <Button color="success">Agregar Comida</Button>;
          <Button color="danger" onClick={getPDF}>Descargar</Button>;
        </div>
        <a id="editor"></a>
      </div>
    </div>
  )
}

export default App
