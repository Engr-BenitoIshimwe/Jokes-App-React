import Joke from './Joke';
import './style.css';
import jokeData from './jokeData';

function App() {
  const jokeElements = jokeData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div className='container'>{jokeElements}</div>;
}

export default App;
