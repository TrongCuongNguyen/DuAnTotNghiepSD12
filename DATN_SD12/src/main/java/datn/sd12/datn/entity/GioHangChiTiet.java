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
@Table(name = "gio_hang_chi_tiet")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class GioHangChiTiet {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    chi_tiet_sp_id UNIQUEIDENTIFIER,
//    gio_hang_id UNIQUEIDENTIFIER,
//    thanh_tien DECIMAL,
//    so_luong INT,
//    trang_thai INT,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private UUID chiTietSanPhamId;
    private UUID gioHangId;
    private long thanhTien;
    private int soLuong;
    private int trangThai;

}
