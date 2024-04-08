import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Success({dadosDaApi}){
    return(

        <h1>{JSON.stringify({dadosDaApi})}</h1>

    )
}

export default Success;