package datn.sd12.datn.server.config;

import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

//@Component
public class CustomAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler{
    /*
    * Class xử lý khi đăng nhập thành công
    * + Xử lý chuyển hướng về previous url khi đăng nhập(nếu không có prev url thì chuyển về trang home), nếu dùng modal thì chuyển hướng về url hiện tại
    * + Xử lý chuyển hướng url theo role base
    * */
}
