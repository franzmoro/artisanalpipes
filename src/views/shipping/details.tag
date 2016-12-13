<shippingDetails>
  <div class='shippingDetailsContainer'>
    <form class='details'>
      <input type='text' id='name'
        placeholder='Full name'
        />
      <addressDetails type='shipping'></addressDetails>
    </form>
  </div>
  <script>
  const autoFillName = () => {
    const shippingDetails = JSON.parse(sessionStorage.getItem('shipping'));
    this.name.value = shippingDetails.name;
  };
  if (typeof Storage !== 'undefined') {
    autoFillName();
  }
  </script>
</shippingDetails>
