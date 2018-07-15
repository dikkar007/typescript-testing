/*
Node v8.9.0

$ node popular_pizzas.js
Most popular pizza is: pepperoni

*/

const http = require('http');

fetchPizzas()
  .then(reducePizzasToHash)
  .then(countPizzas)
  .then(sortPizzas)
  .then(getPopularPizza)
  .then(popularPizza => console.log(`Most popular pizza is: ${popularPizza}`))

function fetchPizzas() {
  return new Promise(function (resolve, reject) {
    http.get('http://files.olo.com/pizzas.json')
      .on('error', (e) => {
        return reject(`Got error: ${e.message}`)
      })
      .on('response', res => {
        const { statusCode } = res;

        // check for errors
        let error;
        if (statusCode !== 200) {
          error = new Error(`Request Failed.\n Status Code: ${statusCode}`);
        }
        if (error) {
          console.error(error.message);
          // consume response data to free up memory
          res.resume();
          return reject(error.message);
        }

        // concat response stream
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });

        // parse response
        res.on('end', () => {
          try {
            return resolve(JSON.parse(rawData));
          } catch (e) {
            console.error(e.message);
          }
        });
      });
  })
}

function reducePizzasToHash(pizzas) {
  return pizzas.map(({ toppings: toppings }) => {
    return Buffer.from(toppings.join(", ")).toString('base64')
  })
}

function countPizzas(pizzaHashes) {
  return pizzaHashes.reduce((acc, currentPizzaHash) => Object.assign(acc, { [currentPizzaHash]: (acc[currentPizzaHash] | 0) + 1 }), {})
}

function sortPizzas(pizzaCounts) {
  return Object.keys(pizzaCounts).sort(function (a, b) { return pizzaCounts[b] - pizzaCounts[a] })
}

function getPopularPizza(pizzas) {
  return Buffer.from(pizzas[1], 'base64').toString('ascii')
}