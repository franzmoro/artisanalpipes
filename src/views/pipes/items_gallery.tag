<itemsGallery>
  <div class='pipes'>
    <itemContainer each='{item in opts.items}'
      identifier={item.identifier}
      name={item.name}
      description={item.description}
      technical={item.technical}
      price={item.price}
      priceunit={item.priceunit}
    ></itemContainer>
  </div>
  <script>
  </script>
</itemsGallery>
