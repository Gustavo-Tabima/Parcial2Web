
import { useParams } from "react-router-dom";
import container from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/detallesBandas.css";
const { useEffect, useState } = require("react");
function DetallarBandas(props){
    const params = useParams();

    const [bandas,setBandas] = useState({});

    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL).then(data => data.json()).then(data => {
            setBandas(data);
        })
    }, []);


    
return(
<div class="container">
<div class="card" style="width: 18rem;">
  <img src={bandas.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{bandas.name}</h5>
    <p class="card-text">{bandas.description}</p>
   
  </div>
</div>

</div>






)




}


export default DetallarBandas;