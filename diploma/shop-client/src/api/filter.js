//Получение всех доступных фильтров по размерам
export const getSizeFilterValues = (products) => {
    const availibleSizes = {};
    products.forEach((item) => {
        item.size.forEach((s) => {
            if (availibleSizes[s]) {
                availibleSizes[s] += 1;
            } else {
                availibleSizes[s] = 1;
            }
        });
    });
    return availibleSizes;
};
//Получение всех доступных фильтров по брендам
export const getBrandFilterValues = (products) => {
    const availibleBrands = {};
    products.forEach((item) => {
        if (availibleBrands[item.brand]) {
            availibleBrands[item.brand] += 1;
        } else {
            availibleBrands[item.brand] = 1;
        }
    });
    return availibleBrands;
};

export const isFiltersPassed = (item, currentFilter) => {
    for (let i = 0; i < currentFilter.length; i++) {
        const element = currentFilter[i];
        if (element.title === "Цена") {
            const nowPrice = Math.round(item.price - (item.price * item.discount) / 100);
            if (!(element.filter.min <= nowPrice && element.filter.max >= nowPrice)) {
                return false;
            }
        }
        if (element.title === "Размер") {
            let sizeCheck = false;
            if (Object.keys(element.filter).length !== 0) {
                Object.keys(element.filter).forEach((key) => {
                    if (item.size.join().includes(key)) {
                        sizeCheck = true;
                    }
                });
                if (!sizeCheck) {
                    return false;
                }
            }
        }
        if (element.title === "Бренд") {
            let brandCheck = false;
            if (Object.keys(element.filter).length !== 0) {
                Object.keys(element.filter).forEach((key) => {
                    if (item.brand === key) {
                        brandCheck = true;
                    }
                });
                if (!brandCheck) {
                    return false;
                }
            }
        }
    }
    return true;
};
