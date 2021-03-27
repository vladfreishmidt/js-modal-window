const fruits = [
  {id: 1, title: 'Apples', price: 20, img: 'https://www.seekpng.com/png/detail/153-1537893_red-apples-png-maa-com-fundo-branco.png'},
  {id: 2, title: 'Oranges', price: 30, img: 'https://lavbottle.com.ua/wp-content/uploads/2017/10/Orange-PNG-Image.png'},
  {id: 3, title: 'Mango', price: 40, img: 'http://pngimg.com/uploads/mango/mango_PNG9168.png'}
];

const toHTML = fruit => `
  <div class="col">
    <div class="card">
      <img src="${fruit.img}"
        class="card-img-top" style="height: 300px;" alt="${fruit.title}">
      <div class="card-body">
        <h5 class="card-title">${fruit.title}</h5>
        <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
        <a href="#" class="btn btn-danger">Удалить</a>
      </div>
    </div>
  </div>`;

function render() {
  const html = fruits.map(toHTML).join('');
  document.querySelector('#fruits').innerHTML = html;
}

render();

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Закрыть', 
      type: 'primary', 
      handler() {
        priceModal.close()
      }
    },
  ],
});
 
document.addEventListener('click', event =>  {
  event.preventDefault();

  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  

  if (btnType === 'price') {
    const fruit = fruits.find(f => f.id === id);

    priceModal.setContent(`
      <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
    `)

    priceModal.open();

    console.log(fruit);
  }
});