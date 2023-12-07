export type ID = string | number

//  jika propertiesnya di tambah '?' will be OPTIONAL PROPERTIES, we should not fill the attributes

export type Category = {
    id: ID,
    name: string,
    description?: string
}

export type Product = {
    id: ID,
    name: string;
    price: number;
    category: Category,
    description?: string
}