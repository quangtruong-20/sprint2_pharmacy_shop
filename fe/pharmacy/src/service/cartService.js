import request from "../request"
const update = (cart) => {
    console.log(cart)
    return request.put(`/api/order`, {...cart})
}

const cartService = {
    update
}

export default cartService