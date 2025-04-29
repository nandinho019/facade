# Sistema de Pedidos de Lanches

Este projeto é uma implementação simples de um sistema de pedidos de lanches utilizando o padrão de projeto **Facade** em JavaScript.

## 📌 Objetivo

O objetivo deste código é simplificar o processo de realizar um pedido de lanche, encapsulando diversas operações (verificação de ingredientes, pagamento e preparo do lanche) em uma única interface de alto nível.

## 🧩 Estrutura do Código

### 1. `Cozinha`
Responsável por preparar o lanche solicitado.

```javascript
class Cozinha {
  prepararLanche(tipo) {
    console.log(`Preparando o lanche: ${tipo}`);
  }
}
```

### 2. `Cozinha`
Verifica se há ingredientes disponíveis para o tipo de lanche solicitado.
```javascript
class Estoque {
  verificarIngredientes(tipo) {
    console.log(`Verificando ingredientes para: ${tipo}`);
    return true; 
  }
}
```


### 3. `Pagamento`
Processa o pagamento do pedido.
```javascript
class Pagamento {
  processar(valor) {
    console.log(`Processando pagamento de R$${valor.toFixed(2)}`);
    return true; // Simulação de sucesso
  }
}

```


### 4. `PedidoFacade`
Classe principal que utiliza as classes acima para realizar um pedido de forma simplificada.
```javascript
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

```
### Exemplo de Uso

```javascript
const pedido = new PedidoFacade();
pedido.fazerPedido("X-Bacon", 18.90);


```
### Saída Esperada

```yaml
Iniciando pedido...
Verificando ingredientes para: X-Bacon
Processando pagamento de R$18.90
Preparando o lanche: X-Bacon
Pedido finalizado com sucesso!


```
# 📚 Padrão de Projeto Utilizado
- Este projeto utiliza o padrão Facade, que tem como objetivo fornecer uma interface unificada para um conjunto de interfaces em um subsistema. Este padrão facilita o uso e reduz a complexidade da interação com vários componentes.
