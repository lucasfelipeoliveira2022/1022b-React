//componente React
//oq é um componente? R: É uma função q retorna JSX - JavaScript XML
import'./App.css'
function App() {
  let nome ="Lucas Felipe"
  let sobrenome = "Oliveira Lima"
  //let?
  //var?
  //const?
  return (
    <div>
      <h1 className="nome">Nome: {nome}</h1>
      <p className="sobrenome">{sobrenome}</p>
      </div>
  ) //Retorna JSX - JavaScript XML
}
export default App
