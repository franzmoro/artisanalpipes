<itemRecap>
  <div class='checkout-itemRecap-container {hide:!isInBasket}'>
    <span class='checkout-itemRecap-cell itemRecap-imageContainer'>
      <img
        class='itemRecap-image'
        src='/assets/pipes/{opts.identifier}/0.jpg'
        alt='{info.name}'
        />
    </span>
    <span class='checkout-itemRecap-cell itemRecap-title'>
      {info.name}
    </span>
    <span class='checkout-itemRecap-cell itemRecap-unitPrice'>
      <span class='itemRecap-unitPrice-unit'>{info.priceunit} </span>
      <span class='itemRecap-unitPrice-price'> {info.price}</span>
    </span>
    <span class='checkout-itemRecap-cell remove pointer'
      onclick={removeFromBasket}
      >
    </span>
  </div>
  <div class='checkout-itemRecap-removedItem {hide:isInBasket}'>
    Removed {info.name} from basket - <span onclick={putBack}>UNDO</span>
  </div>
  <script>
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
  </script>
</itemRecap>
