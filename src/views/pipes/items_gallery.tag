<itemsGallery>
  <div class='pipes'>
    <itemContainer each='{item in items}'
      identifier={item.identifier}
      name={item.name}
      price={item.price}
      unit={item.unit}
      description={item.description}
      numimages={item.numimages}
    ></itemContainer>
  </div>
  <script>
    // TODO remove hard-coded part
    this.items = [{
      identifier: 'pipe-1',
      name: 'nostromopipa',
      price: 350,
      unit: 'EUR',
      description: 'a very beautiful pipe',
      numimages: 2
    },{
      identifier: 'pipe-2',
      name: 'artigiano',
      price: 500,
      unit: 'EUR',
      description: 'a unique pipe',
      numimages: 2
    }]
  </script>
</itemsGallery>
