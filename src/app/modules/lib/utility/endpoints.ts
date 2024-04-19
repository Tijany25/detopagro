const endpoints = {
    SIGN_IN: '/auth/login',
    SIGN_UP: '/auth/register',
    VALIDATE_TOKEN: '/auth/validate',
    PRODUCT_CATEGORIES: 'product/categories',
    PRODUCTS: 'products',
    PRODUCT: 'products/:slug',
    CART: '/cart',
    USER_ADDRESSES: 'users/:userId/addresses',
    PAY_WITH_PAYSTACK: 'payment/initialize/paystack',
}

export default endpoints;