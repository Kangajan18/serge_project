package com.kangs.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

//    @Autowired
//    public CustomerController(CustomerService customerService){
//        this.customerService = customerService;
//    }



    @GetMapping
    public List<Customer> getCustomer(){
        return customerService.getCustomer();
    }

    @RequestMapping({ "/registration" })
    public void addNewCustomer(@RequestBody Customer customer){
        customerService.addNewCustomer(customer);
    }

    @RequestMapping({ "/login" })
    public void LoginCustomer(@RequestBody Customer customer){
        customerService.login(customer.getEmail(), customer.getPassWord());
    }

    @DeleteMapping(path = "{customerid}")
    public void removeCustomer(@PathVariable("customerid")Long customerId){
        customerService.removeCustomer(customerId);
    }

    @PutMapping(path = "{customerId}")
    public void updateCustomer(
            @PathVariable("customerId") Long customerId,
            @RequestParam(required = false) String firstName,
            @RequestParam(required = false) String lastName,
            @RequestParam(required= false) String email){

        customerService.updateCustomer(customerId,firstName,lastName,email);
    }
}
