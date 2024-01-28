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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "nhan_vien")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class NhanVien {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    chuc_vu_id UNIQUEIDENTIFIER,
//    cccd NVARCHAR(12),
//    ma VARCHAR(10),
//    ten NVARCHAR(50),
//    anh NVARCHAR(50),
//    gioi_tinh NVARCHAR(10),
//    ngay_sinh DATE,
//    so_dien_thoai NVARCHAR(11),
//    email NVARCHAR(50),
//    mat_khau NVARCHAR(50),
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private UUID chucVuId;
    private String cccd;
    private String ma;
    private String anh;
    private String ten;
    private String gioiTinh;
    private LocalDate ngaySinh;
    private String email;
    private String soDienThoai;
    private String matKhau;

    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
