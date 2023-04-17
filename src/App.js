import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import { Home, Category, ProductView, Search, Cart } from "./pages/index";
// components
import Sidebar from "./compnents/Sidebar/Sidebar";
import Navbar from "./compnents/Navbar/Navbar";
import Footer from "./compnents/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <Navbar />
          <Sidebar />
          
          <Routes>
            <Route path = "/" element = {<Home />}/>

            <Route path = '/product/:id' element= {<ProductView />}/>

            <Route path = '/category/:category' element= {<Category />}/>

            <Route path = '/cart' element= {<Cart />}/>
            <Route path = '/login' element= {<Login />}/>
            <Route path = '/register' element= {<Register />}/>

            {/* search product */}

            <Route path = '/search/:searchTerm' element= {<Search />}/>


          </Routes>
          {/* <Footer /> */}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
