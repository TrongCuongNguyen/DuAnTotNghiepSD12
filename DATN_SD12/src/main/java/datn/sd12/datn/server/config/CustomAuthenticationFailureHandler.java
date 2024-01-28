package datn.sd12.datn.server.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindException;
import org.springframework.validation.Errors;

import java.io.IOException;

@Component
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {
    /*
     * Class xử lý khi đăng nhập thất bại
     * + Xử lý validate dữ liệu, có thể dùng js cho lẹ
     * + Xử lý việc mất dữ liệu khi chuyển hướng
     * */
    @Override
    public void onAuthenticationFailure(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception
    ) throws IOException, ServletException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
//        Errors errors = new BindException()
        String errUsername = "", errPassword = "";
        if (username.isBlank()) {
            errUsername = "Khong duoc trong";
        }
        if (password.isBlank()) {
            errPassword = "Khong duoc trong";
        }
        if (errUsername.isBlank() && errPassword.isBlank()) {
            response.sendRedirect("/login?error");
        } else {
            request.setAttribute("errorUsername", errUsername);
            request.setAttribute("errorPassword", errPassword);
            request.getRequestDispatcher("templates/shop/pages/login.html").forward(request, response);
        }
    }
}
