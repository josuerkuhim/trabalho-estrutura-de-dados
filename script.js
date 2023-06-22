
//pilha
const pilha = [];
      const pilhaElemento = document.getElementById("pilha");

      function inserirNumeroAleatorioPilha() {
        const numero = Math.floor(Math.random() * 100);
        pilha.push(numero);
        atualizarPilha();
      }

      function inserirDezNumerosAleatoriosPilha() {
        for (let i = 0; i < 10; i++) {
          const numero = Math.floor(Math.random() * 100);
          pilha.push(numero);
        }
        atualizarPilha();
      }

      function removerUltimo() {
        pilha.pop();
        atualizarPilha();
      }

      function removerDezNumerosAleatoriosPilha() {
        for (let i = 0; i < 10; i++) {
          pilha.pop();
        }
        atualizarPilha();
      }

      function removerTodos() {
        while (pilha.length > 0) {
          pilha.pop();
        }
        atualizarPilha();
      }

      function atualizarPilha() {
        pilhaElemento.innerHTML = pilha.join(", ");
      }

//fila
      const fila = [];
      const filaElemento = document.getElementById("fila");

      function inserirNumeroAleatorioFila() {
        const numero = Math.floor(Math.random() * 100);
        fila.push(numero);
        atualizarFila();
      }

      function inserirDezNumerosAleatoriosFila() {
        for (let i = 0; i < 10; i++) {
          inserirNumeroAleatorioFila();
        }
      }

      function removerPrimeiroDaFila() {
        fila.shift();
        atualizarFila();
      }

      function removerPrimeirosDez() {
        fila.splice(0, 10);
        atualizarFila();
      }

      function removerTudoDaFila() {
        while (fila.length > 0) {
          fila.pop();
        }
        atualizarFila();
      }

      function atualizarFila() {
        filaElemento.innerHTML = fila.join(", ");
      }

//arvore
      class Node {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
        }
      }

      class BinaryTree {
        constructor() {
          this.root = null;
        }

        insert(value) {
          const newNode = new Node(value);

          if (!this.root) {
            this.root = newNode;
          } else {
            this.insertNode(this.root, newNode);
          }
        }

        insertNode(node, newNode) {
          if (newNode.value < node.value) {
            if (!node.left) {
              node.left = newNode;
            } else {
              this.insertNode(node.left, newNode);
            }
          } else {
            if (!node.right) {
              node.right = newNode;
            } else {
              this.insertNode(node.right, newNode);
            }
          }
        }

        remove(value) {
          this.root = this.removeNode(this.root, value);
        }

        removeNode(node, value) {
          if (!node) {
            return null;
          }

          if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
          } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
          } else {
            if (!node.left && !node.right) {
              node = null;
              return node;
            }

            if (!node.left) {
              node = node.right;
              return node;
            } else if (!node.right) {
              node = node.left;
              return node;
            }

            const minNode = this.findMinNode(node.right);
            node.value = minNode.value;
            node.right = this.removeNode(node.right, minNode.value);
            return node;
          }
        }

        findMinNode(node) {
          if (!node.left) {
            return node;
          } else {
            return this.findMinNode(node.left);
          }
        }

        removeValue() {
          const value = parseInt(prompt("Insira um valor para remover da árvore:"));
          this.remove(value);
          atualizarArvore();
        }
      }

      const arvore = new BinaryTree();
      const arvoreElemento = document.getElementById("arvore");

      function inserirNumeroAleatorioArvore() {
        const numero = Math.floor(Math.random() * 100);
        arvore.insert(numero);
        atualizarArvore();
      }

      function inserirDezNumerosAleatoriosArvore() {
        for (let i = 0; i < 10; i++) {
          const numero = Math.floor(Math.random() * 100);
          arvore.insert(numero);
        }
        atualizarArvore();
      }

      function removerNumeroArvore() {
        arvore.removeValue();
      }

      function removerTodosArvore() {
        arvore.root = null;
        atualizarArvore();
      }

      function atualizarArvore() {
        arvoreElemento.innerHTML = "";
        displayTree(arvore.root, arvoreElemento);
      }

      function displayTree(node, element) {
        if (node) {
          element.innerHTML += `${node.value} `;
          displayTree(node.left, element);
          displayTree(node.right, element);
        }
      }

//lista
      class Lista {
        constructor() {
          this.items = [];
        }

        add(value) {
          this.items.push(value);
        }

        remove(value) {
          const index = this.items.indexOf(value);
          if (index !== -1) {
            this.items.splice(index, 1);
          }
        }

        display() {
          return this.items.join(", ");
        }
      }

      const lista = new Lista();
      const listaElemento = document.getElementById("lista");

      function inserirNumeroLista() {
        const numero = parseInt(prompt("Digite um número para adicionar à lista:"));
        lista.add(numero);
      }

      function removerNumeroLista() {
        const numero = parseInt(prompt("Digite um número para remover da lista:"));
        lista.remove(numero);
      }

      function exibirLista() {
        listaElemento.innerHTML = lista.display();
      }