<itemContainer>
  <div class='pipes-itemContainer'>
    <div class='pipes-titleDetails'>
      <div class='pipes-titleDetailsContainer'>
        <span class='pipes-itemTitle'>
          {opts.name}
        </span>
        <span class='pipes-itemDetails'>
          <span class='actionIcon addToBasket {hide:isInBasket} pointer'
            onclick='{addToBasket}' />
          <span class='actionIcon inBasket {hide:!isInBasket} pointer'
            onclick='{removeFromBasket}' />
          <span class='actionIcon showInfo pointer' onclick='{toggleInfo}' />
          <span class='pipes-price'>
            <span class='unit'>{opts.priceunit}</span>
            <span class='quantity'> {opts.price.toLocaleString()}</span>
          </span>
        </span>
      </div>
    </div>
    <itemCarousel
      name='carousel'
      identifier={opts.identifier}
      name={opts.name}
      price={opts.price}
      unit={opts.unit}
      description={opts.description}
      numimages={opts.numimages}
      >
    </itemCarousel>
  </div>
  <script>
    this.getBasket = () => JSON.parse(localStorage.getItem('basket') || '{}');
    this.getQuantity = id => this.getBasket()[id] || 0;
    this.updateBasket = newBasket =>
      localStorage.setItem('basket', JSON.stringify(newBasket));
    this.getBasketInfo = () => ({
      basket: this.getBasket(),
      quantity: this.getQuantity(opts.identifier)
    });

    this.toggleInfo = () => {
      this.carousel.querySelector('#itemInfo').classList.toggle('hide');
      this.update();
    };
    const basketAction = (action, quantityToCheck, movingInBasket) => {
      const basketInfo = this.getBasketInfo();
      const basket = basketInfo.basket;
      const quantity = basketInfo.quantity;

      if (quantity === quantityToCheck) {
        action(basket);
        this.updateBasket(basket);
        this.isInBasket = movingInBasket;
        this.update()
      } else {
        const oper = movingInBasket ? 'add item to' : 'remove item from'
        throw new Error(`should not have been possible to ${oper} basket`);
      }
    };
    this.addToBasket = basketAction.bind(
      this,
      basket => basket[opts.identifier] = 1,
      0,
      true
    );
    this.removeFromBasket = basketAction.bind(
      this,
      basket => delete basket[opts.identifier],
      1,
      false
    );
    if (typeof Storage !== 'undefined') {
      this.isInBasket = this.getBasketInfo().quantity > 0;
    }
  </script>
</itemContainer>
