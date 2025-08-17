// import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoItems';
import Games from './components/Games';

const list = ['Yin Yoga', 'Make Dinner', 'Play FF16', 'Watch Extras Espanol', 'Continue Udemy Asp.NET core', 'Watch Harry Potter'];

const mygames = [ {id: 1, name: "Final Fantasy 16", year: 2023, genre: "RPG", publisher: "Square Enix", protaganist: "Clive Rosfield"},
                {id: 2, name: "Life is Strange", score: 2015, genre: "Adventure", publisher: "Square Enix", protraganist: "Max Claufield" },
                {id: 3, name: "Assassin's Creed - Ezio Collections", released: 2009, genre: "Action-adventure", publisher: "Ubisoft", protaganist: "Ezio Auditore"}
 ];

function App() {
  return (
    <div>
      <ToDoList label={list} />
      {/* gameslist (label) name has to be the same in the App.js and the component file */ }
      <Games gameslist={mygames} />

      <ul>
        <h3>My games from App.js</h3>
        {mygames.map ((game) => (
                    <li key={game.id}>
                        {game.name}<br />
                        {game.publisher}<br />
                        {game.year}
                    </li>
        ))}

      </ul>
    </div>
  );
}

export default App;
