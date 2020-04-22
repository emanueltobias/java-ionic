package com.emanueltobias.etcommerceapi.service;

import org.springframework.mail.SimpleMailMessage;

import com.emanueltobias.etcommerceapi.model.Pedido;

public interface EmailService {

	void sendOrderConfirmationEmail(Pedido obj);

	void sendEmail(SimpleMailMessage msg);
}
