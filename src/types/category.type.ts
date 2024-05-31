
export interface ICategory {
    _id: string;
    name: string;
}

export interface CategoryState {
    isLoaded: boolean;
    categories: {
        category: string;
        specificCategories: ICategory[];
    }[];
}
