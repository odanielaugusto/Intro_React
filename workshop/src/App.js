import React from 'react';
import Input from  './components/Input';
import Button from "./components/Button";
import logo from "./assets/logo.svg";
import wpp from "./assets/wpp.svg"
import github from "./assets/github.svg"

function App() {
  return (

    <div>
    <div className= "flex flex-col min-h-screen w-full h-full items-center justify-center gap-3">
      <a
        href="https://inteliblockchain.co"
        target="_blank"
        className="w-4/5 md: w-2/3 lg:w-1/2"
        >
          <img
              alt="InteliBlockchain"
              src={logo}
              width={256}
              height={128}
              className="w-full mb-4"
              />
        </a>

        <div className="felx flex-col bg-[#353464] w-3/6 rounded-md text-white px-4 py-8">
        <p className="text-x1 mb-4">
          Receba a sua Proof-Of-Attandance NFT

        </p>
        <p>
          Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.
        </p>
        <p className="flex flex-row">
          Ainda não tem uma carteira?Acesse o link e crie a sua já: {" "}</p>
          <a
          target= "_blank"
          href="http://metamask.io/download/"
          className="flex text-blue-500 hover:underline"
          >
          
            CLique aqui

          </a>
          <p>

          </p>
      <form className ="flex flex-col mt-8">
          <Input description="Esse nome será gravado no NFT para provar sua presença"
          label="Seu nome"
          placeholder="Digite seu nome"
          type="text"/>

          <Input description="Email para receber novidades"
          label="Email"
          placeholder="blockchain@inteli.com.br"
          type="text"/>

          <Input description="Carteira para receber NFT"
          label="Wallet"
          placeholder="0x00...0000"
          type="text"
          />
          <Button type="submit" name= "gerar NFT"/>
          </form>
          </div>
      

        </div>
      <div className='flex flex-col content-center items-center'>
      <div className = "mt-8">
        <a
        href="https://github.com/InteliBlockchain/onboarding"
        target="_blank"
        >
          <span className="text-sm text-gray-400 felx flex-row">
            Todo o código pode ser encontrado aqui:{" "}
              <image alt= "Github" src ={github} width={16} height={16}/>
          </span>
        </a>
        </div>
        

      <div className="mt-4">
        <a
        href="https://chat.whatsapp.com/EoP5wbGPujg8vpG9f6KNWz"
        target="_blank"
        >
          <span className="text-sm text-gray-400 flex flex-row">
            Caso tenha alguma dúvida: {" "}
            <img alt = "Whatsapp" src = {wpp} width ={16} height ={16}/>
          </span>
        </a>
        </div>
   </div>
   </div>
   
  );
  
}

export default App;
