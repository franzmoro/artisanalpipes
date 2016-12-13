<titleActions>
  <div class='pipes-titleDetails'>
    <div class='pipes-titleDetailsContainer'>
      <span class='pipes-itemTitle'>
        {opts.name}
      </span>
      <span class='pipes-itemDetails'>
        <span class='actionIcon addToBasket {hide:isInBasket} pointer'
          onclick='{addToBasket}'
          />
        <span class='actionIcon inBasket {hide:!isInBasket} pointer'
          onclick='{removeFromBasket}'
          />
        <span class='actionIcon showInfo pointer' onclick='{toggleInfo}' />
        <span class='pipes-price'>
          <span class='unit'>{opts.priceunit}</span>
          <span class='quantity'> {opts.price.toLocaleString()}</span>
        </span>
      </span>
    </div>
  </div>
  <script>
    this.toggleInfo = () => {
      this.carousel.querySelector('#itemInfo').classList.toggle('hide');
      this.update();
    };

    const getBasket = () => JSON.parse(localStorage.getItem('basket') || '{}');
    const isIn = id => Boolean(getBasket()[id]);
    const basketAction = (alreadyIn) => {
      const basket = getBasket();
      const isInBasket = isIn(opts.identifier);

      if (!isInBasket) {
        basket[opts.identifier] = opts.data;
        this.isInBasket = true;
      } else {
        delete basket[opts.identifier];
        this.isInBasket = false;
      }
      localStorage.setItem('basket', JSON.stringify(basket));
      this.update();
    };
    this.addToBasket = basketAction.bind(this, false);
    this.removeFromBasket = basketAction.bind(this, true);

    if (typeof Storage !== 'undefined') {
      this.isInBasket = isIn(opts.identifier);
    }
  </script>
</titleActions>
