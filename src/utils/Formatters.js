export const formatterPrice = (price) => {
    price += '';
    let space = 0;
    for (let i = price.length - 1; i >= 0; i--) {
        space++;
        if (space === 3) price = price.slice(0, i) + ' ' + price.slice(i);
    }
    return price;
};

export default {formatterPrice}