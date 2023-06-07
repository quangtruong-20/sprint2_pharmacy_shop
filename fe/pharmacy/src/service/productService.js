import request from "../request"

const findByName = ({page, name}) => {
    return request.get(`/api/product?page=${page?page:""}&name=${name}`)
}

const findAll = () => {
    return request.get(`/api/product/list?page=0`)
}

const findById = (id) => {
    return request.get(`/api/product/detail/${id}`)
}

const productService = {
    findByName,
    findById,
    findAll
}

export default productService