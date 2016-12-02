<itemContainer>
  <div class='pipes-itemContainer'>
    <div class='pipes-itemTitle'>
      {opts.name}
    </div>
    <div class='pipes-itemDetails'>
      <p>{opts.priceunit} {opts.price.toLocaleString()}</p>
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

  </script>
</itemContainer>
