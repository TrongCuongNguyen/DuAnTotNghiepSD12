package datn.sd12.datn.server.config;


import datn.sd12.datn.server.config.jwt.JwtAuthenticationEntryPoint;
import datn.sd12.datn.server.config.jwt.JwtAuthenticationFilter;
import datn.sd12.datn.server.constant.SecurityConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @Bean
    public JwtAuthenticationFilter authenticationJwtTokenFilter() {
        return new JwtAuthenticationFilter();
    }

    @Bean(name = "passwordEncoder")
    public static PasswordEncoder passwordEncoder() { // de static de tao duy nhat 1 passwordEncoder
        return new BCryptPasswordEncoder();
    }

    @Bean(name = "securityFilterChain")
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> {
                    csrf.disable();
                })
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/staff/**").hasAnyRole("STAFF", "ADMIN")
                            .requestMatchers("/admins/**").hasRole("ADMIN")
                            .requestMatchers("/checkout").authenticated()
                            .anyRequest().permitAll();

                })
                .formLogin(form -> {
                    form
                            .loginPage("/login") // post
                            .loginProcessingUrl("/login")
                            .defaultSuccessUrl("/admin/**")
                            .usernameParameter(SecurityConstants.USERNAME)
                            .passwordParameter(SecurityConstants.PASSWORD)
                            .permitAll()
                    ;
                })

        ;


        return http.build();
    }


    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }


}
