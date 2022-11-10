

export const servicePaths = {

    getAllProducts: "/products",
    getProductById: "/products/",
    getProductByName: "/products/productLineId/",
    getProductByCode: "/products/productCode/",
    getProductsByProductLineName: "/products/productLineName/",
    getProductsByProductLineCode: "/products/productLineCode/",

    getPhotosByProductCode: "/productPhotos/productCode/",


    //Customer 
    getAllCustomers: '/customers',
    getByEmail:'/customers/email/',
    createCustomer: '/customers',
    updateCustomer: '/customers/',

    //photo
    getPhotoByProductCode: '/productphotos/productCode/',
    
    //order
    postOrder: '/orders/customerId/',
    getOrdersOfCustomer: '/orders/customerId/',

    //order deatail
    postOrderDetail: '/orderdetails/productCode/',

    //descriptions
    getDescByProductCode: '/productdescriptions/productCode/',


    //vote 
    getVoteByProductCode: '/votes/productCode/',


    //auth 
    login: "/login",
    register:"/register"
    
}