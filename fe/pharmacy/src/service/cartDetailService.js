import request from "../request"

    const findAll = () => {
        return request.get("/api/order-detail")
    }

    const listTotalALL = (id,page) => {
        return request.get(`/api/order-detail/list/${id}?page=${page?page:0}`)
    }

    const save = (cartDetail) => {
        return request.post(`/api/order-detail`, {...cartDetail})
    }

    const remove = (id) => {
        return request.delete(`/api/order-detail/${id}`)
    }

    const update = (id, quantity) => {
        return request.put(`/api/order-detail/${id}/${quantity}`)
    }

    const cartDetailService = {
        findAll,
        save,
        remove,
        update,
        listTotalALL
    }

    export default cartDetailService
