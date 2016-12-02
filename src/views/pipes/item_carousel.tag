<itemCarousel>
  <div class='pipes-carousel'>
    <div class='pipes-carousel-arrowLeft pointer' onclick='{moveLeft}'></div>
    <div class='pipes-carousel-arrowRight pointer' onclick='{moveRight}'></div>
    <div class='pipes-carousel-imageContainer'>
      <img id='item-{opts.identifier}-{itemIdx}'
        class='pipes-carousel-image'
        src='/assets/pipes/{opts.identifier}/{itemIdx}.jpg'
        />
    </div>
  </div>
  <script>
    this.itemIdx = 0;
    this.moveLeft = () => {
      previousImage();
      this.update();
    };
    this.moveRight = () => {
      nextImage();
      this.update();

    };
    const nextImage = () => {
      if (this.itemIdx < opts.numimages-1) { this.itemIdx++; }
      return;
    };
    const previousImage = () => {
      if (this.itemIdx > 0) { this.itemIdx--; }
      return;
    };
  </script>
</itemCarousel>
