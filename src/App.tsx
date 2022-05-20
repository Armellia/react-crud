import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import BookList from './components/book.list';
import BookAdd from './components/book.add';
import BookEdit from './components/book.edit';
function App() {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
          <Route path='*' element={<BookList/>} />
            <Route path='/' element={<BookList/>} />
            <Route path="/add" element={<BookAdd/>} />
            <Route path="/edit/:id" element={<BookEdit/>} />
          </Routes>
        </div>
      </div>
    );
}

export default App;
