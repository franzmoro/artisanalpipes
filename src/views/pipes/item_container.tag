<itemContainer>
  <div class='pipes-itemContainer'>
    <div class='pipes-titleDetails'>
      <div class='pipes-titleDetailsContainer'>
        <span class='pipes-itemTitle'>
          {opts.name}
        </span>
        <span class='pipes-itemDetails'>
          <span class='actionIcon addToBasket pointer' onclick='{addToBasket}' />
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
    this.toggleInfo = () => {
      this.carousel.querySelector('#itemInfo').classList.toggle('hide');
      this.update();
    };
    this.addToBasket = () => {
      console.log('added to basket');
    };
  </script>
</itemContainer>
