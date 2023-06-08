import './App.css';
import data from './components/data'
import Question from './components/Question';

function App() {
  return (
    <main>
    <div className="container">
      <header>
        <h1>Question and Answer about Login</h1>
      </header>
      <section>
        {data.map((item) => {
          return (
            <Question key={item.id} item={item} />
          )
        })}
      </section>
    </div>
  </main>
  );
}

export default App;
