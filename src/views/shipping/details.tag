<shippingDetails>
  <div class='shippingDetailsContainer'>
    <form class='details'>
      <input type='text' id='name'
        placeholder='Full name'
        />
      <addressDetails type='shipping' saved={opts.saved.address}></addressDetails>
    </form>
  </div>
  <script>
  const autoFill = () => {
    this.name.value = opts.saved.name;
  };
  if (opts.saved && opts.saved.name) {
    autoFill();
  };
  </script>
</shippingDetails>
