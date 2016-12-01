<header>
  <ul class='app-header'>
    <li class='app-header-item' each='{item in items}'>
      <a href='{item.link}' class='app-header-link'>
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
    this.items = [{
      title: '',
      link: '#',
      image: {
        src: '/assets/AP_logo.png',
        alt: ''
      }
    }].concat(
      [ 'PIPES', 'ABOUT', 'CONTACT' ].map(title => ({
        title,
        link: isSelected(title) ? '' : `/${title.toLowerCase()}`,
        isSelected: isSelected(title)
      }))
    ).concat([{
      title: '',
      link: '/checkout',
      isSelected: isSelected('CHECKOUT')
      // image:
    }]);
  </script>
</header>
