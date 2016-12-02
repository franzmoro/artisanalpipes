<header>
  <ul class='app-header'>
    <img src='/assets/AP_logo_3_small.png' alt='Artisanal Pipes' class='app-header-item header-logo' />
    <li class='app-header-item header-text' each='{item in items}'>
      <a href='{item.link}' class='{app-header-link: !item.image}  {selected:item.isSelected}'>
        {item.title}
        <img class='app-header-item-image header-logo'
          src='{item.image.src}'
          alt='{item.image.alt}'
          />
      </a>
    </li>
  </ul>
  <script>
    const isSelected = title => (title === opts.selected);
    this.items = [
      { title: 'PIPES' },
      { title: 'ABOUT' },
      { title: 'CONTACT' },
      {
        title: 'CHECKOUT',
        image: { src: '/assets/shopping_cart.png', alt: 'checkout' }
      }
    ].map(item => ({
      title: item.image ? '' : item.title,
      link: isSelected(item.title) ? '' : '/' + item.title.toLowerCase(),
      isSelected: isSelected(item.title),
      image: item.image
    }));
  </script>
</header>
