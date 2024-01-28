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
@Table(name = "hoa_don_chi_tiet")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class HoaDonChiTiet {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    hoa_don_id UNIQUEIDENTIFIER,
//    chi_tiet_san_pham_id UNIQUEIDENTIFIER,
//    gia_sau_giam DECIMAL,
//    gia_giam DECIMAL,
//    so_luong INT,
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private UUID hoaDonId;
    private UUID chiTietSanPhamId;
    private long giaSauGiam;
    private long giaGiam;
    private int soLuong;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
