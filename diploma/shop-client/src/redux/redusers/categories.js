const initialState = {
    items: [
        {
            id: 1,
            parentCategoryId: 1,
            name: "Кросы",
            description: "удобная обувь!",
            icon_url: "",
            image_url: "",
        },
    ],
    isLoaded: false,
    nextID: 2,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CATEGORY":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: state.nextID,
                        parentCategoryId: action.payload.parentCategoryId,
                        name: action.payload.name,
                        description: action.payload.description,
                        icon_url: action.payload.icon_url,
                        image_url: action.payload.image_url,
                    },
                ],
                nextID: state.nextID + 1,
            };
        default:
            return state;
    }
};
