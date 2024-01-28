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
@Table(name = "khach_hang")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class KhachHang {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    ma VARCHAR(10),
//    anh NVARCHAR(50),
//    ten NVARCHAR(50),
//    cccd NVARCHAR(12),
//    ngay_sinh DATE,
//    gioi_tinh NVARCHAR(10),
//    email varchar(50),
//    so_dien_thoai NVARCHAR(11),
//    dia_chi_id UNIQUEIDENTIFIER,
//    diem int,
//    ngay_tham_gia DATETIME,
//    hang_khach_hang NVARCHAR(50),
//    mat_khau VARCHAR(20),
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String ma;
    private String anh;
    private String ten;
    private String cccd;
    private LocalDate ngaySinh;
    private String gioiTinh;
    private String email;
    private String soDienThoai;
    private String diaChiId;
    private int diem;
    private LocalDateTime ngayThamGia;
    private String hangKhachHang;
    private String matKhau;

    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
