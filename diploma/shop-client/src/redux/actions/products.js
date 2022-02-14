const productsActions = {
    addProduct: (item) => ({
        type: "ADD_PRODUCT",
        payload: item,
    }),
    deleteProduct: (id) => ({
        type: "DELETE_PRODUCT",
        payload: id,
    }),
    setSearchText: (text) => ({
        type: "SET_SEARCH_TEXT",
        payload: text,
    }),
    editProduct: (item) => {
        return {
            type: "EDIT_PRODUCT",
            payload: item,
        };
    },
};

export default productsActions;