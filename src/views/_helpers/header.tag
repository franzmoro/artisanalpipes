<header>
  <ul class='app-header'>
    <img src='/assets/AP_logo_3_small.png' alt='Artisanal Pipes' class='logo' />
    <li class='app-header-item' each='{item in items}'>
      <a href='{item.link}' class='app-header-link {selected:item.isSelected}'>
        {item.title}
        <img class='app-header-item-image'
          src='{item.image.src}'
          alt='{item.image.alt}'
          />
      </a>
    </li>
  </ul>
  <script>
    const isSelected = title => title === opts.selected;
    this.items = [ 'PIPES', 'ABOUT', 'CONTACT' ].map(title => ({
        title,
        link: isSelected(title) ? '' : '/' + title.toLowerCase(),
        isSelected: isSelected(title)
      })
    ).concat([{
      title: '',
      link: '/checkout',
      isSelected: isSelected('CHECKOUT')
      // image:
    }]);
  </script>
</header>
