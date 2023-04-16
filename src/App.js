import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import { Home, Category, ProductView, Search, Cart } from "./pages/index";
// components
import Sidebar from "./compnents/Sidebar/Sidebar";
import Header from "./compnents/Header/Header";
import Footer from "./compnents/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Sidebar />
          
          <Routes>
            <Route path = "/" element = {<Home />}/>

            <Route path = '/product/:id' element= {<ProductView />}/>

            <Route path = '/category/:category' element= {<Category />}/>

            <Route path = '/cart' element= {<Cart />}/>

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
