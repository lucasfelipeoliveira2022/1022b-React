
import './MeuComponente.css'
//Criar o nosoo primeiro componente.
//Esse componente sera o compónete do nosso HEADER 
// No header temos 300px de altura ele é do tamanho da tela
// Ela tem uma borda amarela de 2px solida
// Dentro da tag header nos temos uma div com texto "logo" de
//           tamanho 200 x 200px centralizada na vertical a 30 px da lateral esquerda cor vermelha

function MeuComponente(){
    let variavel= "Logo"
    return (
        <header className='header'><div className='logo'>{variavel}</div></header>
    )
} 

export default MeuComponente;