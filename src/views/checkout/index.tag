<checkout>
  <header selected={'/checkout'}></header>
  <div class='header-separator'></div>
  <checkoutSubHeader stage={opts.stage}></checkoutSubHeader>
  <div class='checkoutHeader-separator'></div>
  <h1>YOUR BASKET</h1>
  <a href='/details' class='proceed'>Proceed to Billing</a>
  <ul class='checkout-items'>
    <li each='{item in basket}'
      >
      <itemRecap identifier='{item.id}' info={item.info}></itemRecap>
    </li>
  </ul>
  <script>
    const formatBasket = rawBasket => Object.keys(rawBasket).reduce(
      (accum, id) => accum.concat([
        { id, info: rawBasket[id] }
      ]),
      []
    );
    this.getBasket = () => JSON.parse(localStorage.getItem('basket') || '{}');

    if (typeof Storage !== 'undefined') {
      this.basket = formatBasket(this.getBasket());
    }
  </script>
</checkout>
