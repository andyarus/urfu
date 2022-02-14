const cartActions = {
    setChangeItems: (info) => ({
        type: "CHANGE_ITEMS",
        payload: info,
    }),
    deleteItems: () => ({
        type: "DELETE_ITEMS"
    }),
    deleteItem: (id) => ({
        type: "DELETE_ITEM",
        payload: id
    }),
};

export default cartActions;
