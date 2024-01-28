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
@Table(name = "khuyen_mai")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class KhuyenMai {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    ma VARCHAR(10),
//    ten NVARCHAR(50),
//    gia_tri_khuyen_mai DECIMAL,
//    ngay_bat_dau DATETIME,
//    ngay_ket_thuc DATETIME,
//    loai NVARCHAR(50),
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String ma;
    private String ten;
    private String giaTriKhuyenMai;
    private LocalDateTime ngayBatDau;
    private LocalDateTime ngayKetThuc;
    private String loai;

    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
