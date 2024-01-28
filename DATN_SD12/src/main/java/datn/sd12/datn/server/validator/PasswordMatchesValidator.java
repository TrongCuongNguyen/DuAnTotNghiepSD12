package datn.sd12.datn.server.validator;

//import com.hd84.dto.UserDTO;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, Object> {

    @Override
    public void initialize(PasswordMatches constraintAnnotation) {
    }

    @Override
    public boolean isValid(Object obj, ConstraintValidatorContext context){
//        UserDTO user = (UserDTO) obj;
//        return user.getPassword().equals(user.getMatchingPassword());

//        return user.getMatKhau().equals(user.getKhopMatKhau());
        return true;
    }
}
