package datn.sd12.datn.client.shop.controller;


import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// controller de test giao dien
@Controller
public class ShopRouteController {


    @Autowired
    HttpSession session;

//    @ModelAttribute(name = "categoryList")


    // trang chu
    @GetMapping("/")
    public String getIndex(Model model) {
        System.out.println(SecurityContextHolder.getContext().getAuthentication());
        Map<String, String> banner1 = new HashMap<String, String>();
        banner1.put("link", "static/assets/shop/img/banner-18.png");
        banner1.put("sale", "Save up to 60% off");
        banner1.put("heading", "The Best Deals<br>of The Year");
        banner1.put("trending", "There's nothing like trend");

        Map<String, String> banner2 = new HashMap<String, String>();
        banner2.put("link", "static/assets/shop/img/banner-19.png");
        banner2.put("sale", "Mega Sale");
        banner2.put("heading", "Get up to 50% off<br>Black Friday");
        banner2.put("trending", "There's nothing like trend");

        Map<String, String> banner3 = new HashMap<String, String>();
        banner3.put("link", "static/assets/shop/img/banner-20.png");
        banner3.put("sale", "Super Sale");
        banner3.put("heading", "Online<br>Fashion Shop");
        banner3.put("trending", "There's nothing like trend");

        List<Map<String, String>> banners = new ArrayList<>();
        banners.add(banner1);
        banners.add(banner2);
        banners.add(banner3);

        model.addAttribute("banners", banners);
        return "shop/index";
    }


//    @GetMapping("/login")
//    public String login(
//            @ModelAttribute("userLogin") LoginRequest loginRequest,
//            Model model
//    ) {
////        model.addAttribute("userLogin", new LoginRequest()); // Thêm đối tượng vào model attribute
//        return "shop/pages/login";
//    }




    @GetMapping("/checkout")
    public String checkout() {
        return "shop/pages/checkout";
    }

    @GetMapping("/faq")
    public String faq() {
        return "shop/pages/faq";
    }

    @GetMapping("/contact")
    public String contact() {
        return "shop/pages/contact";
    }

    @GetMapping("/about-us")
    public String aboutUs() {
        return "shop/pages/about-us";
    }

//    @GetMapping("/register")
//    public String register(Model model) {
//        model.addAttribute("newUser", new RegisterRequest());
//        return "shop/pages/register";
//    }


    @GetMapping("/logout")
    public String Logout(
            Model model
    ) {
        SecurityContextHolder.getContext().setAuthentication(null);
        return "shop/pages/login";
    }


//    @PostMapping("/register")
//    public String registration(
//            @Valid @ModelAttribute("newUser") RegisterRequest userDto,
//            BindingResult result,
//            Model model
//    ) throws UserAlreadyExistException {
////        UserEntity existingUser = userService.findUserByEmail(userDto.getEmail());
////
////        if(existingUser != null && existingUser.getEmail() != null && !existingUser.getEmail().isEmpty()){
////            result.rejectValue("email", null,
////                    "There is already an account registered with the same email");
////        }
//        System.out.println(userDto.getNgaySinh());
//        if (result.hasErrors()) {
//            model.addAttribute("user", userDto);
//            return "shop/pages/register";
//        }
//
////        userService.saveUser(userDto);
////        khachHangService.saveUser(userDto);
//        return "redirect:/register?success";
//    }


    // =================================================================
    // User Setting Controller
    // =================================================================


    @GetMapping("/user/wishlist")
    public String wishlist() {
        return "shop/pages/user/wishlist";
    }

    @GetMapping("/user/address")
    public String userAddress() {
        return "shop/pages/user/address";
    }

    @GetMapping("/user/payment-methode")
    public String paymentMethod() {
        return "shop/pages/user/payment-method";
    }
}
