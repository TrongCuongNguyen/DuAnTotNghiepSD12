package datn.sd12.datn.server.constant;

public class EntityConstants {
    public static final int LENGTH_CODE = 50;
    private static final int LENGTH_FULL_NAME = 100;
    private static final int LENGTH_GENDER = 10;
    private static final String LENGTH_DESCRIPTION = "MAX";
    private static final int LENGTH_NAME_DEFAULT = 255;
    private static final int LENGTH_NAME_COLOR = 100;
    private static final int LENGTH_NAME_SIZE = 50;
    private static final String STRING_UTF8_TYPE = "NVARCHAR";
//    public static final String CODE = STRING_UTF8_TYPE + "(" + LENGTH_CODE + ")"; //String.format("%s(%d)", STRING_UTF8_TYPE, LENGTH_CODE);
    public static final String FULL_NAME = STRING_UTF8_TYPE + "(" + LENGTH_FULL_NAME + ")";
    public static final String GENDER = STRING_UTF8_TYPE + "(" + LENGTH_GENDER + ")";
    public static final String DESCRIPTION = STRING_UTF8_TYPE + "(" + LENGTH_DESCRIPTION + ")";
    public static final String NAME_DEFAULT = STRING_UTF8_TYPE + "(" + LENGTH_NAME_DEFAULT + ")";
    public static final String NAME_COLOR = STRING_UTF8_TYPE + "(" + LENGTH_NAME_COLOR + ")";
    public static final String NAME_SIZE = STRING_UTF8_TYPE + "(" + LENGTH_NAME_SIZE + ")";
}
