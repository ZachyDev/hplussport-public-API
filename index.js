fetch('https://hplussport.com/api/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err =>console.log('err'))