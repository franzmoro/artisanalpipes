riot.tag2('addressdetails', '<div class="group"> <input type="text" name="address1_{opts.type}" id="address1" placeholder="Address (Line 1)*"> <input type="text" name="address2_{opts.type}" id="address2" placeholder="Address (Line 2)"> <input type="text" name="address3_{opts.type}" id="address3" placeholder="Address (Line 3)"> <input type="text" name="address4_{opts.type}" id="address4" placeholder="Address (Line 4)"> <input type="text" name="city_{opts.type}" id="city" placeholder="City*"> <input type="text" name="county_{opts.type}" id="county" placeholder="County"> <countriesdropdown type="{opts.type}" saved="{opts.savedcountry}"></countriesDropdown> </div>', '', '', function(opts) {
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
    this.autoFill = () => {
      Object.keys(opts.saved).forEach(field => {
        if (field === 'country') {
          opts.savedcountry = opts.saved.country;

        } else {
          this[field].value = opts.saved[field];
        }
        this.update();
      });
    };
    if (opts.saved && opts.saved) {
      this.autoFill();
    }
});

riot.tag2('checkoutsubheader', '<div class="checkoutHeaderContainer"> <ul class="checkoutHeader"> <li each="{link in links}" class="checkoutHeader-item"> <a href="{formatLink(link)}" class="checkoutHeader-item-link {selected:link.selected} {active:link.active}"> {link.title} </a> </li> </ul> </div>', '', '', function(opts) {
    this.formatLink = link => link.active ? link.url : ''
    this.links = [{
      title: 'BASKET',
      url: '/checkout',
      active: opts.stage > 0,
      selected: opts.stage === 0
    },{
      title: 'SHIPPING',
      url: '/shipping',
      active: opts.stage > 1,
      selected: opts.stage === 1
    },{
      title: 'BILLING',
      url: '/billing',
      active: opts.stage > 2,
      selected: opts.stage === 2
    },{
      title: 'DONE',
      url: '',
      active: false,
      selected: opts.stage === 3
    }];
});

riot.tag2('countriesdropdown', '<select onchange="{selectCountry}" id="country"> <option disabled selected="{!saved}" value>Country*</option> <option each="{country in countries}" selected="{country.code===saved}" riot-value="{country.code}" id="{country.code}"> {country.name} </option> </select>', '', '', function(opts) {
    this.saved = opts.saved;
    this.countries = [
      { code: "AF", name: "Afghanistan" },
    	{ code: "AX", name: "Åland Islands" },
    	{ code: "AL", name: "Albania" },
    	{ code: "DZ", name: "Algeria" },
    	{ code: "AS", name: "American Samoa" },
    	{ code: "AD", name: "Andorra" },
    	{ code: "AO", name: "Angola" },
    	{ code: "AI", name: "Anguilla" },
    	{ code: "AQ", name: "Antarctica" },
    	{ code: "AG", name: "Antigua and Barbuda" },
    	{ code: "AR", name: "Argentina" },
    	{ code: "AM", name: "Armenia" },
    	{ code: "AW", name: "Aruba" },
    	{ code: "AU", name: "Australia" },
    	{ code: "AT", name: "Austria" },
    	{ code: "AZ", name: "Azerbaijan" },
    	{ code: "BS", name: "Bahamas" },
    	{ code: "BH", name: "Bahrain" },
    	{ code: "BD", name: "Bangladesh" },
    	{ code: "BB", name: "Barbados" },
    	{ code: "BY", name: "Belarus" },
    	{ code: "BE", name: "Belgium" },
    	{ code: "BZ", name: "Belize" },
    	{ code: "BJ", name: "Benin" },
    	{ code: "BM", name: "Bermuda" },
    	{ code: "BT", name: "Bhutan" },
    	{ code: "BO", name: "Bolivia, Plurinational State of" },
    	{ code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
    	{ code: "BA", name: "Bosnia and Herzegovina" },
    	{ code: "BW", name: "Botswana" },
    	{ code: "BV", name: "Bouvet Island" },
    	{ code: "BR", name: "Brazil" },
    	{ code: "IO", name: "British Indian Ocean Territory" },
    	{ code: "BN", name: "Brunei Darussalam" },
    	{ code: "BG", name: "Bulgaria" },
    	{ code: "BF", name: "Burkina Faso" },
    	{ code: "BI", name: "Burundi" },
    	{ code: "KH", name: "Cambodia" },
    	{ code: "CM", name: "Cameroon" },
    	{ code: "CA", name: "Canada" },
    	{ code: "CV", name: "Cape Verde" },
    	{ code: "KY", name: "Cayman Islands" },
    	{ code: "CF", name: "Central African Republic" },
    	{ code: "TD", name: "Chad" },
    	{ code: "CL", name: "Chile" },
    	{ code: "CN", name: "China" },
    	{ code: "CX", name: "Christmas Island" },
    	{ code: "CC", name: "Cocos (Keeling) Islands" },
    	{ code: "CO", name: "Colombia" },
    	{ code: "KM", name: "Comoros" },
    	{ code: "CG", name: "Congo" },
    	{ code: "CD", name: "Congo, the Democratic Republic of the" },
    	{ code: "CK", name: "Cook Islands" },
    	{ code: "CR", name: "Costa Rica" },
    	{ code: "CI", name: "Côte d'Ivoire" },
    	{ code: "HR", name: "Croatia" },
    	{ code: "CU", name: "Cuba" },
    	{ code: "CW", name: "Curaçao" },
    	{ code: "CY", name: "Cyprus" },
    	{ code: "CZ", name: "Czech Republic" },
    	{ code: "DK", name: "Denmark" },
    	{ code: "DJ", name: "Djibouti" },
    	{ code: "DM", name: "Dominica" },
    	{ code: "DO", name: "Dominican Republic" },
    	{ code: "EC", name: "Ecuador" },
    	{ code: "EG", name: "Egypt" },
    	{ code: "SV", name: "El Salvador" },
    	{ code: "GQ", name: "Equatorial Guinea" },
    	{ code: "ER", name: "Eritrea" },
    	{ code: "EE", name: "Estonia" },
    	{ code: "ET", name: "Ethiopia" },
    	{ code: "FK", name: "Falkland Islands (Malvinas)" },
    	{ code: "FO", name: "Faroe Islands" },
    	{ code: "FJ", name: "Fiji" },
    	{ code: "FI", name: "Finland" },
    	{ code: "FR", name: "France" },
    	{ code: "GF", name: "French Guiana" },
    	{ code: "PF", name: "French Polynesia" },
    	{ code: "TF", name: "French Southern Territories" },
    	{ code: "GA", name: "Gabon" },
    	{ code: "GM", name: "Gambia" },
    	{ code: "GE", name: "Georgia" },
    	{ code: "DE", name: "Germany" },
    	{ code: "GH", name: "Ghana" },
    	{ code: "GI", name: "Gibraltar" },
    	{ code: "GR", name: "Greece" },
    	{ code: "GL", name: "Greenland" },
    	{ code: "GD", name: "Grenada" },
    	{ code: "GP", name: "Guadeloupe" },
    	{ code: "GU", name: "Guam" },
    	{ code: "GT", name: "Guatemala" },
    	{ code: "GG", name: "Guernsey" },
    	{ code: "GN", name: "Guinea" },
    	{ code: "GW", name: "Guinea-Bissau" },
    	{ code: "GY", name: "Guyana" },
    	{ code: "HT", name: "Haiti" },
    	{ code: "HM", name: "Heard Island and McDonald Islands" },
    	{ code: "VA", name: "Holy See (Vatican City State)" },
    	{ code: "HN", name: "Honduras" },
    	{ code: "HK", name: "Hong Kong" },
    	{ code: "HU", name: "Hungary" },
    	{ code: "IS", name: "Iceland" },
    	{ code: "IN", name: "India" },
    	{ code: "ID", name: "Indonesia" },
    	{ code: "IR", name: "Iran, Islamic Republic of" },
    	{ code: "IQ", name: "Iraq" },
    	{ code: "IE", name: "Ireland" },
    	{ code: "IM", name: "Isle of Man" },
    	{ code: "IL", name: "Israel" },
    	{ code: "IT", name: "Italy" },
    	{ code: "JM", name: "Jamaica" },
    	{ code: "JP", name: "Japan" },
    	{ code: "JE", name: "Jersey" },
    	{ code: "JO", name: "Jordan" },
    	{ code: "KZ", name: "Kazakhstan" },
    	{ code: "KE", name: "Kenya" },
    	{ code: "KI", name: "Kiribati" },
    	{ code: "KP", name: "Korea, Democratic People's Republic of" },
    	{ code: "KR", name: "Korea, Republic of" },
    	{ code: "KW", name: "Kuwait" },
    	{ code: "KG", name: "Kyrgyzstan" },
    	{ code: "LA", name: "Lao People's Democratic Republic" },
    	{ code: "LV", name: "Latvia" },
    	{ code: "LB", name: "Lebanon" },
    	{ code: "LS", name: "Lesotho" },
    	{ code: "LR", name: "Liberia" },
    	{ code: "LY", name: "Libya" },
    	{ code: "LI", name: "Liechtenstein" },
    	{ code: "LT", name: "Lithuania" },
    	{ code: "LU", name: "Luxembourg" },
    	{ code: "MO", name: "Macao" },
    	{ code: "MK", name: "Macedonia, the former Yugoslav Republic of" },
    	{ code: "MG", name: "Madagascar" },
    	{ code: "MW", name: "Malawi" },
    	{ code: "MY", name: "Malaysia" },
    	{ code: "MV", name: "Maldives" },
    	{ code: "ML", name: "Mali" },
    	{ code: "MT", name: "Malta" },
    	{ code: "MH", name: "Marshall Islands" },
    	{ code: "MQ", name: "Martinique" },
    	{ code: "MR", name: "Mauritania" },
    	{ code: "MU", name: "Mauritius" },
    	{ code: "YT", name: "Mayotte" },
    	{ code: "MX", name: "Mexico" },
    	{ code: "FM", name: "Micronesia, Federated States of" },
    	{ code: "MD", name: "Moldova, Republic of" },
    	{ code: "MC", name: "Monaco" },
    	{ code: "MN", name: "Mongolia" },
    	{ code: "ME", name: "Montenegro" },
    	{ code: "MS", name: "Montserrat" },
    	{ code: "MA", name: "Morocco" },
    	{ code: "MZ", name: "Mozambique" },
    	{ code: "MM", name: "Myanmar" },
    	{ code: "NA", name: "Namibia" },
    	{ code: "NR", name: "Nauru" },
    	{ code: "NP", name: "Nepal" },
    	{ code: "NL", name: "Netherlands" },
    	{ code: "NC", name: "New Caledonia" },
    	{ code: "NZ", name: "New Zealand" },
    	{ code: "NI", name: "Nicaragua" },
    	{ code: "NE", name: "Niger" },
    	{ code: "NG", name: "Nigeria" },
    	{ code: "NU", name: "Niue" },
    	{ code: "NF", name: "Norfolk Island" },
    	{ code: "MP", name: "Northern Mariana Islands" },
    	{ code: "NO", name: "Norway" },
    	{ code: "OM", name: "Oman" },
    	{ code: "PK", name: "Pakistan" },
    	{ code: "PW", name: "Palau" },
    	{ code: "PS", name: "Palestinian Territory, Occupied" },
    	{ code: "PA", name: "Panama" },
    	{ code: "PG", name: "Papua New Guinea" },
    	{ code: "PY", name: "Paraguay" },
    	{ code: "PE", name: "Peru" },
    	{ code: "PH", name: "Philippines" },
    	{ code: "PN", name: "Pitcairn" },
    	{ code: "PL", name: "Poland" },
    	{ code: "PT", name: "Portugal" },
    	{ code: "PR", name: "Puerto Rico" },
    	{ code: "QA", name: "Qatar" },
    	{ code: "RE", name: "Réunion" },
    	{ code: "RO", name: "Romania" },
    	{ code: "RU", name: "Russian Federation" },
    	{ code: "RW", name: "Rwanda" },
    	{ code: "BL", name: "Saint Barthélemy" },
    	{ code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
    	{ code: "KN", name: "Saint Kitts and Nevis" },
    	{ code: "LC", name: "Saint Lucia" },
    	{ code: "MF", name: "Saint Martin (French part)" },
    	{ code: "PM", name: "Saint Pierre and Miquelon" },
    	{ code: "VC", name: "Saint Vincent and the Grenadines" },
    	{ code: "WS", name: "Samoa" },
    	{ code: "SM", name: "San Marino" },
    	{ code: "ST", name: "Sao Tome and Principe" },
    	{ code: "SA", name: "Saudi Arabia" },
    	{ code: "SN", name: "Senegal" },
    	{ code: "RS", name: "Serbia" },
    	{ code: "SC", name: "Seychelles" },
    	{ code: "SL", name: "Sierra Leone" },
    	{ code: "SG", name: "Singapore" },
    	{ code: "SX", name: "Sint Maarten (Dutch part)" },
    	{ code: "SK", name: "Slovakia" },
    	{ code: "SI", name: "Slovenia" },
    	{ code: "SB", name: "Solomon Islands" },
    	{ code: "SO", name: "Somalia" },
    	{ code: "ZA", name: "South Africa" },
    	{ code: "GS", name: "South Georgia and the South Sandwich Islands" },
    	{ code: "SS", name: "South Sudan" },
    	{ code: "ES", name: "Spain" },
    	{ code: "LK", name: "Sri Lanka" },
    	{ code: "SD", name: "Sudan" },
    	{ code: "SR", name: "Suriname" },
    	{ code: "SJ", name: "Svalbard and Jan Mayen" },
    	{ code: "SZ", name: "Swaziland" },
    	{ code: "SE", name: "Sweden" },
    	{ code: "CH", name: "Switzerland" },
    	{ code: "SY", name: "Syrian Arab Republic" },
    	{ code: "TW", name: "Taiwan, Province of China" },
    	{ code: "TJ", name: "Tajikistan" },
    	{ code: "TZ", name: "Tanzania, United Republic of" },
    	{ code: "TH", name: "Thailand" },
    	{ code: "TL", name: "Timor-Leste" },
    	{ code: "TG", name: "Togo" },
    	{ code: "TK", name: "Tokelau" },
    	{ code: "TO", name: "Tonga" },
    	{ code: "TT", name: "Trinidad and Tobago" },
    	{ code: "TN", name: "Tunisia" },
    	{ code: "TR", name: "Turkey" },
    	{ code: "TM", name: "Turkmenistan" },
    	{ code: "TC", name: "Turks and Caicos Islands" },
    	{ code: "TV", name: "Tuvalu" },
    	{ code: "UG", name: "Uganda" },
    	{ code: "UA", name: "Ukraine" },
    	{ code: "AE", name: "United Arab Emirates" },
    	{ code: "GB", name: "United Kingdom" },
    	{ code: "US", name: "United States" },
    	{ code: "UM", name: "United States Minor Outlying Islands" },
    	{ code: "UY", name: "Uruguay" },
    	{ code: "UZ", name: "Uzbekistan" },
    	{ code: "VU", name: "Vanuatu" },
    	{ code: "VE", name: "Venezuela, Bolivarian Republic of" },
    	{ code: "VN", name: "Viet Nam" },
    	{ code: "VG", name: "Virgin Islands, British" },
    	{ code: "VI", name: "Virgin Islands, U.S." },
    	{ code: "WF", name: "Wallis and Futuna" },
    	{ code: "EH", name: "Western Sahara" },
    	{ code: "YE", name: "Yemen" },
    	{ code: "ZM", name: "Zambia" },
    	{ code: "ZW", name: "Zimbabwe" }
    ];
});

riot.tag2('header', '<ul class="app-header"> <li class="app-header-item" each="{item in items}"> <div class="{item.class}"> <a href="{item.link}" class="{selected:item.isSelected} {fill:item.fill}"> {item.title} </a> </div> </li> </ul>', '', '', function(opts) {
    const isSelected = route => (route === opts.selected);
    this.items = [
      { title: '', route: '', class: 'header-img AP-logo' },
      { title: 'PIPES', route: '/pipes' },
      { title: 'ABOUT', route: '/about' },
      { title: 'CONTACT', route: '/contact' },
      { title: '', route: '/checkout', class: 'header-img checkout', fill: true }
    ].map(item => ({
      title: item.title,
      link: item.route,
      isSelected: isSelected(item.route),
      class: item.class || '',
      fill: item.fill
    }));
});

riot.tag2('about', '<header selected="{\'/about\'}"></header> <div class="header-separator"></div>', '', '', function(opts) {
});

riot.tag2('billingdetails', '<div class="billingDetailsContainer"> <form class="details" action="/confirm"> <input type="checkbox" id="samedetails" name="sameDetails" class="group" checked="{true}" onchange="{conditionalAutoComplete}"> <label for="sameDetails">Same as shipping details</label> <input type="text" id="billingname" placeholder="Full name (as on card)*"> <addressdetails type="billing" saved="{opts.savedaddress}"></addressDetails> <div class="group cardDetails"> <select name="cardType"> <option disabled selected value>Card Type*</option> <option value="Visa">Visa</option> <option value="Mastercard">Mastercard</option> <option value="Amex">American Express</option> </select> <input type="text" placeholder="Card Number*"> <select name="expiryMonth"> <option disabled selected value>Expiry (MM)*</option> <option each="{month in months}" riot-value="{month}">{month}</option> </select> <select name="expiryYear"> <option disabled selected value>Expiry (YYYY)*</option> <option each="{year in years}" riot-value="{year}">{year}</option> </select> </div> <button>Pay</button> </form> </div>', '', '', function(opts) {
    const currYear = (new Date).getFullYear();
    this.months = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.years = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
      .map((el, idx) => currYear + idx);

    const autoComplete = bool => {
      this.billingname.value = bool ? opts.saved.name : '';
      opts.savedaddress = bool ? opts.saved.address : {};

    };
    this.conditionalAutoComplete = (e) => {
      console.log('e.target', e.target.checked);
      autoComplete(e.target.checked);
    };
    if (opts.saved) {
      autoComplete(true);
    }
});

riot.tag2('billing', '<header></header> <div class="header-separator"></div> <checkoutsubheader stage="{opts.stage}"></checkoutSubHeader> <div class="checkoutHeader-separator"></div> <h1>Billing Details</h1> <billingdetails saved="{opts.saved}"></billingDetails>', '', '', function(opts) {
    if (typeof Storage !== 'undefined') {
      opts.saved = JSON.parse(
        sessionStorage.getItem('shipping') ||
        '{"name":"","address":{}}');
    }
});

riot.tag2('checkout', '<header selected="{\'/checkout\'}"></header> <div class="header-separator"></div> <checkoutsubheader stage="{opts.stage}"></checkoutSubHeader> <div class="checkoutHeader-separator"></div> <h1>YOUR BASKET</h1> <a href="/shipping" class="proceed">Proceed to Shipping</a> <ul class="checkout-items"> <li each="{item in basket}"> <itemrecap identifier="{item.id}" info="{item.info}"></itemRecap> </li> </ul> <a href="/shipping" class="proceed">Proceed to Shipping</a>', '', '', function(opts) {
    const formatBasket = rawBasket => Object.keys(rawBasket).reduce(
      (accum, id) => accum.concat([
        { id, info: rawBasket[id] }
      ]),
      []
    );
    this.getBasket = () => JSON.parse(localStorage.getItem('basket') || '{}');

    if (typeof Storage !== 'undefined') {
      this.basket = formatBasket(this.getBasket());
    }
});

riot.tag2('itemrecap', '<div class="checkout-itemRecap-container {hide:!isInBasket}"> <span class="checkout-itemRecap-cell itemRecap-imageContainer"> <img class="itemRecap-image" riot-src="/assets/pipes/{opts.identifier}/0.jpg" alt="{info.name}"> </span> <span class="checkout-itemRecap-cell itemRecap-title"> {info.name} </span> <span class="checkout-itemRecap-cell itemRecap-unitPrice"> <span class="itemRecap-unitPrice-unit">{info.priceunit} </span> <span class="itemRecap-unitPrice-price"> {info.price}</span> </span> <span class="checkout-itemRecap-cell remove pointer" onclick="{removeFromBasket}"> </span> </div> <div class="checkout-itemRecap-removedItem {hide:isInBasket}"> Removed {info.name} from basket - <span onclick="{putBack}">UNDO</span> </div>', '', '', function(opts) {
    this.info = JSON.parse(opts.info);
    this.isInBasket = true;

    const getBasket = () => JSON.parse(localStorage.getItem('basket') || '{}');
    this.removeFromBasket = () => {
      const basket = getBasket();
      delete basket[opts.identifier];
      localStorage.setItem('basket', JSON.stringify(basket));
      this.isInBasket = false;
      this.update();
    };
    this.putBack = () => {
      const basket = getBasket();
      basket[opts.identifier] = opts.info;
      localStorage.setItem('basket', JSON.stringify(basket));
      this.isInBasket = true;
      this.update();
    }
});

riot.tag2('contact', '<header selected="{\'/contact\'}"></header> <div class="header-separator"></div>', '', '', function(opts) {
});

riot.tag2('pipes', '<header selected="{\'/pipes\'}"></header> <div class="header-separator"></div> <itemsgallery items="{opts.items}"></itemsGallery>', '', '', function(opts) {
});

riot.tag2('itemcarousel', '<div class="pipes-carousel"> <div class="pipes-carousel-arrowLeft pointer" onclick="{moveLeft}"></div> <div class="pipes-carousel-arrowRight pointer" onclick="{moveRight}"></div> <div class="pipes-carousel-imageContainer"> <img id="item-{opts.identifier}-{itemIdx}" class="pipes-carousel-image" riot-src="/assets/pipes/{opts.identifier}/{itemIdx}.jpg"> <div id="itemInfo" class="pipes-itemDescription hide"> <div class="text"> {opts.description} </div> </div> </div> </div>', '', '', function(opts) {
    this.itemIdx = 0;
    this.moveLeft = () => {
      if (this.itemIdx > 0) {
        this.itemIdx--;
        this.update();
      }
    };
    this.moveRight = () => {
      if (this.itemIdx < opts.numimages-1) {
        this.itemIdx++;
        this.update();
      }
    };
});

riot.tag2('itemcontainer', '<div class="pipes-itemContainer"> <titleactions data="{opts.data}" identifier="{opts.identifier}" name="{opts.name}" price="{opts.price}" priceunit="{opts.priceunit}"> </titleActions> <itemcarousel name="carousel" identifier="{opts.identifier}" name="{opts.name}" price="{opts.price}" unit="{opts.unit}" description="{opts.description}" numimages="{opts.numimages}"> </itemCarousel> </div>', '', '', function(opts) {
});

riot.tag2('titleactions', '<div class="pipes-titleDetails"> <div class="pipes-titleDetailsContainer"> <span class="pipes-itemTitle"> {opts.name} </span> <span class="pipes-itemDetails"> <span class="actionIcon addToBasket {hide:isInBasket} pointer" onclick="{addToBasket}"></span> <span class="actionIcon inBasket {hide:!isInBasket} pointer" onclick="{removeFromBasket}"></span> <span class="actionIcon showInfo pointer" onclick="{toggleInfo}"></span> <span class="pipes-price"> <span class="unit">{opts.priceunit}</span> <span class="quantity"> {opts.price.toLocaleString()}</span> </span> </span> </div> </div>', '', '', function(opts) {
    this.toggleInfo = () => {
      this.carousel.querySelector('#itemInfo').classList.toggle('hide');
      this.update();
    };

    const getBasket = () => JSON.parse(localStorage.getItem('basket') || '{}');
    const isIn = id => Boolean(getBasket()[id]);
    const basketAction = (alreadyIn) => {
      const basket = getBasket();
      const isInBasket = isIn(opts.identifier);

      if (!isInBasket) {
        basket[opts.identifier] = opts.data;
        this.isInBasket = true;
      } else {
        delete basket[opts.identifier];
        this.isInBasket = false;
      }
      localStorage.setItem('basket', JSON.stringify(basket));
      this.update();
    };
    this.addToBasket = basketAction.bind(this, false);
    this.removeFromBasket = basketAction.bind(this, true);

    if (typeof Storage !== 'undefined') {
      this.isInBasket = isIn(opts.identifier);
    }
});

riot.tag2('itemsgallery', '<div class="pipes"> <itemcontainer each="{item in opts.items}" data="{JSON.stringify(item)}" identifier="{item.identifier}" name="{item.name}" description="{item.description}" technical="{item.technical}" price="{item.price}" priceunit="{item.priceunit}" numimages="{item.numImages}"></itemContainer> </div>', '', '', function(opts) {
});

riot.tag2('shippingdetails', '<div class="shippingDetailsContainer"> <form class="details"> <input type="text" id="name" placeholder="Full name"> <addressdetails type="shipping" saved="{opts.saved.address}"></addressDetails> </form> </div>', '', '', function(opts) {
    const autoFill = () => {
      this.name.value = opts.saved.name;
    };
    autoFill();
});

riot.tag2('shipping', '<header></header> <div class="header-separator"></div> <checkoutsubheader stage="{opts.stage}"></checkoutSubHeader> <div class="checkoutHeader-separator"></div> <h1>Shipping Details</h1> <shippingdetails saved="{opts.saved}"></shippingDetails> <a href="/billing" onclick="{setShippingDetails}" class="proceed">Proceed to Billing</a>', '', '', function(opts) {
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
        '{"name":"","address":{}}');
    }
});
