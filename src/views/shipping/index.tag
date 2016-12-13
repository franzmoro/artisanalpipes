<shipping>
  <header></header>
  <div class='header-separator'></div>
  <checkoutSubHeader stage={opts.stage}></checkoutSubHeader>
  <div class='checkoutHeader-separator'></div>
  <h1>Shipping Details</h1>
  <shippingDetails></shippingDetails>
  <a href='/billing' onclick='{setShippingDetails}' class='proceed'>Proceed to Billing</a>

  <script>
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
  </script>
</shipping>
