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

@Entity
@Table(name = "voucher")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Voucher {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    ma VARCHAR(10),
//    loai_voucher NVARCHAR(50),
//    ngay_bat_dau DATETIME,
//    ngay_ket_thuc DATETIME,
//    muc_do NVARCHAR(50),
//    giam_toi_da DECIMAL,
//    dieu_kien NVARCHAR(50),
//    so_luong int,
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String ma;
    private String loaiVoucher;
    private LocalDateTime ngayBatDau;
    private LocalDateTime ngayKetThuc;
    private String mucDo;
    private long giamToiDa;
    private String dieuKien;
    private int soLuong;
    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;
}
