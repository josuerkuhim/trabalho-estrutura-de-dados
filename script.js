
//pilha
const pilha = [];
      const pilhaElemento = document.getElementById("pilha");

      function insertPilha() {
        const numero = Math.floor(Math.random() * 100);
        pilha.push(numero);
        loadPilha();
      }

      function removePilha() {
        pilha.pop();
        loadPilha();
      }

      function removeAllPilha() {
        while (pilha.length > 0) {
          pilha.pop();
        }
        loadPilha();
      }

      function loadPilha() {
        pilhaElemento.innerHTML = pilha.join(", ");
      }

//fila
      const fila = [];
      const filaElemento = document.getElementById("fila");

      function insertFila() {
        const numero = Math.floor(Math.random() * 100);
        fila.push(numero);
        loadFila();
      }

      function removeFirstFila() {
        fila.shift();
        loadFila();
      }

      function removeAllFila() {
        while (fila.length > 0) {
          fila.pop();
        }
        loadFila();
      }

      function loadFila() {
        filaElemento.innerHTML = fila.join(", ");
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

      function insertLista() {
        const numero = parseInt(prompt("Digite um número para adicionar à lista:"));
        lista.add(numero);
      }

      function removeLista() {
        const numero = parseInt(prompt("Digite um número para remover da lista:"));
        lista.remove(numero);
      }

      function exibirLista() {
        listaElemento.innerHTML = lista.display();
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
          loadArvore();
        }
      }

      const arvore = new BinaryTree();
      const arvoreElement = document.getElementById("arvore");

      function insertArvore() {
        const numero = Math.floor(Math.random() * 100);
        arvore.insert(numero);
        loadArvore();
      }

      function removeArvore() {
        arvore.removeValue();
      }

      function removeAllArvore() {
        arvore.root = null;
        loadArvore();
      }

      function loadArvore() {
        arvoreElement.innerHTML = "";
        displayTree(arvore.root, arvoreElement);
      }

      function displayTree(node, element) {
        if (node) {
          element.innerHTML += `${node.value} `;
          displayTree(node.left, element);
          displayTree(node.right, element);
        }
      }