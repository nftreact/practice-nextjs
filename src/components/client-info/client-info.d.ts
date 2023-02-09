
export type products = {
    data: {
        limit: number;
        products: Array<{
            id: number;
            brand: string;
            price: number;
            description: string;
            image: string;
            category: string;
            discountPercentage: number;
            stock: number;
            thumbnail: string;
            title: string;
            rating: number;

        }>;
        skip: number;
        total: number;
    }
};