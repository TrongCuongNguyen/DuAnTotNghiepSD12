package datn.sd12.datn.client.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminRouteController {


    @GetMapping("/")
    public String home() {
        return "admin/index";
    }

    @GetMapping("/login")
    public String login() {
        return "admin/pages/auth/login";
    }

    @GetMapping("/signup")
    public String signup() {
        return "admin/pages/auth/signup";
    }

    @GetMapping("/forgot-password")
    public String forgotPassword() {
        return "admin/pages/auth/forgotpass";
    }

    @GetMapping("/products")
    public String product() {
        return "admin/pages/product/product-list";
    }

    @GetMapping("/addproduct")
    public String addProduct() {
        return "admin/pages/product/product-add-update";
    }

    @GetMapping("/categories")
    public String category() {
        return "admin/pages/category/category-list";
    }

    @GetMapping("/addcategory")
    public String addCategory() {
        return "admin/pages/category/category-add-update";
    }


//    @GetMapping("/sizes")
//    public String size() {
//        return "admin/pages/size/size-list";
//    }
//
//    @GetMapping("/addsize")
//    public String addSize() {
//        return "admin/pages/size/size-add-update";
//    }

    //        @GetMapping("/brands")
//    public String brand() {
//        return "admin/pages/brand/brand-list";
//    }
//
//    @GetMapping("/addbrand")
//    public String addBrand() {
//        return "admin/pages/brand/brand-add-update";
//    }
    @GetMapping("/returns")
    public String returns() {
        return "admin/pages/returns/returns-list";
    }
    @GetMapping("/orders")
    public String order() {
        return "admin/pages/order/order-list";
    }

    @GetMapping("/addorder")
    public String addOrder() {
        return "admin/pages/order/order-add-update";
    }

    @GetMapping("/staffs")
    public String staff() {
        return "admin/pages/staff/staff-list";
    }

    @GetMapping("/addstaff")
    public String addStaff() {
        return "admin/pages/staff/staff-add-update";
    }

    @GetMapping("/users")
    public String user() {
        return "admin/pages/user/user-list";
    }

    @GetMapping("/adduser")
    public String addUser() {
        return "admin/pages/user/user-add-update";
    }

    @GetMapping("/positions")
    public String position() {
        return "admin/pages/position/position-list";
    }

    @GetMapping("/addposition")
    public String addposition() {
        return "admin/pages/position/position-add-update";
    }

    @GetMapping("/payments")
    public String payment() {
        return "admin/pages/payment/payment-list";
    }

    @GetMapping("/addpayment")
    public String addPayment() {
        return "admin/pages/payment/payment-add-update";
    }

    @GetMapping("/pos")
    public String POS() {
        return "admin/pages/sale/pos";
    }
}
