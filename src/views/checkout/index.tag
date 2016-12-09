<checkout>
  <header selected={'/checkout'}></header>
  <div class='header-separator'></div>
  <h1>YOUR BASKET</h1>
  <ul class='checkout-items'>
    <li each='{item in basket}'
      >
      <itemRecap
        identifier='{item.id}'
        quantity='{item.quantity}'
        getBasket='{getBasket}'
        updateBasket='{updateBasket}'
        >
      </itemRecap>
    </li>
  </ul>
  <script>
    const formatBasket = rawBasket => Object.keys(rawBasket).reduce(
      (accum, id) => accum.concat([{ id, quantity: rawBasket[id] }]),
      []
    );
    this.getBasket = () => JSON.parse(localStorage.getItem('basket') || '{}');
    this.updateBasket = newBasket =>
      localStorage.setItem('basket', JSON.stringify(newBasket));

    if (typeof Storage !== 'undefined') {
      this.basket = formatBasket(this.getBasket());
    }
  </script>
</checkout>
