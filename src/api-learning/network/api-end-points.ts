export const Urls = {

    //base url
    baseUrl : "https://fakestoreapi.com",

    //login
    learninglogin : "/auth/login",

    //user
    getAllUserList : "/users",
    getUserDetails : ( id: string | number )=>`/users/${id}`,
    updateUserDetails : ( id: string | number)=> `/users/${id}`,
    deleteUser : ( id:string | number)=>`/users/${id}`,

    addNewUser : `/users`,

    //product

    getAllProductList : "/products",
    getProductDetails : ( id:string | number)=>`/products/${id}`,
    updateProductDetails : ( id:string | number)=> `/products/${id}`,
    deleteProduct : ( id:string | number)=>`/products/${id}`,

    addNewProduct : `/products`,

    //cart

    getAllCartDetails : "/carts",
    getCartDetails : (id:string | number)=> `/carts/${id}`,
    updateCartDetails : (id:string | number)=> `/carts/${id}`,
    deleteCart : (id : string | number)=> `/carts/${id}`,

    addCart : "/carts",
}