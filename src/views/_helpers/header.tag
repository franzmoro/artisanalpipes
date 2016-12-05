<header>
  <ul class='app-header'>
    <li class='app-header-item' each='{item in items}'>
      <div class='{item.class}'>
        <a href='{item.link}' class='{selected:item.isSelected} {fill:item.fill}'>
          {item.title}
        </a>
      </div>
    </li>
  </ul>
  <script>
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
  </script>
</header>
