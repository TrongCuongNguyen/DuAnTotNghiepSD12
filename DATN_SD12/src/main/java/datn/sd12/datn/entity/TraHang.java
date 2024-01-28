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
@Table(name = "tra_hang")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TraHang {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    chi_tiet_san_pham_id UNIQUEIDENTIFIER,
//    so_luong int,
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    trang_thai INT
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private UUID chiTietSanPhamId;
    private int soLuong;
    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
