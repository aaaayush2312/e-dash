import Nav from './components/nav';
import Footer from './components/footer';
import Signup from './components/signup';
import './App.css';
import Login from './components/login';
import AddProduct from './components/Addproduct';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import ProductList from './components/ProductlList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
       
          <Route element={<PrivateComponent />}>
       
        <Route path="/"        element={<ProductList />} />
        <Route path="/add"     element={ <AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/logout"  element={<h1> Logout components</h1>} />
        <Route path="/profile" element={<h1>Profile components</h1>} />
        </Route>
        <Route path="/Signup"  element={<Signup />}/>
        <Route path="/login"   element={<Login />}/>

      </Routes>
    </BrowserRouter>
    <Footer />
   
    </div>
  );
}

export default App;
