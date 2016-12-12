<addressDetails>
  <input type='text' name='address1_{opts.type}'
    placeholder='Address (Line 1)*'
    />
  <input type='text' name='address2_{opts.type}'
    placeholder='Address (Line 2)'
    />
  <input type='text' name='address3_{opts.type}'
    placeholder='Address (Line 3)'
    />
  <input type='text' name='address4_{opts.type}'
    placeholder='Address (Line 4)'
    />
  <input type='text' name='city_{opts.type}'
    placeholder='City*'
    />
  <input type='text' name='county_{opts.type}'
    placeholder='County'
    />
  <countriesDropdown></countriesDropdown>

  <script>
    console.log('this.refs', this.address1_billing);
    this.getAddresses = () =>
    this.validateAddress = () => {

    };
  </script>
</addressDetails>
