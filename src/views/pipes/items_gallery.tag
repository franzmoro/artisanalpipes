<itemsGallery>
  <div class='pipes'>
    <itemContainer each='{item in opts.items}'
      data={JSON.stringify(item)}
      identifier={item.identifier}
      name={item.name}
      description={item.description}
      technical={item.technical}
      price={item.price}
      priceunit={item.priceunit}
      numimages={item.numImages}
    ></itemContainer>
  </div>
  <script>

  </script>
</itemsGallery>
