export const getNameById = (id: string, categories: any) => {
    for (const mainCategory of categories) {
        for (const specificCategory of mainCategory.specificCategories) {
            if (specificCategory._id === id) {
                return specificCategory.name;
            }
        }
    }
    return null;
}

export function convertToVND(amount: number): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0 
    });

    return formatter.format(amount);
}