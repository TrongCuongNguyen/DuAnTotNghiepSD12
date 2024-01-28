package datn.sd12.datn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@SpringBootApplication
public class DatnApplication {

    public static void main(String[] args) {

        BCryptPasswordEncoder enc = new BCryptPasswordEncoder();
        System.out.println(enc.encode("123456"));
        SpringApplication.run(DatnApplication.class, args);
    }

}
