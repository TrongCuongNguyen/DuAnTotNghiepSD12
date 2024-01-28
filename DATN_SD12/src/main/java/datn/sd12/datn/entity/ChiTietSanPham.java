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
@Table(name = "chi_tiet_san_pham")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ChiTietSanPham {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    san_pham_id UNIQUEIDENTIFIER,
//    khuyen_mai_id UNIQUEIDENTIFIER,
//    hinh_anh_id UNIQUEIDENTIFIER,
//    kich_thuoc_id UNIQUEIDENTIFIER,
//    mau_sac_id UNIQUEIDENTIFIER,
//    chat_lieu_id UNIQUEIDENTIFIER,
//    de_giay_id UNIQUEIDENTIFIER,
//    danh_muc_id UNIQUEIDENTIFIER,
//    hang_id UNIQUEIDENTIFIER,
//    gia_nhap DECIMAL,
//    gia_ban DECIMAL,
//    so_luong INT,
//    QR_code int IDENTITY(20012003,1),
//    mo_ta NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    trang_thai INT
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private UUID sanPhamId;
    private UUID khuyenMaiId;
    private UUID hinhAnhId;
    private UUID kichThuocId;
    private UUID mauSacId;
    private UUID chatLieuId;
    private UUID deGiayId;
    private UUID danhMucId;
    private UUID hangId;
    private long giaNhap;
    private long giaBan;
    private int soLuong;
    private int QRCode;
    private String moTa;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
