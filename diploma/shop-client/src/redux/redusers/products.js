const initialState = {
    items: [
        {
            id: 1,
            article: "yaav-shop 1",
            size: [1, 3, 5, 6, 14],
            brand: "Adidas",
            category_id: 1,

            name: "Originals Yeezy Boost 350 v2 «Beluga Reflective»",
            description: "Кроссовки adidas Originals Yeezy Boost 350 v2 «Beluga Reflective»",
            image_url: "https://static.street-beat.ru/upload/iblock/2d4/2d43cdf2a1859d96617757cf1c58d36d.jpg",
            price: 23999,
            discount: 5,
            created_on: new Date(),
        },
        {
            id: 2,
            article: "yaav-shop 2",
            size: [7, 10],
            brand: "Nike",
            category_id: 1,
            name: "KD13",
            description: "Nike кроссовки KD13 из коллаборации с Kevin Durant",
            image_url: "https://cdn-images.farfetch-contents.com/16/38/89/68/16388968_31632073_1000.jpg",
            price: 12527,
            discount: 1,
            created_on: new Date(),
        },
        {
            id: 3,
            article: "yaav-shop 3",
            size: [7, 10],
            brand: "BURTON",
            category_id: 1,
            name: "Сноуборд BURTON Ft 3D Deep Daze 2021-22",
            description:
                "Перенесите свои впечатления от катания в пухляке в мир 3D. Работая с райдерами команды, специалисты Burton углубились в прототипы и результаты тестирования, чтобы идеально настроить форму и дизайн сноуборда Family Tree 3D Deep Daze. Вдохновленная современным дизайном досок для серфинга, уникальная трехмерная форма носа и хвоста стабилизирует езду на всем диапазоне поворота. Доска втягивает вас в каждую дугу и позволяет удерживать мощность, а затем ускоряться, обеспечивая новый уровень отдачи и контроля в глубоком снегу. Плавайте и прореживайте самые глубокие зимние дни.",
            image_url:
                "https://www.kant.ru/upload/resize_cache/iblock/2e3/555_455_1/2e3e00d75bd08499673cd328497afdc5.jpg",
            price: 10000,
            discount: 10,
            created_on: new Date(),
        },
        {
            id: 4,
            article: "yaav-shop 4",
            size: [1, 3],
            brand: "Nike",
            category_id: 1,
            name: "Lebron 17",
            description: "Nike высокие кроссовки Lebron 17",
            image_url: "https://cdn-images.farfetch-contents.com/14/67/00/33/14670033_22998217_1000.jpg",
            price: 7777,
            discount: 1,
            created_on: new Date(),
        },
        {
            id: 5,
            article: "yaav-shop 5",
            size: [1, 2, 3],
            brand: "ELAN",
            category_id: 1,
            name: "Горнолыжные палки ELAN RockRod Jr Black",
            description:
                "Elan RockRod Jr - это удобные и надежные горнолыжные палки для детей. Алюминиевое древко обладает оптимальным сочетанием легкого веса, прочности и жесткости, а эргономичная рукоятка создает удобный обхват и создана для детских рук. Широкий выбор расцветок позволяет легко выбрать нужный вариант практически под любую экипировку.",
            image_url:
                "https://www.kant.ru/upload/resize_cache/iblock/a47/555_455_1/a47547b3f4b2162819b691c152a5822f.jpg",
            price: 1100,
            discount: 5,
            created_on: new Date(),
        },
        {
            id: 6,
            article: "yaav-shop 6",
            size: [1, 2, 3],
            brand: "ATOMIC",
            category_id: 1,
            name: "Беговые лыжи ATOMIC 2021-22 Pro C1 Skintec - Hard",
            description:
                "Беговые лыжи ATOMIC Pro C1 Skintec предназначены для классического хода и отлично подходят как для тренировок, так и для соревнований. Модель не предполагает использование воска: зоны ударов выполнены из мохера и обеспечивают отличные характеристики ударов и скольжения при любых снежных условиях и температурах. Благодаря объединению конструкции SDS Camber и технологии Skintec лыжи имеют оптимальные для тренировок характеристики удара и скольжения.",
            image_url:
                "https://www.kant.ru/upload/resize_cache/iblock/ef4/555_455_1/ef474cdf28eb8ae7311bbc2a68ebd1cd.jpg",
            price: 8000,
            discount: 2,
            created_on: new Date(),
        },
    ],
    isLoaded: false,
    nextId: 7,
    search: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: state.nextId,
                        article: action.payload.article,
                        brand: action.payload.brand,
                        size: action.payload.size,
                        category_id: action.payload.category_id,
                        name: action.payload.name,
                        description: action.payload.description,
                        image_url: action.payload.image_url,
                        price: action.payload.price,
                        discount: action.payload.discount,
                        created_on: new Date(),
                    },
                ],
                nextId: state.nextId + 1,
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                items: state.items.filter((item) => {
                    return !(item.id === action.payload);
                }),
            };
        case "EDIT_PRODUCT":
            return {
                ...state,
                items: [
                    ...state.items.filter((item) => {
                        return !(item.id === action.payload.id);
                    }),
                    {

                        id: action.payload.id,
                        article: action.payload.article,
                        brand: action.payload.brand,
                        size: action.payload.size,
                        category_id: action.payload.category_id,
                        name: action.payload.name,
                        description: action.payload.description,
                        image_url: action.payload.image_url,
                        price: action.payload.price,
                        discount: action.payload.discount,
                        created_on: new Date(),
                    },
                ],
            };
        case "SET_PRODUCTS":
            return {
                ...state,
                items: action.payload,
                isLoaded: false,
            };
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoaded: action.payload,
            };
        case "SET_SEARCH_TEXT":
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};
