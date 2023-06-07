package com.example.pharmacy.service.mail;


import com.example.pharmacy.entity.user.User;

public interface IEmailService {
    void sendResetPasswordEmail(String email, String otp);
    boolean validateOtp(String otpCode, String email);
    String generateOtp(User user);
}
