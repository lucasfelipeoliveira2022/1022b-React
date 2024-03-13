//componente React
//oq é um componente? R: É uma função q retorna JSX - JavaScript XML
import'./App.css'
import MeuComponente from './componentes/MeuComponente.tsx'
function App() {
  let nome ="Lucas Felipe"
  let sobrenome = "Oliveira Lima"
  //let?
  //var?
  //const?
  return (
    <>
    <MeuComponente>
    </MeuComponente>
      <h1 className="nome">Nome: {nome}</h1>
      <p className="sobrenome">{sobrenome}</p>
      </>
  ) //Retorna JSX - JavaScript XML
}
export default App
