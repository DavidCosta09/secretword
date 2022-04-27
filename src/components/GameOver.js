import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Fim de jogo!</h1>
        <h2>A sua pontuação foi: <soan>{score}</soan></h2>
        <button onClick={retry}>Resetar jogo</button>    
    </div>
  )
}

export default GameOver