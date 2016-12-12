<checkoutSubHeader>
  <ul class='checkoutHeader'>
    <li each='{link in links}' class='checkoutHeader-item'>
      <a href='{formatLink(link)}' class='checkoutHeader-item-link'>
        {link.title}
      </a>
    </li>
  </ul>
  <script>
    this.formatLink = link => link.active ? link.url : ''
    this.links = [{
      title: 'BASKET',
      url: '/checkout',
      active: opts.stage >= 0
    },{
      title: 'BILLING',
      url: '/details?tab=billing',
      active: opts.stage > 0
    },{
      title: 'SHIPMENT',
      url: '/details?tab=shipment',
      active: opts.stage > 1
    },{
      title: 'CONFIRM',
      url: '',
      active: opts.stage > 2
    }];
  </script>
</checkoutSubHeader>
