export interface IProductSize {
    width: number,
    length: number,
    height: number
}

export interface IProduct {
    name: string,
    specificCategoryId: string,
    originalPrice: number,
    currentPrice?: number,
    description?: string,
    thumbnailURL?: string,
    stock: number,
    producer?: string,
    color?: string,
    size?: IProductSize,
    warrantyDuration?: number,
    _id: string
}

export interface ProductState {
    products: IProduct[],
    isLoaded: boolean
}

export interface IProductRow {
    id: string,
    name: string,
    category: string,
    price: number | undefined,
    stock: number,
    producer: string | undefined,
    color: string | undefined,
    size: string,
}