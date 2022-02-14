export const getProductById = (products, id) => {
    return products.filter((item) => item.id === +id)[0];
};

export const getFullInfo = (products, cart) => {
    let fullPrice = 0;
    let fullDiscount = 0;

    Object.keys(cart.items).forEach((id) => {
        const item = getProductById(products, id);
        fullPrice += item.price * cart.items[id].count;
        fullDiscount += Math.round((item.price * cart.items[id].count * item.discount) / 100);
    });
    return { fullPrice, fullDiscount };
};

export const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const allSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];