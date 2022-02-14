const initialState = {
    items: {
        1: { count: 3 },
        2: { count: 1 },
    },
    totalCount: 4,
};

const changeItems = (items, payload) => {
    if (items[payload.id]) {
        items[payload.id].count += payload.count;
    } else {
        items[payload.id] = { count: payload.count };
    }
    return items;
};

const deleteItem = (items, payload) => {
    if (items[payload]) {
        const deletedCount = items[payload].count;
        delete items[payload];
        return { items, deletedCount };
    } else {
        return { items, deletedCount: 0 };
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_ITEMS":
            return {
                ...state,
                items: changeItems(state.items, action.payload),
                totalCount: state.totalCount + action.payload.count,
            };
        case "DELETE_ITEM": {
            const info = deleteItem(state.items, action.payload);
            return {
                ...state,
                items: info.items,
                totalCount: state.totalCount - info.deletedCount,
            };
        }
        case "DELETE_ITEMS":
            return {
                ...state,
                items: [],
                totalCount: 0,
            };
        default:
            return state;
    }
};
