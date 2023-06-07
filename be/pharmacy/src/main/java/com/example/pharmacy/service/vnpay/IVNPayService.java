package com.example.pharmacy.service.vnpay;


import com.example.pharmacy.dto.payment.PaymentSendEmailDTO;

public interface IVNPayService {
    void sendEmail(PaymentSendEmailDTO paymentSendEmailDTO);
}
