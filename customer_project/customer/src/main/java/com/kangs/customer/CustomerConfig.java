package com.kangs.customer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class CustomerConfig {

    @Bean
    CommandLineRunner commandLineRunner(CustomerRepository repository){
        return args -> {
            Customer Kangajan = new Customer(
                    "Kangajan",
                    "Kuganathan",
                    LocalDate.of(1999,05,18),
                    "Male",
                    "0763125761",
                    "kuganathankarshan@gmail.com",
                    "456"
            );
            Customer Kajanan = new Customer(
                    "Kajanan",
                    "Kanthasami",
                    LocalDate.of(1997,03,24),
                    "Male",
                    "078732345",
                    "kajanankanthasami@gmail.com",
                    "123"
            );
            repository.saveAll(
                    List.of(Kangajan,Kajanan)
            );
        };
    }
}
