<addressDetails>
  <div class='group'>
    <input type='text' name='address1_{opts.type}' id='address1'
      placeholder='Address (Line 1)*'
      />
    <input type='text' name='address2_{opts.type}' id='address2'
      placeholder='Address (Line 2)'
      />
    <input type='text' name='address3_{opts.type}' id='address3'
      placeholder='Address (Line 3)'
      />
    <input type='text' name='address4_{opts.type}' id='address4'
      placeholder='Address (Line 4)'
      />
    <input type='text' name='city_{opts.type}' id='city'
      placeholder='City*'
      />
    <input type='text' name='county_{opts.type}' id='county'
      placeholder='County'
      />
    <countriesDropdown type={opts.type} saved={opts.savedcountry}></countriesDropdown>
  </div>
  <script>
    this.getAddressLines = () => [
      'address1',
      'address2',
      'address3',
      'address4',
      'city',
      'county'
    ].reduce((accum, el) => {
      accum[el] = this[el].value;
      return accum;
    }, {});

    this.getInputs = () => Object.assign(
      {},
      this.getAddressLines(),
      { country: this.tags.countriesdropdown.country.value }
    );
    this.validateAddress = () => {

    };
    const autoFill = () => {
      Object.keys(opts.saved).forEach(field => {
        if (field === 'country') {
          opts.savedcountry = opts.saved.country;
          this.tags.countriesdropdown.update();
        } else {
          this[field].value = opts.saved[field];
        }
      });
    };
    if (opts.saved && opts.saved) {
      autoFill();
    }
  </script>
</addressDetails>
