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
@Table(name = "gio_hang")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class GioHang {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    khach_hang_id UNIQUEIDENTIFIER,
//    nhan_vien_id UNIQUEIDENTIFIER,
//    ma VARCHAR(10),
//    nguoi_tao NVARCHAR(50),
//    nguoi_sua NVARCHAR(50),
//    ngay_tao DATETIME,
//    ngay_sua DATETIME,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private UUID khachHangId;
    private UUID nhanVienId;
    private String ma;
    private String nguoiTao;
    private String nguoiSua;
    private LocalDateTime ngayTao;
    private LocalDateTime ngaySua;
    private int trangThai;

}
