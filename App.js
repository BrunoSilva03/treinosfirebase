import { useState } from 'react'
import { db } from './FirebaseConnection';
import { doc, setDoc} from 'firebase/firestore';
import './App.css';

function App() {
  const [time, setTime] = useState('');
  const [jogadores, setJogadores] = useState([]);

async function handleAdd() {
  await  setDoc(doc(db, "clubes", time), {
    jogadores: jogadores,
  })
  .then(() => {
    console.log("DADOS REGISTRADOS COM SUCESSO!!!");
    setTime('');
    setJogadores([]);
  })
  .catch((error) => {
    console.log(error);
  })
}
  return (
    <div className="App">
     <h1>Treinando banco de dados firebase em React</h1>
     <label>Time:</label>
     <input
     placeholder="Nome do time"
     value={time}
     onChange={(e) => setTime(e.target.value)}></input>
     <br/><br/><br/>

    <label>Jogadores:</label>
    <br/>
    <textarea
    type="text"
    placeholder="Digite os jogadores"
    value={jogadores}
    onChange={ (e) => setJogadores(e.target.value)}></textarea>
     
     <button onClick={handleAdd}>Cadastrar</button>
    </div>
  );
}

export default App;
