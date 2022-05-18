export const amountFormatter = (amount) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1000, symbol: "k" },
        { value: 1000000, symbol: "M" },
      ]
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
      var item = lookup.slice().reverse().find(function(item) {
        return amount >= item.value
      });
      return item ? (amount / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0"     
}