package com.al.passangerservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PassangerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(PassangerServiceApplication.class, args);
    }

}
