import { useState  } from 'react';
import './app.css';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMenesagem] = useState('Insira seus dados no campo acima para descobrir seu IMC ')

  function calcularIMC() {
    const alutraUsuario = altura / 100;
    const imc = peso / (alutraUsuario * alutraUsuario);
    
    if (imc < 18.6) {
      setMenesagem(`Você está abaixo do peso! Seu IMC:  ${imc.toFixed(2)} `)
    } else if (imc >= 18.6 && imc < 24.9){
      setMenesagem(`Peso ideal! Seu IMC:  ${imc.toFixed(2)} `)
    } else if(imc >= 24.9 && imc < 34.9) {
      setMenesagem(`Você está levente acima do peso! Seu IMC ${imc.toFixed(2)} `)
    } else {
      setMenesagem(`Cuidado Obesidade! Seu IMC ${imc.toFixed(2)} `)
    }

  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
          type= "text" 
          placeholder="Peso em (KG) Ex: 90"
          value={peso}
          onChange={ (valorPeso) => setPeso(valorPeso.target.value)}
        />  
        <input 
          type= "text" 
          placeholder="Sua altura em cm Ex: 180"
          value={altura}
          onChange={ (valorAltura) => setAltura(valorAltura.target.value)}
        />  

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <p> {mensagem} </p>
    </div>
  )
}


