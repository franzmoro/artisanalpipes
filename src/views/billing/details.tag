<billingDetails>
  <div class='billingDetailsContainer'>
    <form class='details' action='/confirm'>
      <input type='checkbox' id='samedetails'
        name='sameDetails'
        class='group'
        checked={true}
        onchange={conditionalAutoComplete}
        >
        <label for='sameDetails'>Same as shipping details</label>
      <input type='text' id='billingname'
        placeholder='Full name (as on card)*'
        />
      <addressDetails type='billing' saved={opts.savedaddress}></addressDetails>
      <div class='group cardDetails'>
        <select name='cardType'>
          <option disabled selected value>Card Type*</option>
          <option value='Visa'>Visa</option>
          <option value='Mastercard'>Mastercard</option>
          <option value='Amex'>American Express</option>
        </select>
        <input type='text'
          placeholder='Card Number*'
          />
        <select name='expiryMonth'>
          <option disabled selected value>Expiry (MM)*</option>
          <option each='{month in months}' value={month}>{month}</option>
        </select>
        <select name='expiryYear'>
          <option disabled selected value>Expiry (YYYY)*</option>
          <option each='{year in years}' value={year}>{year}</option>
        </select>
      </div>
      <button>Pay</button>
    </form>
  </div>
  <script>
    const currYear = (new Date).getFullYear();
    this.months = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.years = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
      .map((el, idx) => currYear + idx);

    const autoComplete = bool => {
      this.billingname.value = bool ? opts.saved.name : '';
      opts.savedaddress = bool ? opts.saved.address : {};
      // this.tags.addressdetails.autoFill();
    };
    this.conditionalAutoComplete = (e) => {
      console.log('e.target', e.target.checked);
      autoComplete(e.target.checked);
    };
    if (opts.saved) {
      autoComplete(true);
    }
  </script>
</billingDetails>
