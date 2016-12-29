<shipping>
  <header></header>
  <div class='header-separator'></div>
  <checkoutSubHeader stage={opts.stage}></checkoutSubHeader>
  <div class='checkoutHeader-separator'></div>
  <h1>Shipping Details</h1>
  <shippingDetails saved={opts.saved}></shippingDetails>
  <button onClick='{getShippingOptions}'>See shipment options</button>
  <a href='/billing' onclick='{setShippingDetails}' class='proceed'>Proceed to Billing</a>

  <script>
    this.getShippingOptions = () => {
      const xhr = new XMLHttpRequest;
      xhr.onreadystatechange = () => {
        if (xhr.statusCode === 200 && xhr.readyState === 4) {
          console.log('ready', xhr.responseText);
        }
      }
      xhr.open('GET', `/shipping-options?to_address=argul&basket=n121,n123`);
      xhr.send();
    };

    this.setShippingDetails = () => {
      sessionStorage.setItem(
        'shipping',
        JSON.stringify(getShippingInputs())
      );
      return true;
    }
    const getShippingInputs = () => {
      const shippingTag = this.tags.shippingdetails;
      const addressInputsTag = shippingTag.tags.addressdetails;
      return {
        name: shippingTag.name.value,
        address: addressInputsTag.getInputs()
      };
    };
    if (typeof Storage !== 'undefined') {
      opts.saved = JSON.parse(
        sessionStorage.getItem('shipping') ||
        '{"name":"","address":{}}'
      );
    } else {
      opts.saved = { name : '', address: {} }
    }
  </script>
</shipping>
