package datn.sd12.datn.repository;

import datn.sd12.datn.entity.ChatLieu;
import datn.sd12.datn.entity.KhachHang;
import datn.sd12.datn.entity.KhachHangVoucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface KhachHangVoucherRepository extends JpaRepository<KhachHangVoucher, UUID> {
}
