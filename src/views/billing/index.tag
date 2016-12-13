<billing>
  <header></header>
  <div class='header-separator'></div>
  <checkoutSubHeader stage={opts.stage}></checkoutSubHeader>
  <div class='checkoutHeader-separator'></div>
  <h1>Billing Details</h1>
  <billingDetails saved={opts.saved}></billingDetails>

  <script>
    if (typeof Storage !== 'undefined') {
      opts.saved = JSON.parse(
        sessionStorage.getItem('shipping') ||
        '{"name":"","address":{}}');
    }
  </script>
</billing>
