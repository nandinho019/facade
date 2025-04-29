
class Cozinha {
    prepararLanche(tipo) {
      console.log(`Preparando o lanche: ${tipo}`);
    }
  }
  
  class Estoque {
    verificarIngredientes(tipo) {
      console.log(`Verificando ingredientes para: ${tipo}`);
      return true; 
    }
  }
  
  class Pagamento {
    processar(valor) {
      console.log(`Processando pagamento de R$${valor.toFixed(2)}`);
      return true; 
    }
  }
  
  class PedidoFacade {
    constructor() {
      this.cozinha = new Cozinha();
      this.estoque = new Estoque();
      this.pagamento = new Pagamento();
    }
  
    fazerPedido(tipo, valor) {
      console.log("Iniciando pedido...");
  
      if (!this.estoque.verificarIngredientes(tipo)) {
        console.log("Ingredientes insuficientes.");
        return;
      }
  
      if (!this.pagamento.processar(valor)) {
        console.log("Pagamento recusado.");
        return;
      }
  
      this.cozinha.prepararLanche(tipo);
      console.log("Pedido finalizado com sucesso!");
    }
  }
  
  const pedido = new PedidoFacade();
  pedido.fazerPedido("X-Bacon", 18.90);
  