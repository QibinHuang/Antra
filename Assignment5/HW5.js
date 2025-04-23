const pokemonList = ['pikachu', 'bulbasaur', 'charmander'];
const urls = pokemonList.map(name => `https://pokeapi.co/api/v2/pokemon/${name}`);

// 1. Promise.all
Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(data => {
    console.log('[Promise.all]');
    data.forEach(p => console.log(p.name, p.height));
  })
  .catch(err => {
    console.error('[Promise.all] Error:', err);
  });

// 2. Promise.allSettled
Promise.allSettled(urls.map(url => fetch(url).then(res => res.json())))
  .then(results => {
    console.log('\n[Promise.allSettled]');
    results.forEach((result, i) => {
      if (result.status === 'fulfilled') {
        console.log(pokemonList[i], 'ok');
      } else {
        console.log(pokemonList[i], 'fail');
      }
    });
  });

// 3. Promise.race
Promise.race(urls.map(url => fetch(url).then(res => res.json())))
  .then(first => {
    console.log('\n[Promise.race] First back:', first.name);
  })
  .catch(err => {
    console.error('[Promise.race] Error:', err);
  });

// 4. Promise.any
Promise.any(urls.map(url => fetch(url).then(res => res.json())))
  .then(success => {
    console.log('\n[Promise.any] First success:', success.name);
  })
  .catch(err => {
    console.error('[Promise.any] All failed:', err);
  });
