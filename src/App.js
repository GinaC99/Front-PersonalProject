import './App.css';
import Loader from './Components/Loader/Loder';
const App = () => {
 return(
   <>
    <h1>Binevenido mi nombre es  Gina Paola Cortes, para continuar necesita estar registrado</h1>
    <p>Para ingresar click <a href='/login'>aqui</a></p>
    <p>Para registrarse click <a href='/register'>aqui</a>
    </p>
    <div>
      <Loader/>
    </div>
   </>
 )
}

export default App;
