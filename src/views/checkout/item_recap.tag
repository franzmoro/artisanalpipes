<itemRecap>
  <h1>Your Basket</h1>
  <div class='checkout-itemRecap-container'>
    <span class='checkout-itemRecap-cell itemRecap-imageContainer'>
      <img
        class='itemRecap-image'
        src='/assets/pipes/{opts.identifier}/0.jpg'
        alt='{opts.title}'
        />
    </span>
    <span class='checkout-itemRecap-cell itemRecap-title'>
      {opts.title}
    </span>
    <span class='checkout-itemRecap-cell itemRecap-unitPrice'>
      <span class='itemRecap-unitPrice-unit'>EUR</span>
      <span class='itemRecap-unitPrice-price'>{opts.unitPrice}</span>
    </span>
  </div>
  <script>
    opts.title = 'title fake';
    opts.unitPrice = '1,200';
  </script>
</itemRecap>
