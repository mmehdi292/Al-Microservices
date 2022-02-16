package com.al.voyageservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class VoyageServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(VoyageServiceApplication.class, args);
    }

}
