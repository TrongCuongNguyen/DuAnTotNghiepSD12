package datn.sd12.datn.server.constant;

public class SecurityConstants {
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    // Api Endpoints Config
    public static final String[] ENDPOINTS_WHITELIST = {
            "/css/**",
            "/js/**",
            "/images/**",
            "/",
            "/login",
            "/register/**",
            "/products/**",
            "/add-to-cart/**",
            "/product-details",
            "/shopping-cart",
            "/checkout",
            "/about-us",
            "/faq",
            "/contact",
            "/static/**", // cau hinh tai nguyen tinh nhu css, js, image,...
            // luu y: duong dan tai nguyen tinh phu thuoc vao uri cua request: /customer -> /static/.. neu /customer/save -> customer/static/.. khi su dung duong dan tuong doi @{/static}, tranh loi nay thi nen dung duong dan tuyet doi @{~/static}
            "/api/**",
            // admin
            "/admin/**",
            "/pos/**",
            // user
//            "/user/wishlist",
//            "/user/order",
//            "/user/address",
//            "/user/payment-methode",
            "/user/**",

//            "error" // link lỗi khi đăng nhập đúng or sai nó đều chuyển về /error?continue
    };

    // Form Login Config
    public static final String LOGIN_URL = "/login";
    public static final String LOGOUT_URL = "/logout";
    public static final String LOGIN_FAIL_URL = LOGIN_URL + "?error";
    public static final String DEFAULT_SUCCESS_URL = "/home";
    public static final String USERNAME = "username";
    public static final String PASSWORD = "password";
}
