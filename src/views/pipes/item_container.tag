<itemContainer>
  <div class='pipes-itemContainer'>
    <div class='pipes-titleDetailsContainer'>
      <span class='pipes-itemTitle'>
        {opts.name}
      </span>
      <span class='pipes-itemDetails'>
        <span class='actionIcon addToBasket pointer' onclick='{addToBasket}' />
        <span class='actionIcon showInfo pointer' onclick='{showInfo}' />
        {opts.priceunit} {opts.price.toLocaleString()}
      </span>
    </div>
    <itemCarousel
      identifier={opts.identifier}
      name={opts.name}
      price={opts.price}
      unit={opts.unit}
      description={opts.description}
      numimages={opts.numimages}
      ></itemCarousel>
  </div>
  <script>
    this.showInfo = () => {
      console.log('info');
    };
    this.addToBasket = () => {
      console.log('added to basket');
    };
  </script>
</itemContainer>
