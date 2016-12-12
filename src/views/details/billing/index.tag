<billingDetails>
  <div class='billingDetailsContainer'>
    <form class='details'>
      <input type='text'
        placeholder='Full name (as on card)*'
        />
      <addressDetails type='billing'></addressDetails>
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
    </form>
  </div>
  <script>
    const currYear = (new Date).getFullYear();
    this.months = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.years = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
      .map((el, idx) => currYear + idx);
  </script>
</billingDetails>
