// =================================================================
// Format Currency
const numberFormat = {
    formatVND: {
        locales: 'vi-VN', // string or string[]
        options: { // NumberFormatOptions
            style: 'currency',
            currency: 'VND'
        }
    }
}
export const formatCurrency = { // chỉ hỗ trợ những trình duyệt mới
    // VND: new Intl.NumberFormat(numberFormat.formatVND.toString()),
    VND: new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }),
    USD: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

// Hàm chuyển đổi định dạng tiền, chỉ sử dụng cho trình duyệt mới
// function formatCurrency(amount) {
//     // Sử dụng Intl.NumberFormat để định dạng tiền tệ
//     const formatter = new Intl.NumberFormat('vi-VN', {
//         style: 'currency',
//         currency: 'VND',
//     });
//
//     // Sử dụng hàm format để định dạng số tiền
//     return formatter.format(amount);
// }

// hàm format hỗ trợ trình duyệt mới và cũ
// function formatCurrency(amount) {
//     const parts = amount.toString().split('.');
//     const integerPart = parts[0];
//     const decimalPart = parts[1] || '00';
//
//     const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//     let formattedMoney = integerWithCommas + `₫`;
//
//     if (decimalPart !== '00') {
//         formattedMoney += '.' + decimalPart;
//     }
//
//     return formattedMoney;
// }

// export const x = (number) => { return number.toLocaleString("vi-VN", {style:"currency", currency:"VND"});}

//  Format Currency
// =================================================================