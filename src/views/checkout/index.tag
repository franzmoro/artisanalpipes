<checkout>
  <header selected={'/checkout'}></header>
  <ul class='checkout-items'>
    <li each='{item in basket}'>{item.id} - {item.quantity}</li>
  </ul>
  <script>
    this.basket = [];
    if (typeof Storage !== 'undefined') {
      const basket = JSON.parse(localStorage.getItem('basket') || '{}');
      this.basket = Object.keys(basket).reduce(
        (accum, id) => accum.concat([{ id, quantity: basket[id] }]),
        []
      );
    }
  </script>
</checkout>
