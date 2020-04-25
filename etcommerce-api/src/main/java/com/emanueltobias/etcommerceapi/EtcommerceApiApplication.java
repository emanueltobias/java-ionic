package com.emanueltobias.etcommerceapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.emanueltobias.etcommerceapi.service.S3Service;

@SpringBootApplication
public class EtcommerceApiApplication implements CommandLineRunner {
	
	
	@Autowired
	private S3Service s3Service;
	

	public static void main(String[] args) {
		SpringApplication.run(EtcommerceApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		s3Service.uploadFile("C:\\Dev\\temp\\teste.jpg");
	}

}
