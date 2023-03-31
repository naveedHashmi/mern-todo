import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg'

function App() {
  return (
    <Router>
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Routes>
            <Route path="/" exact element={<TodoList />}></Route>
            <Route path="/edit/:id" element={<EditTodo />}></Route>
            <Route path="/create" element={<CreateTodo />}></Route>
          </Routes>
      </div>

    </Router>
  );
}

export default App;
