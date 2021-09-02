import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Pagination from './components/pagination/pagination';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Pagination totalRecords={15} pageLimit={ 6 }/>
    </>
  );
}

export default App;
