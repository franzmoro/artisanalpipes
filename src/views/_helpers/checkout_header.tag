<checkoutSubHeader>
  <div class='checkoutHeaderContainer'>
    <ul class='checkoutHeader'>
      <li each='{link in links}' class='checkoutHeader-item'>
        <a
          href='{formatLink(link)}'
          class='checkoutHeader-item-link {selected:link.selected} {active:link.active}'
          >
          {link.title}
        </a>
      </li>
    </ul>
  </div>
  <script>
    this.formatLink = link => link.active ? link.url : ''
    this.links = [{
      title: 'BASKET',
      url: '/checkout',
      active: opts.stage > 0,
      selected: opts.stage === 0
    },{
      title: 'SHIPPING',
      url: '/shipping',
      active: opts.stage > 1,
      selected: opts.stage === 1
    },{
      title: 'BILLING',
      url: '/billing',
      active: opts.stage > 2,
      selected: opts.stage === 2
    },{
      title: 'DONE',
      url: '',
      active: false,
      selected: opts.stage === 3
    }];
  </script>
</checkoutSubHeader>
