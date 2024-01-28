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
@Table(name = "hoa_don")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class HoaDon {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    ma VARCHAR(10),
//    khuyen_mai_id UNIQUEIDENTIFIER,
//    nhan_vien_id UNIQUEIDENTIFIER,
//    khach_hang_id UNIQUEIDENTIFIER,
//    voucher_id UNIQUEIDENTIFIER,
//    ngay_mua DATETIME,
//    gia_goc DECIMAL,
//    gia_giam_gia DECIMAL,
//    thanh_tien DECIMAL,
//    diem_su_dung int,
//    gia_tri_diem DECIMAL,
//    loai_hoa_don nvarchar(50),
//    ten_nguoi_nhan nvarchar(50),
//    so_dien_thoai nvarchar(11),
//    email varchar(50),
//    dia_chi nvarchar(50),
//    QR_code int IDENTITY(20012003,1),
//    ghi_chu nvarchar(100),
//    ngay_du_kien_nhan date,
//    ngay_nhan_hang date,
//    ngay_tra_hang date,

//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String ma;
    private UUID khuyenMaiId;
    private UUID nhanVienId;
    private UUID khachHangId;
    private UUID voucherId;
    private LocalDateTime ngayMua;
    private long giaGoc;
    private long giaGiamGia;
    private long thanhTien;
    private int diemSuDung;
    private long giaTriDiem;
    private String loaiHoaDon;
    private String tenNguoiNhan;
    private String soDienThoai;
    private String email;
    private String diaChi;
    private int QRCode;
    private String ghiChu;
    private LocalDate ngayDuKienNhan;
    private LocalDate ngayNhanHang;
    private LocalDate ngayTraHang;

    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
