import request from "../request"
const pay = (total) => {
    const token = localStorage.getItem('token')
    return request.post(`/api/payment/create_payment/${total}`,null,{
        headers : {
            'Authorization': `Bearer ${token}`
        }
    })

}


const paymentService = {
    pay
}

export default paymentService