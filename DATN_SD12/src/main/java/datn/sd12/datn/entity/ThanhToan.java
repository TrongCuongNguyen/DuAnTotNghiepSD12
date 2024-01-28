package datn.sd12.datn.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "thanh_toan")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ThanhToan {
//    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    hoa_don_id UNIQUEIDENTIFIER,
//    phuong_thuc_thanh_toan_id UNIQUEIDENTIFIER,
//    phuong_thuc NVARCHAR(50),
//    tien_mat nvarchar(50),
//    chuyen_khoan nvarchar(50),
//    phuong_thuc_vnp nvarchar(50),
//    mo_ta NVARCHAR(50),
//    tong_tien DECIMAL,
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private UUID hoaDonId;
    private UUID phuongThucThanhToanId;
    private String phuongThuc;
    private String tienMat;
    private String chuyenKhoan;
    private String phuongThucVnp;
    private String moTa;
    private long tongTien;
    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
