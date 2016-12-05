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
    this.basket = {};
    this.isInBasket = false;
    if (typeof Storage !== 'undefined') {
      this.basket = JSON.parse(localStorage.getItem('basket') || '{}');
      const quantity = this.basket[opts.identifier] || 0;
      this.isInBasket = (quantity > 0);
    }
    this.toggleInfo = () => {
      this.carousel.querySelector('#itemInfo').classList.toggle('hide');
      this.update();
    };
    this.addToBasket = () => {
      const quantity = this.basket[opts.identifier] || 0;

      if (quantity === 0) {
        this.basket[opts.identifier] = 1;
        localStorage.setItem('basket', JSON.stringify(this.basket));
        this.isInBasket = true;
        this.update();
      } else {
        window.alert('Sorry, we only have 1 unit for this item');
      }
    };
    this.removeFromBasket = () => {
      const quantity = this.basket[opts.identifier] || 0;

      if (quantity === 1) {
        delete this.basket[opts.identifier];
        localStorage.setItem('basket', JSON.stringify(this.basket));
        this.isInBasket = false;
        this.update();
      } else {
        throw new Error('should not have been possible to remove from Basket')
      }
    };
  </script>
</itemContainer>
