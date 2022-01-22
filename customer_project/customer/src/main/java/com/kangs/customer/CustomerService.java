package com.kangs.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

//    @Autowired
//    public CustomerService(CustomerRepository customerRepository){
//        this.customerRepository = customerRepository;
//    }

    public List<Customer> getCustomer() {
        return this.customerRepository.findAll();
    }

    public void addNewCustomer(Customer customer) {
        Optional<Customer> customerOptional = customerRepository.findCustomerByEmail(customer.getEmail());

        if (customerOptional.isPresent()) {
            throw new IllegalStateException("Email already exist!");
        }

        customerRepository.save(customer);
    }

    public void removeCustomer(Long customerId) {
        boolean exists = customerRepository.existsById(customerId);

        if (!exists) {
            throw new IllegalStateException("customer with id " + customerId + " does not exist");
        }
        customerRepository.deleteById(customerId);
    }


    @Transactional
    public void updateCustomer(Long customerId, String firstName, String lastName, String email) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new IllegalStateException(
                "customer with " + customerId + " does not exist"));

        if (firstName != null &&
                firstName.length() > 0 &&
                !Objects.equals(customer.getFirstName(), firstName)) {

            customer.setFirstName(firstName);
        }

        if (lastName != null &&
                lastName.length() > 0 &&
                !Objects.equals(customer.getLastName(), lastName)) {
            customer.setLastName(lastName);
        }

        if (email != null &&
                email.length() > 0 &&
                !Objects.equals(customer.getEmail(), email)) {
            Optional<Customer> customerOptional = customerRepository.findCustomerByEmail(email);
            if (customerOptional.isPresent()) {
                throw new IllegalStateException("Email already taken");
            }
            customer.setEmail(email);
        }

    }

    public void login(String email, String passWord) {


        if (email != null &&
                email.length() > 0) {
            Customer customer = customerRepository.findCustomerByEmail(email).orElseThrow(() -> new IllegalStateException(
                    "customer with " + email + " does not exist"));

            if (Objects.equals(customer.getPassWord(), passWord)) {
                System.out.println("Open");

            } else if (!Objects.equals(customer.getPassWord(), passWord)) {
                System.out.println("not open!");
                throw new IllegalStateException("password is not Correct!");

            } else {
                System.out.println("not open!");
                throw new IllegalStateException("Email is not available First Register");
            }
        }
    }


}
