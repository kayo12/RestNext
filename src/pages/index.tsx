import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  
    const clientes = [
      new Cliente('Ana', 34, '1'),
      new Cliente('Bia', 45, '2'),
      new Cliente('Carlos', 23, '3'),
      new Cliente('Pedro', 54, '4') 
    ]
  
    function clienteSelecionado(cliente: Cliente) {
      console.log(cliente.nome)
    }
    function clienteExcluido(cliente: Cliente) {
      console.log(`Excluir... ${cliente.nome}`)
    }

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500  to-blue-600 `}>
     
      <Layout titulo="Cadastro de conteudo" >
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
