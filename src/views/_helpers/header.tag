<header>
  <ul class='app-header'>
    <img src='/assets/AP_logo_3_small.png' alt='Artisanal Pipes' class='app-header-item header-logo' />
    <li class='app-header-item header-text' each='{item in items}'>
      <a href='{item.link}' class='app-header-link {selected:item.isSelected}'>
        {item.title}
        <img class='app-header-item-image'
          src='{item.image.src}'
          alt='{item.image.alt}'
          />
      </a>
    </li>
    <a href='/checkout'>
      <img src='/assets/shopping_cart.png' alt='checkout' class=' app-header-item header-logo' />
    </a>
  </ul>
  <script>
    const isSelected = title => title === opts.selected;
    this.items = [ 'PIPES', 'ABOUT', 'CONTACT' ].map(title => ({
      title,
      link: isSelected(title) ? '' : '/' + title.toLowerCase(),
      isSelected: isSelected(title)
    }));
  </script>
</header>
