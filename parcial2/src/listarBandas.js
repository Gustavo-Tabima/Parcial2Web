
import { useParams } from "react-router-dom";
import container from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/detallesBandas.css";
const { useEffect, useState } = require("react");
function ListarAlasBandas(props){
    const params = useParams();

    const [bandas,setBandas] = useState({});

    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL).then(data => data.json()).then(data => {
            setBandas(data);
        })
    }, []);


    
return(

<div className ="container">



<div class="header">
  <a href="#default" class="logo">Aqui iran las notas </a>
  <div class="header-right">

    <h1>Bandas Musicales</h1>
  </div>
</div>


<div class="DivCentral">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">País</th>
      <th scope="col">Género</th>
      <th scope="col">Fundación</th>
    </tr>
  </thead>
  <tbody>
  {Object.keys(bandas).map(lasBandas => 
    
  <tr>
  <td>{lasBandas.id}</td>
  <td>{lasBandas.name}</td>
  <td>{lasBandas.country}</td>
  <td>{lasBandas.genre}</td>
  <td>{lasBandas.description}</td>
 </tr>
    
    )}
   
  </tbody>
</table>


</div>


</div>






)




}


export default ListarAlasBandas;