import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <div><Navbar /></div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <ProductList />
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
