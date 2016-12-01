<itemCarousel>
  <div class='pipes-carousel'>
    <div class='pipes-carousel-imageContainer'>
      <img id='item-{opts.identifier}-{itemIdx}'
        src='/items/{opts.identifier}/{itemIdx}'
        />
    </div>
    <div class='pipes-carousel-arrowLeft' onclick='{moveLeft}'></div>
    <div class='pipes-carousel-arrowRight' onclick='{moveRight}'></div>
  </div>
  <script>
  console.log('opts', opts);
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
