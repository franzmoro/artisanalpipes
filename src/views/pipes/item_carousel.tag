<itemCarousel>
  <div class='pipes-carousel'>
    <div class='pipes-carousel-arrowLeft pointer' onclick='{moveLeft}'></div>
    <div class='pipes-carousel-arrowRight pointer' onclick='{moveRight}'></div>
    <div class='pipes-carousel-imageContainer'>
      <img id='item-{opts.identifier}-{itemIdx}'
        class='pipes-carousel-image'
        src='/assets/pipes/{opts.identifier}/{itemIdx}.jpg'
        />
      <div id='itemInfo' class='pipes-itemDescription hide'>
        <p>{opts.description}</p>
      </div>
    </div>
  </div>
  <script>
    this.itemIdx = 0;
    this.moveLeft = () => {
      if (this.itemIdx > 0) {
        this.itemIdx--;
        this.update();
      }
    };
    this.moveRight = () => {
      if (this.itemIdx < opts.numimages-1) {
        this.itemIdx++;
        this.update();
      }
    };
  </script>
</itemCarousel>
