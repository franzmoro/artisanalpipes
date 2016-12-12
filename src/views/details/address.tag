<addressDetails>
  <input type='text' name='address1_{opts.type}' id='address1_{opts.type}'
    placeholder='Address (Line 1)*'
    />
  <input type='text' name='address2_{opts.type}' id='address2_{opts.type}'
    placeholder='Address (Line 2)'
    />
  <input type='text' name='address3_{opts.type}' id='address3_{opts.type}'
    placeholder='Address (Line 3)'
    />
  <input type='text' name='address4_{opts.type}' id='address4_{opts.type}'
    placeholder='Address (Line 4)'
    />
  <input type='text' name='city_{opts.type}' id='city_{opts.type}'
    placeholder='City*'
    />
  <input type='text' name='county_{opts.type}' id='county_{opts.type}'
    placeholder='County'
    />
  <countriesDropdown type={opts.type}></countriesDropdown>
  <script>
    let selectedCountry;
    this.getAddressLines = () => [
      'address1',
      'address2',
      'address3',
      'address4',
    ].reduce((accum, el) => {
      accum[el] = this[`${el}_${opts.type}`].value;
      return accum;
    }, {});
    this.getCountry = () => ({
      country: this.tags.countriesdropdown.opts.selected
    });
    this.getInputs = () => Object.assign(
      {},
      this.getAddressLines(),
      this.getCountry()
    );

    this.validateAddress = () => {

    };
  </script>
</addressDetails>
