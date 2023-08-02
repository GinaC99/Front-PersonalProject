import App from "./App";
import Login from "./Components/Login-Register/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./Components/Login-Register/Register";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;