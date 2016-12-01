<header class='app-header'>
  <ul class='app-header-list'>
    <li class='app-header-item' each="{item in items}">
      <a href="{item.link}" class='app-header-link {item.selected} {item.additionalClass || ''}'>
        {item.title}
      </a>
    </li>
  </ul>
  <script>
    this.items = [{
      title: 'PIPES',
      link: '/pipes'
    }, {
      title: 'ABOUT',
      link: '/about'
    }, {
      title: 'CONTACT',
      link: '/contact'
    }, {
      title: '',
      link: '/checkout',
      additionalClass: 'basket'
    }];
  </script>
</header>
