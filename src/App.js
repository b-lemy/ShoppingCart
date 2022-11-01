import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/home";
import Cart from "./Components/cart";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </div>
    )}

export default App;
