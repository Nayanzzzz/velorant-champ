export const Urls = {
  // Base Url
  baseUrl: "https://fakestoreapi.com",

  // Login
  login: "/auth/login",

  // User
  getAllUserList: "/users",
  getUserDetails: (id: number | string) => `/users/${id}`,

  // Product
  getAllProductList: "/products",
  getProductDetails: (id: number | string) => `/products/${id}`,
};
