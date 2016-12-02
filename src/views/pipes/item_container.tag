<itemContainer>
  <div class='pipes-itemContainer'>
    <div class='pipes-titleDetailsContainer'>
      <span class='pipes-itemTitle'>
        {opts.name}
      </span>
      <span class='pipes-itemDetails'>
        <span class='actionIcon addToBasket pointer' onclick='{addToBasket}' />
        <span class='actionIcon showInfo pointer' onclick='{toggleInfo}' />
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
      >
    </itemCarousel>
    <div name='itemInfo' class='pipes-itemDescription hide'>
      <p>{opts.description}</p>
    </div>
  </div>
  <script> 
    this.toggleInfo = () => {
      this.itemInfo.classList.toggle('hide');
    };
    this.addToBasket = () => {
      console.log('added to basket');
    };
  </script>
</itemContainer>
