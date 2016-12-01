<header>
  <ul class='app-header'>
    <li class='app-header-item' each='{item in items}'>
      <a href='{item.link}' class='app-header-link {item.selected} {item.additionalClass || ''}'>
        {item.title}
        <img src='{item.image.src}' alt='{item.image.alt}' class='app-header-item-image'/>
      </a>
    </li>
  </ul>
  <script>
    this.items = [{
      title: '',
      link: '#',
      image: {
        src: '/assets/AP_logo.png',
        alt: ''
      }
    }, {
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
      // image:
    }];
  </script>
</header>
