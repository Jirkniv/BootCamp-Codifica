function getNomesOrdenadosPorPreco(produtos) {
  return [...produtos]
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 }
];
console.log(getNomesOrdenadosPorPreco(produtos)); 


function agruparVendasPorCliente(vendas) {
  return vendas.reduce((agrupado, venda) => {
    agrupado[venda.cliente] = (agrupado[venda.cliente] || 0) + venda.total;
    return agrupado;
  }, {});
}

const vendas = [
  { cliente: "Ana", total: 250 },
  { cliente: "Carlos", total: 150 },
  { cliente: "Ana", total: 100 }
];
console.log(agruparVendasPorCliente(vendas)); 


function paresParaObjeto(pares) {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor;
    return obj;
  }, {});
}

  function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [["nome", "João"], ["idade", 30]];
console.log(paresParaObjeto(pares)); 

const pessoa = { nome: "Maria", profissao: "Engenheira" };
console.log(objetoParaPares(pessoa)); 
