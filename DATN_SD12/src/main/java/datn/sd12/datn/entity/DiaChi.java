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
@Table(name = "dia_chi")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class DiaChi {
    //    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
//    ten_nguoi_nhan NVARCHAR(50),
//    so_dien_thoai NVARCHAR(11),
//    id_xa VARCHAR(100),
//    id_huyen VARCHAR(100),
//    id_thanh_pho VARCHAR(100),
//    id_quoc_gia VARCHAR(100),
//    dia_chi NVARCHAR(50),
//    xa NVARCHAR(50),
//    huyen NVARCHAR(50),
//    thanh_pho NVARCHAR(50),
//    quoc_gia NVARCHAR(50),
//    trang_thai INT
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String tenNguoiNhan;
    private String soDienThoai;
    private String idXa;
    private String idThanhPho;
    private String idQuocGia;
    private String diaChi;
    private String xa;
    private String huyen;
    private String thanhPho;
    private String quocGia;
    private int trangThai;
}
