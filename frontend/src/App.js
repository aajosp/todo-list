import logo from './logo.svg';
import './App.scss';

// imported components
import Notes from './components/Notes.js';
import TodoList from './components/TodoList.js';
import SideNavbar from './components/SideNavbar.js';

function App() {
  return (
    <div className="App">
      <SideNavbar />
      {/* <TodoList /> 
      <Notes /> */}
    </div>
  );
} 

export default App;
