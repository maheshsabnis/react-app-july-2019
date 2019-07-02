// Client-Side Domain Logic
// ES 6 class
// public declarations are prefixed using 'this'
export class ProductLogic {
    constructor() {
        this.Products = [];
        this.Products.push({ ProductId: 101, ProductName: 'Laptop', CategoryName: 'Electronics', Price: 120000 });
        this.Products.push({ ProductId: 102, ProductName: 'Iron', CategoryName: 'Electrical', Price: 1300 });
        this.Products.push({ ProductId: 103, ProductName: 'Lays', CategoryName: 'Food', Price: 20 });
    }
    getProducts() {
        for (let i = 0; i < 100; i++) { console.log(i); }
        return this.Products;
    }
    saveProduct(prd) {
        this.Products.push(prd);
        return this.Products;
    }
}
// only for components
// export default ProductLogic;