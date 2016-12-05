riot.tag2('header', '<ul class="app-header"> <li class="app-header-item" each="{item in items}"> <div class="{item.class}"> <a href="{item.link}" class="{selected:item.isSelected} {fill:item.fill}"> {item.title} </a> </div> </li> </ul>', '', '', function(opts) {
    const isSelected = route => (route === opts.selected);
    this.items = [
      { title: '', route: '', class: 'header-img AP-logo' },
      { title: 'PIPES', route: '/pipes' },
      { title: 'ABOUT', route: '/about' },
      { title: 'CONTACT', route: '/contact' },
      { title: '', route: '/checkout', class: 'header-img checkout', fill: true }
    ].map(item => ({
      title: item.title,
      link: item.route,
      isSelected: isSelected(item.route),
      class: item.class || '',
      fill: item.fill
    }));
});

riot.tag2('about', '<header selected="{\'/about\'}"></header>', '', '', function(opts) {
});

riot.tag2('checkout', '<header selected="{\'/checkout\'}"></header> <ul class="checkout-items"> <li each="{item in basket}">{item.id} - {item.quantity}</li> </ul>', '', '', function(opts) {
    this.basket = [];
    if (typeof Storage !== 'undefined') {
      const basket = JSON.parse(localStorage.getItem('basket') || '{}');
      this.basket = Object.keys(basket).reduce(
        (accum, id) => accum.concat([{ id, quantity: basket[id] }]),
        []
      );
    }
});

riot.tag2('contact', '<header selected="{\'/contact\'}"></header>', '', '', function(opts) {
});

riot.tag2('pipes', '<header selected="{\'/pipes\'}"></header> <itemsgallery items="{opts.items}"></itemsGallery>', '', '', function(opts) {
});

riot.tag2('itemcarousel', '<div class="pipes-carousel"> <div class="pipes-carousel-arrowLeft pointer" onclick="{moveLeft}"></div> <div class="pipes-carousel-arrowRight pointer" onclick="{moveRight}"></div> <div class="pipes-carousel-imageContainer"> <img id="item-{opts.identifier}-{itemIdx}" class="pipes-carousel-image" riot-src="/assets/pipes/{opts.identifier}/{itemIdx}.jpg"> <div id="itemInfo" class="pipes-itemDescription hide"> <div class="text"> {opts.description} </div> </div> </div> </div>', '', '', function(opts) {
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
});

riot.tag2('itemcontainer', '<div class="pipes-itemContainer"> <div class="pipes-titleDetails"> <div class="pipes-titleDetailsContainer"> <span class="pipes-itemTitle"> {opts.name} </span> <span class="pipes-itemDetails"> <span class="actionIcon addToBasket {hide:isInBasket} pointer" onclick="{addToBasket}"></span> <span class="actionIcon inBasket {hide:!isInBasket} pointer" onclick="{removeFromBasket}"></span> <span class="actionIcon showInfo pointer" onclick="{toggleInfo}"></span> <span class="pipes-price"> <span class="unit">{opts.priceunit}</span> <span class="quantity"> {opts.price.toLocaleString()}</span> </span> </span> </div> </div> <itemcarousel name="carousel" identifier="{opts.identifier}" name="{opts.name}" price="{opts.price}" unit="{opts.unit}" description="{opts.description}" numimages="{opts.numimages}"> </itemCarousel> </div>', '', '', function(opts) {
    this.basket = {};
    this.isInBasket = false;
    if (typeof Storage !== 'undefined') {
      this.basket = JSON.parse(localStorage.getItem('basket') || '{}');
      const quantity = this.basket[opts.identifier] || 0;
      this.isInBasket = (quantity > 0);
    }
    this.toggleInfo = () => {
      this.carousel.querySelector('#itemInfo').classList.toggle('hide');
      this.update();
    };
    this.addToBasket = () => {
      const quantity = this.basket[opts.identifier] || 0;

      if (quantity === 0) {
        this.basket[opts.identifier] = 1;
        localStorage.setItem('basket', JSON.stringify(this.basket));
        this.isInBasket = true;
        this.update();
      } else {
        window.alert('Sorry, we only have 1 unit for this item');
      }
    };
    this.removeFromBasket = () => {
      const quantity = this.basket[opts.identifier] || 0;

      if (quantity === 1) {
        delete this.basket[opts.identifier];
        localStorage.setItem('basket', JSON.stringify(this.basket));
        this.isInBasket = false;
        this.update();
      } else {
        throw new Error('should not have been possible to remove from Basket')
      }
    };
});

riot.tag2('itemsgallery', '<div class="pipes"> <itemcontainer each="{item in opts.items}" identifier="{item.identifier}" name="{item.name}" description="{item.description}" technical="{item.technical}" price="{item.price}" priceunit="{item.priceunit}" numimages="{item.numImages}"></itemContainer> </div>', '', '', function(opts) {
});
