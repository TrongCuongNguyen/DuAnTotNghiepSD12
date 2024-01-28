/*
+ $(function() {}) <=> $(document).ready(function(){}):
    - ngăn chặn mã jquery chạy trước khi tài liệu được tải xong
    - giúp có thể đặt mã jquery thông qua thê <script> trước thẻ <body> của tài liệu mà không cần đặt sau
      hoặc thêm defer trong thẻ <script>
*/
$(function () {
    "use strict";

    //Loader
    $(function preloaderLoad() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(300);
        }
        $(".preloader_disabler").on('click', function () {
            $("#preloader").hide();
        });
    });

    // Script Navigation
    !function (n, e, i, a) {
        n.navigation = function (t, s) {
            var o = {
                    responsive: !0,
                    mobileBreakpoint: 992,
                    showDuration: 300,
                    hideDuration: 300,
                    showDelayDuration: 0,
                    hideDelayDuration: 0,
                    submenuTrigger: "hover",
                    effect: "fade",
                    submenuIndicator: !0,
                    hideSubWhenGoOut: !0,
                    visibleSubmenusOnMobile: !1,
                    fixed: !1,
                    overlay: !0,
                    overlayColor: "rgba(0, 0, 0, 0.5)",
                    hidden: !1,
                    offCanvasSide: "left",
                    onInit: function () {
                    },
                    onShowOffCanvas: function () {
                    },
                    onHideOffCanvas: function () {
                    }
                }, u = this, r = Number.MAX_VALUE, d = 1, f = "click.nav touchstart.nav", l = "mouseenter.nav",
                c = "mouseleave.nav";
            u.settings = {};
            var t = (n(t), t);
            n(t).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>✕</span>"), n(t).find(".nav-search").length > 0 && n(t).find(".nav-search").find("form").prepend("<span class='nav-search-close-button'>✕</span>"), u.init = function () {
                u.settings = n.extend({}, o, s), "right" == u.settings.offCanvasSide && n(t).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"), u.settings.hidden && (n(t).addClass("navigation-hidden"), u.settings.mobileBreakpoint = 99999), v(), u.settings.fixed && n(t).addClass("navigation-fixed"), n(t).find(".nav-toggle").on("click touchstart", function (n) {
                    n.stopPropagation(), n.preventDefault(), u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")
                }), n(t).find(".nav-menus-wrapper-close-button").on("click touchstart", function () {
                    u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")
                }), n(t).find(".nav-search-button").on("click touchstart", function (n) {
                    n.stopPropagation(), n.preventDefault(), u.toggleSearch()
                }), n(t).find(".nav-search-close-button").on("click touchstart", function () {
                    u.toggleSearch()
                }), n(t).find(".megamenu-tabs").length > 0 && y(), n(e).resize(function () {
                    m(), C()
                }), m(), s !== a && u.callback("onInit")
            };
            var v = function () {
                n(t).find("li").each(function () {
                    n(this).children(".nav-dropdown,.megamenu-panel").length > 0 && (n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"), u.settings.submenuIndicator && n(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))
                })
            };
            u.showSubmenu = function (e, i) {
                g() > u.settings.mobileBreakpoint && n(t).find(".nav-search").find("form").slideUp(), "fade" == i ? n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).fadeIn(u.settings.showDuration) : n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).slideDown(u.settings.showDuration), n(e).addClass("nav-submenu-open")
            }, u.hideSubmenu = function (e, i) {
                "fade" == i ? n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).fadeOut(u.settings.hideDuration) : n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).slideUp(u.settings.hideDuration), n(e).removeClass("nav-submenu-open").find(".nav-submenu-open").removeClass("nav-submenu-open")
            };
            var h = function () {
                n("body").addClass("no-scroll"),
                u.settings.overlay && (n(t).append("<div class='nav-overlay-panel'></div>"),
                    n(t).find(".nav-overlay-panel").css("background-color", u.settings.overlayColor).fadeIn(300).on("click touchstart", function (n) {
                        u.hideOffcanvas()
                    }))
            }, p = function () {
                n("body").removeClass("no-scroll"), u.settings.overlay && n(t).find(".nav-overlay-panel").fadeOut(400, function () {
                    n(this).remove()
                })
            };
            u.showOffcanvas = function () {
                h(), "left" == u.settings.offCanvasSide ? n(t).find(".nav-menus-wrapper").css("transition-property", "left").addClass("nav-menus-wrapper-open") : n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open")
            }, u.hideOffcanvas = function () {
                n(t).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function () {
                    n(t).find(".nav-menus-wrapper").css("transition-property", "none").off()
                }), p()
            }, u.toggleOffcanvas = function () {
                g() <= u.settings.mobileBreakpoint && (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open") ? (u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")) : (u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")))
            }, u.toggleSearch = function () {
                "none" == n(t).find(".nav-search").find("form").css("display") ? (n(t).find(".nav-search").find("form").slideDown(), n(t).find(".nav-submenu").fadeOut(200)) : n(t).find(".nav-search").find("form").slideUp()
            };
            var m = function () {
                u.settings.responsive ? (g() <= u.settings.mobileBreakpoint && r > u.settings.mobileBreakpoint && (n(t).addClass("navigation-portrait").removeClass("navigation-landscape"), D()), g() > u.settings.mobileBreakpoint && d <= u.settings.mobileBreakpoint && (n(t).addClass("navigation-landscape").removeClass("navigation-portrait"), k(), p(), u.hideOffcanvas()), r = g(), d = g()) : k()
            }, b = function () {
                n("body").on("click.body touchstart.body", function (e) {
                    0 === n(e.target).closest(".navigation").length && (n(t).find(".nav-submenu").fadeOut(), n(t).find(".nav-submenu-open").removeClass("nav-submenu-open"), n(t).find(".nav-search").find("form").slideUp())
                })
            }, g = function () {
                return e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth
            }, w = function () {
                n(t).find(".nav-menu").find("li, a").off(f).off(l).off(c)
            }, C = function () {
                if (g() > u.settings.mobileBreakpoint) {
                    var e = n(t).outerWidth(!0);
                    n(t).find(".nav-menu").children("li").children(".nav-submenu").each(function () {
                        n(this).parent().position().left + n(this).outerWidth() > e ? n(this).css("right", 0) : n(this).css("right", "auto")
                    })
                }
            }, y = function () {
                function e(e) {
                    var i = n(e).children(".megamenu-tabs-nav").children("li"),
                        a = n(e).children(".megamenu-tabs-pane");
                    n(i).on("click.tabs touchstart.tabs", function (e) {
                        e.stopPropagation(), e.preventDefault(), n(i).removeClass("active"), n(this).addClass("active"), n(a).hide(0).removeClass("active"), n(a[n(this).index()]).show(0).addClass("active")
                    })
                }

                if (n(t).find(".megamenu-tabs").length > 0) for (var i = n(t).find(".megamenu-tabs"), a = 0; a < i.length; a++) e(i[a])
            }, k = function () {
                w(), n(t).find(".nav-submenu").hide(0), navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || "click" == u.settings.submenuTrigger ? n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(f, function (i) {
                    if (u.hideSubmenu(n(this).parent("li").siblings("li"), u.settings.effect), n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(u.settings.hideDuration), n(this).siblings(".nav-submenu").length > 0) {
                        if (i.stopPropagation(), i.preventDefault(), "none" == n(this).siblings(".nav-submenu").css("display")) return u.showSubmenu(n(this).parent("li"), u.settings.effect), C(), !1;
                        if (u.hideSubmenu(n(this).parent("li"), u.settings.effect), "_blank" == n(this).attr("target") || "blank" == n(this).attr("target")) e.open(n(this).attr("href")); else {
                            if ("#" == n(this).attr("href") || "" == n(this).attr("href")) return !1;
                            e.location.href = n(this).attr("href")
                        }
                    }
                }) : n(t).find(".nav-menu").find("li").on(l, function () {
                    u.showSubmenu(this, u.settings.effect), C()
                }).on(c, function () {
                    u.hideSubmenu(this, u.settings.effect)
                }), u.settings.hideSubWhenGoOut && b()
            }, D = function () {
                w(), n(t).find(".nav-submenu").hide(0), u.settings.visibleSubmenusOnMobile ? n(t).find(".nav-submenu").show(0) : (n(t).find(".nav-submenu").hide(0), n(t).find(".submenu-indicator").removeClass("submenu-indicator-up"), u.settings.submenuIndicator ? n(t).find(".submenu-indicator").on(f, function (e) {
                    return e.stopPropagation(), e.preventDefault(), u.hideSubmenu(n(this).parent("a").parent("li").siblings("li"), "slide"), u.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).parent("a").siblings(".nav-submenu").css("display") ? (n(this).addClass("submenu-indicator-up"), n(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), u.showSubmenu(n(this).parent("a").parent("li"), "slide"), !1) : (n(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), void u.hideSubmenu(n(this).parent("a").parent("li"), "slide"))
                }) : k())
            };
            u.callback = function (n) {
                s[n] !== a && s[n].call(t)
            }, u.init()
        }, n.fn.navigation = function (e) {
            return this.each(function () {
                if (a === n(this).data("navigation")) {
                    var i = new n.navigation(this, e);
                    n(this).data("navigation", i)
                }
            })
        }
    }(jQuery, window, document), $(document).ready(function () {
        $("#navigation").navigation()
    });

    // Product Preview
    $('.sp-wrap').smoothproducts();

    // Range Slider Script
    $(".js-range-slider").ionRangeSlider({
        type: "double", min: 0, max: 1000, from: 100, to: 750, grid: true
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Snackbar for Add To Cart Product
    $('.snackbar-addcart').click(function () {
        Snackbar.show({
            text: 'Your product was added to cart successfully!',
            pos: 'top-right',
            showAction: false,
            actionText: "Dismiss",
            duration: 3000,
            textColor: '#fff',
            backgroundColor: '#151515'
        });
    });

    // Snackbar for wishlist Product
    $('.snackbar-wishlist').click(function () {
        Snackbar.show({
            text: 'Your product was added to wishlist successfully!',
            pos: 'top-right',
            showAction: false,
            actionText: "Dismiss",
            duration: 3000,
            textColor: '#fff',
            backgroundColor: '#151515'
        });
    });


    // Script For Fix Header on Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".header").addClass("header-fixed");
        } else {
            $(".header").removeClass("header-fixed");
        }
    });

    // Brand-slide
    $('.smart-brand').slick({
        slidesToShow: 6, arrows: false, dots: false, infinite: true, autoplaySpeed: 2000, autoplay: true, responsive: [{
            breakpoint: 1024, settings: {
                arrows: false, dots: false, slidesToShow: 4
            }
        }, {
            breakpoint: 600, settings: {
                arrows: false, dots: false, slidesToShow: 3
            }
        }]
    });

    // reviews-slide
    $('.reviews-slide').slick({
        slidesToShow: 1, arrows: true, dots: false, infinite: true, autoplaySpeed: 2000, autoplay: true, responsive: [{
            breakpoint: 1024, settings: {
                arrows: true, dots: false, slidesToShow: 1
            }
        }, {
            breakpoint: 600, settings: {
                arrows: true, dots: false, slidesToShow: 1
            }
        }]
    });

    // quick_view_slide
    $('.quick_view_slide').slick({
        slidesToShow: 1, arrows: true, dots: true, infinite: true, autoplaySpeed: 2000, autoplay: true, responsive: [{
            breakpoint: 1024, settings: {
                arrows: true, dots: true, slidesToShow: 1
            }
        }, {
            breakpoint: 600, settings: {
                arrows: true, dots: true, slidesToShow: 1
            }
        }]
    });

    // item Slide
    $('.slide_items').slick({
        slidesToShow: 4,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [{
            breakpoint: 1024, settings: {
                arrows: true, dots: false, slidesToShow: 3
            }
        }, {
            breakpoint: 600, settings: {
                arrows: true, dots: false, slidesToShow: 1
            }
        }]
    });

    // Home Slider
    $('.home-slider').slick({
        centerMode: false, slidesToShow: 1, arrows: true, dots: true, responsive: [{
            breakpoint: 768, settings: {
                arrows: true, slidesToShow: 1
            }
        }, {
            breakpoint: 480, settings: {
                arrows: true, slidesToShow: 1
            }
        }]
    });
    // =============================
    // BackToTop Button Start
    $(window).on('scroll', function () { // show back to top button when scrolling down
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });

    $("#back2Top").on("click", function (e) { // click to button to scroll top
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    })
    // BackToTop Button End
    // =============================

    // fullwidth home slider
    function inlineCSS() {
        $(".home-slider .item").each(function () {
            const API_URL = "http://localhost:8080/";
            var attrImageBG = $(this).attr('data-background-image');
            var attrColorBG = $(this).attr('data-background-color');
            if (attrImageBG !== undefined) {
                $(this).css('background-image', 'url(' + API_URL + attrImageBG + ')');
            }
            if (attrColorBG !== undefined) {
                $(this).css('background', '' + attrColorBG + '');
            }
        });
    }

    inlineCSS();


    // ============================================
    // SHOPPING CART START
    const BASE_URL = "http://localhost:8080";
    const BASE_API_URL = BASE_URL + "/api";
    const API_VERSION = "v1.0";
    const API_URL = BASE_API_URL + "/" + API_VERSION;
    const API_PRODUCT = API_URL + "/products"

    var productQuickView = null; // tao bien local de test chuc nang khi chua viet api
    var temp = null; // luu 1 bien phu de giu lai du lieu cua productQuickView

    const products = {
        getProductById: function (id) {

        },
        getProductByCategory: function (category) {

        }
    };
    const formatCurrency = {
        VND: new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }),
        USD: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    function getProductById(id) {
        $.ajax({
            url: API_PRODUCT + "/" + id,
            type: "GET",
            dataType: "json",
            success: function (data) {
                return data;
            },
            error: function (error) {
                console.error("Lỗi khi gọi API: " + error);
            }
        });
    }

    // sự kiện xem nhanh sản phẩm: Quick View
    function handleQuickView($quickView) {
        let productId = $quickView.data('id');
        // Gọi API sử dụng AJAX để lấy dữ liệu sản phẩm
        $.ajax({
            url: API_PRODUCT + "/" + productId,
            type: "GET",
            dataType: "json",
            success: function (data) {
                // Sau khi API trả về dữ liệu, cập nhật thông tin sản phẩm
                const product = data;
                productQuickView = data;// su dung object de loc, cai nay phai dung api
                temp = data;// su dung object de loc, cai nay phai dung api
                console.log(productQuickView);
                renderQuickView(productQuickView);
                // Mở modal sau khi cập nhật thông tin sản phẩm
                // $('#quick-view').modal('show');
                // $('#quick-view').show();
            },
            error: function (error) {
                console.error("Lỗi khi gọi API: " + error);
            }
        });
    }

    // hàm render quick view khi click vào sản phẩm
    function renderQuickView(product) {
        // => Tìm cách sử lý thông minh hơn, đoạn sau hơi hardcode
        // Tạo mảng riêng lẻ để lưu trữ các màu và size duy nhất
        const uniqueColors = [];
        const uniqueSizes = [];

        // Duyệt qua danh sách sản phẩm chi tiết
        product.sanPhamChiTietList.forEach(productDetail => {
            // Lấy màu và size của sản phẩm chi tiết hiện tại
            const color = productDetail.mauSac; //{id, code, name, colorCode }
            const size = productDetail.kichCo; // {id, code, name}

            // Kiểm tra xem màu đã tồn tại trong mảng uniqueColor chưa
            const isDuplicateColor = uniqueColors.some((unique) => unique.ma === color.ma); // co the de id
            const isDuplicateSize = uniqueSizes.some((unique) => unique.ma === size.ma); // co the de id

            // Nếu màu chưa tồn tại, thêm vào mảng uniqueColors
            if (!isDuplicateColor) { // !uniqueColors.includes(color) khong su dung duoc vi no so sanh gia tri bang toan tu ===, con color la 1 object
                uniqueColors.push(color);
            }
            // Nếu kích cỡ chưa tồn tại, thêm vào mảng uniqueSizes
            if (!isDuplicateSize) {
                uniqueSizes.push(size);
            }
        });
        // Lấy thông tin sản phẩm
        const productName = product.ten;
        let productImage = "";
        let productColor = "";
        let productSize = "";

        uniqueColors.forEach((color, index) => { // <=> uniqueColors.forEach(function(colors) {...});
            productColor +=
                `<div class="form-check form-option form-check-inline mb-1">
                            <input class="form-check-input color-option-input" data-color-id="${color.id}" type="radio" value="${color.ten}" name="color-option" id="color${index + 1}">
                            <label class="form-option-label rounded-circle" for="color${index + 1}">
                               <span class="form-option-color rounded-circle" style="background-color: ${color.maMau}"></span>
                            </label>
                        </div>` + '\n';
        });

        uniqueSizes.forEach((size, index) => {
            productSize +=
                `<div class="form-check size-option form-option form-check-inline mb-2">
                           <input class="form-check-input" type="radio" data-size-id="${size.id}" value="${size.ten}" name="size-option" id="size${index + 1}"> <!-- checked=""-->
                           <label class="form-option-label rounded" for="size${index + 1}">${size.ten}</label>
                        </div>` + '\n';
        });

        console.log(productColor);

        // $('quickview .product-image').html();
        $('#quick-view .product-name').html(productName);
        $('#quick-view .product-color').html(productColor)
        $('#quick-view .product-size').html(productSize)
        // => hardcode
    }

    // sự kiện người dùng chọn màu
    function handleSelectedColor($selectedColor) {
        console.log('Color option clicked')
        var selectedColor = $selectedColor.val();
        var selectedSize = $("input[name='size-option']:checked").val();
        console.log(productQuickView);
        // Tìm sản phẩm chi tiết tương ứng dựa trên màu và size
        var selectedProduct = productQuickView.sanPhamChiTietList.filter(function (productDetail) { // tao bien local productQuickView de test, cai nay call api cho le
            // return productDetail.mauSac.id === selectedColor && productDetail.kichCo.id === selectedSize;
            return productDetail.mauSac.ma === selectedColor; // chuan hon thi lam id
        });
        // var temp = productQuickView; // luu 1 bien phu de giu lai du lieu cua productQuickView
        temp.sanPhamChiTietList = selectedProduct;
        console.log(selectedProduct);
        console.log(productQuickView);
        console.log(temp);

        renderQuickView(temp);

        // // Kiểm tra xem sản phẩm có tồn tại không
        // if (selectedProduct) {
        //     // Cập nhật thông tin sản phẩm trên modal
        //     $("#modal-title").text(selectedProduct.ten);
        //     $("#modal-price").text(selectedProduct.giaBan);
        //     // Cập nhật hình ảnh, thông tin khác...
        //
        //     // Kiểm tra trạng thái sản phẩm
        //     if (selectedProduct.trangThai === 0) {
        //         // Sản phẩm hết hàng, thực hiện xử lý tương ứng
        //     }
        // }
    };

    // Sự kiện khi modal được hiển thị, sẽ add thêm sự kiện cho các input được sinh ra bằng event delegation
    $("#quick-view").on("shown.bs.modal", function () {
        // Gắn sự kiện cho các ô input màu và size bằng event delegation

        $(this).on("click", "input[name='color-option']", function () {
            // Xử lý sự kiện khi người dùng chọn màu
            const colorName = $(this).val();
            const colorId = $(this).data("color-id");
            // Thực hiện xử lý với màu đã chọn
            $(".product-color-name").html("Màu sắc: " + colorName);

            let isSelectedSize = $("input[name='size-option']:checked").length > 0;
            // Nếu size đã được chọn
            if (isSelectedSize) {
                // Tìm sản phẩm chi tiết tương ứng dựa trên màu và size
                const selectedProduct = productQuickView.sanPhamChiTietList.find(function (productDetail) { // tao bien local productQuickView de test, cai nay call api cho le
                    return productDetail.mauSac.id === colorId && productDetail.kichCo.id === $("input[name='size-option']:checked").data("size-id");
                });
                console.log(selectedProduct);
                $(".product-variant .product-id").val(selectedProduct.id); // tạm thời xét cho input=hidden
                // $(".product-variant .product-id").attr("product-id",selectedProduct.id);
                // $(".product-variant .product-id").data("product-id",selectedProduct.id);
            }

            console.log(colorId, typeof colorId, $("input[name='size-option']:checked").data("size-id"))


            // handleSelectedColor($(this));
        });

        $(this).on("click", "input[name='size-option']", function () {
            // Xử lý sự kiện khi người dùng chọn size
            const sizeName = $(this).val();
            const sizeId = $(this).data("size-id");
            // Thực hiện xử lý với size đã chọn
            $(".product-size-name").html("Kích cỡ: " + sizeName);
            let isSelectedColor = $("input[name='color-option']:checked").length > 0;
            if (isSelectedColor) {
                // Tìm sản phẩm chi tiết tương ứng dựa trên màu và size
                const selectedProduct = productQuickView.sanPhamChiTietList.find(function (productDetail) { // tao bien local productQuickView de test, cai nay call api cho le
                    return productDetail.kichCo.id === sizeId && productDetail.mauSac.id === $("input[name='color-option']:checked").data("color-id");
                });
                // console.log(colorId, typeof colorId, $("input[name='size-option']:checked").data("size-id"))
                console.log(selectedProduct);
                // $(".product-variant .product-id").data("product-id", selectedProduct.id);
                $(".product-variant .product-id").val(selectedProduct.id); // tạm thời xét cho input=hidden
            }
        });

        // $(this).on("click", "#add-to-cart", function (e) {
        //     e.preventDefault();
        //     console.log('Clicked add to cart');
        //     const productVariant = {
        //         id: 1,
        //         ten: $(".product-variant .product-name").text(),
        //         mauSac: $(".product-variant input[name='color-option']:checked").val(),
        //         kichCo: $(".product-variant input[name='size-option']:checked").val(),
        //         soLuong: $(".product-variant .quantity").val()
        //     }
        //     console.log(productVariant);
        // })
    });

    // Thêm sự kiện click button quick view
    $('.btn-quick-view').on('click', function () {
        console.log('Quick view clicked')
        handleQuickView($(this));
    })

    // Sự kiện khi người dùng chọn màu
    $("input[name='color-option']").on("click", () => {
        console.log("Color option clicked")
    });

    $("input[name='color-option']").each(function () {
        $(this).on("click", function () {
            console.log('Color option clicked')
            var selectedColor = $(this).val();
            var selectedSize = $("input[name='size-option']:checked").val();

            // Tìm sản phẩm chi tiết tương ứng dựa trên màu và size
            var selectedProduct = productQuickView.sanPhamChiTietList.find(function (productDetail) { // tao bien local productQuickView de test, cai nay call api cho le
                // return productDetail.mauSac.id === selectedColor && productDetail.kichCo.id === selectedSize;
                return productDetail.mauSac.id === selectedColor;
            });
            console.log(selectedProduct);

            renderQuickView(selectedProduct);

            // // Kiểm tra xem sản phẩm có tồn tại không
            // if (selectedProduct) {
            //     // Cập nhật thông tin sản phẩm trên modal
            //     $("#modal-title").text(selectedProduct.ten);
            //     $("#modal-price").text(selectedProduct.giaBan);
            //     // Cập nhật hình ảnh, thông tin khác...
            //
            //     // Kiểm tra trạng thái sản phẩm
            //     if (selectedProduct.trangThai === 0) {
            //         // Sản phẩm hết hàng, thực hiện xử lý tương ứng
            //     }
            // }
        })
    });

    // $('.color-option-input').on("click", function () {
    //     console.log('Color option clicked')
    //     var selectedColor = $(this).val();
    //     var selectedSize = $("input[name='size-option']:checked").val();
    //
    //     // Tìm sản phẩm chi tiết tương ứng dựa trên màu và size
    //     var selectedProduct = productQuickView.sanPhamChiTietList.find(function (productDetail) { // tao bien local productQuickView de test, cai nay call api cho le
    //         // return productDetail.mauSac.id === selectedColor && productDetail.kichCo.id === selectedSize;
    //         return productDetail.mauSac.id === selectedColor;
    //     });
    //     console.log(selectedProduct);
    //
    //     handleChangeQuickView(selectedProduct);
    //
    //     // // Kiểm tra xem sản phẩm có tồn tại không
    //     // if (selectedProduct) {
    //     //     // Cập nhật thông tin sản phẩm trên modal
    //     //     $("#modal-title").text(selectedProduct.ten);
    //     //     $("#modal-price").text(selectedProduct.giaBan);
    //     //     // Cập nhật hình ảnh, thông tin khác...
    //     //
    //     //     // Kiểm tra trạng thái sản phẩm
    //     //     if (selectedProduct.trangThai === 0) {
    //     //         // Sản phẩm hết hàng, thực hiện xử lý tương ứng
    //     //     }
    //     // }
    // })

// Sự kiện khi người dùng chọn size, cái này chỉ áp dụng cho các ô input được tải trong giao diện khi load trang lần đầu, nếu là input tự sinh ra thì sẽ không gắn được
//     console.log($("input[name='size-option']"))
//     $("input[name='size-option']").on("click", function () {
//         var selectedColor = $("input[name='color-option']:checked").val();
//         var selectedSize = $(this).val();
//
//         // Tìm sản phẩm chi tiết tương ứng dựa trên màu và size
//         var selectedProduct = product.sanPhamChiTietList.find(function (productDetail) { // find chi tim phan tu dau tien khong tra ve tat ca phan tu thoa man
//             return productDetail.mauSac.id === selectedColor && productDetail.kichCo.id === selectedSize;
//         });
//
//         // Kiểm tra xem sản phẩm có tồn tại không
//         if (selectedProduct) {
//             // Cập nhật thông tin sản phẩm trên modal
//             $("#modal-title").text(selectedProduct.ten);
//             $("#modal-price").text(selectedProduct.giaBan);
//             // Cập nhật hình ảnh, thông tin khác...
//
//             // Kiểm tra trạng thái sản phẩm
//             if (selectedProduct.trangThai === 0) {
//                 // Sản phẩm hết hàng, thực hiện xử lý tương ứng
//             }
//         }
//     });

    // sự kiện thêm sản phẩm vào giỏ hàng: Add to Cart
    function handleAddToCart() {

    }

    // hàm tự gọi khi website tải lần đầu
    (function initCartModal() {
        console.log("Call once")
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        $(".cart-quantity").text(cart.length);
        // gọi hàm này luôn thì sẽ sinh ra view của cart thì add được sự kiện nút xóa được sinh ra trong handlerChangeCart
        // nếu gọi qua sự kiện khác sau đó sinh ra view cart thì lại phải dùng event delegating thì event nút xóa mới hoạt động được
        renderCartModal(cart);
    })();

    (function initShoppingCart() {
        console.log("Call once")
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        $(".cart-quantity").text(cart.length);
        // gọi hàm này luôn thì sẽ sinh ra view của cart thì add được sự kiện nút xóa được sinh ra trong handlerChangeCart
        // nếu gọi qua sự kiện khác sau đó sinh ra view cart thì lại phải dùng event delegating thì event nút xóa mới hoạt động được
        renderShoppingCart(cart);
    })();

    // var cart = JSON.parse(localStorage.getItem('cart')) || []; // tao bien local de test them gio hang
    $("#add-to-cart").on("click", function (e) {
        e.preventDefault(); // ngan submit form mac dinh
        console.log('Clicked add to cart');
        let test = $(".product-variant .product-id");
        /*
        * chỉ cần lưu id sản phẩm chi tiết(idProductVariant) và số lượng mua(quantity) là đủ
        * sau đó call api để lấy các thông tin khác rồi load về giỏ hàng
        * */
        let isSelectedColor = $(".product-variant input[name='color-option']:checked").length > 0;
        // let isSelectedColor = $(".product-variant input[name='color-option']:checked").length != 0 ? true : false;
        let isSelectedSize = $(".product-variant input[name='size-option']:checked").length > 0;
        console.log(isSelectedColor, isSelectedSize);
        if (!isSelectedSize || !isSelectedColor) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Bạn cần chọn các thuộc tính sản phẩm!',
            })
        } else {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const productVariant = {
                id: parseInt(test.val()),
                ten: $(".product-variant .product-name").text(),
                mauSac: $(".product-variant input[name='color-option']:checked").val(),
                kichCo: $(".product-variant input[name='size-option']:checked").val(),
                soLuong: parseInt($(".product-variant .quantity").val())
            }
            var existingProduct = cart.find(function (item) {
                return item.id === productVariant.id;
            });

            if (existingProduct) {
                // existingProduct.quantity += 1;
                existingProduct.soLuong += productVariant.soLuong;
            } else {
                cart.push(productVariant);
            }
            localStorage.setItem('cart', JSON.stringify(cart)); // luu cart vao localStorage
            $(".cart-quantity").text(cart.length);
            // thong bao them gio hang thanh cong, nen dung toastify thay vi modal alert
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Thêm vào giỏ hàng thành công',
            })
            renderCartModal(cart); // update view cart sidebar
            console.log(productVariant);
            console.log(cart);
        }
    })

    // const handerChangeCart = function a() {
    //
    // }
    function renderCartModal(cart) {
        let cartHtml = ""; // $(".cart_container").empty();
        if (cart.length > 0) {
            let cartItemsHtml = "";
            cart.forEach((item, index) => {
                cartItemsHtml += `
               <div class="cart-item d-flex align-items-center justify-content-between ${(index == cart.length - 1) ? '' : 'br-bottom'} p-3" data-cart-item-id="${item.id}">
                   <div class="cart_single d-flex align-items-center">
                      <div class="cart_selected_single_thumb">
                         <a href="#">
                            <img src="${BASE_URL}/static/assets/shop/img/product/7.jpg" class="rounded" width="60" alt="Product Image"/>
                         </a>
                      </div>
                      <div class="cart_single_caption pl-2 pr-3">
                         <h4 class="product_title fs-sm ft-medium mb-0 lh-1">${item.ten}</h4>
                         <p class="mb-2">
                            <span class="text-dark ft-medium small">${item.kichCo}</span>, 
                            <span class="text-dark small">${item.mauSac}</span>
                         </p>
                         <div class="d-flex align-items-center justify-content-between">
                            <h4 class="fs-md ft-medium mb-0 lh-1 ">$129</h4>
                            <div class="input-group input-group-xs">
                              <button class="btn btn-outline-main1 rounded-left minus" type="button">
                                 <i class="fi fi-rr-minus-small"></i>
                              </button>
                              <input type="text" class="form-control quantity text-center" value="${item.soLuong}">
                              <button class="btn btn-outline-main1 rounded-right add" type="button">
                                 <i class="fi fi-rr-plus-small"></i>
                              </button>
                           </div>
                         </div>
                      </div>
                   </div>
                   <div class="fls_last">
                      <a href="#" class="remove-product"><i class="fi fi-rr-trash" style="font-size: 16px"></i></a>
                   </div>
               </div>
            ` + "\n";
            });

            cartHtml += `
            <div class="cart_items_container py-2">
               ${cartItemsHtml}
            </div>
            
            <div class="d-flex align-items-center justify-content-between br-top br-bottom px-3 py-3">
               <h6 class="mb-0">Tổng tiền</h6>
               <h3 class="mb-0 ft-medium sub_total">$1023</h3>
            </div>

            <div class="cart_action px-3 py-3">
               <div class="form-group">
                  <a href="${BASE_URL}/checkout" type="button" class="btn d-block full-width btn-main1 rounded">Thanh toán
                  ngay</a>
               </div>
               <div class="form-group">
                  <a href="${BASE_URL}/shopping-cart" type="button" class="btn d-block full-width btn-outline-main1 rounded">Chỉnh
                  sửa hoặc Xem</a>
               </div>
            </div>
            `
            // $(".cart_items_container").html(cartHtml);
        } else {
            cartHtml += `
               <div class="cart_empty p-3">
                  <div class="d-flex align-items-center justify-content-center">
                     <img src="${BASE_URL}/static/assets/shop/img/cart_empty.png" style="width: 120px">
                  </div>
                  <h4 class="text-center fs-sm ft-medium my-3">Không có sản phẩm nào!</h4>
               <div class="form-group">
                  <a href="${BASE_URL}/" type="button" class="btn d-block full-width btn-main1 rounded">Về trang chủ</a>
               </div>
               </div>
            `;
        }
        $(".cart_modal_container").html(cartHtml);
    }

    function renderShoppingCart(cart) {
        let cartHtml = ""; // $(".cart_container").empty();
        if (cart.length > 0) {
            let cartItemsHtml = "";
            cart.forEach((item, index) => {
                cartItemsHtml += `
                <!--  Single item-->
                     <tr class="cart-item">
                        <td><input type="checkbox"></td>
                        <td>
                           <div class="d-flex align-items-center justify-content-between">
                              <div class="">
                                 <!-- Image -->
                                 <a href="#">
                                    <img class="rounded" src="${BASE_URL}/static/assets/shop/img/product/7.jpg" alt="..."
                                         style="width: 80px">
                                 </a>
                              </div>
                              <div class="cart_single_caption pl-2">
                                 <h4 class="product_title fs-md ft-medium mb-1 lh-1">
                                    <a href="#">${item.ten}</a>
                                 </h4>
                                 <p class="mb-1 lh-1"><span class="text-dark">Size: ${item.kichCo}</span></p>
                                 <p class="mb-3 lh-1"><span class="text-dark">Color: ${item.mauSac}</span></p>
                              </div>
                           </div>
                        </td>
                        <td nowrap="true"><h4 class="fs-md ft-medium m-0 lh-1 price">129.000 &#8363;</h4></td>
                        <td>
                           <div class="input-group input-group-sm">
                              <button class="btn btn-outline-main1 rounded-left minus" type="button">
                                 <i class="fi fi-rr-minus-small"></i>
                              </button>
                              <input type="text" class="form-control quantity text-center" value="1">
                              <button class="btn btn-outline-main1 rounded-right add" type="button">
                                 <i class="fi fi-rr-plus-small"></i>
                              </button>
                           </div>
                        </td>
                        <td nowrap="true"><h4 class="fs-md text-danger ft-medium m-0 lh-1 sub-total-price">129.000 &#8363;</h4>
                        </td>
                        <td>
                           <a href="#" class="remove-product"><i class="fi fi-rr-trash" style="font-size: 16px"></i></a>
                        </td>
                     </tr>
            ` + "\n";
            });

            cartHtml += `
            <div class="col-12 col-lg-8 col-md-12"> <!-- padding right hơi to -->
               <div class="table-responsive bg-white rounded mb-3">
                  <table class="table table-borderless cart">
                     <thead>
                     <tr>
                        <th><input type="checkbox"></th>
                        <th nowrap="true">Sản phẩm</th>
                        <th nowrap="true">Đơn giá</th>
                        <th nowrap="true">Số lượng</th>
                        <th nowrap="true">Thành tiền</th>
                        <th>
                           <a href="#" class="remove-product">
                              <i class="fi fi-rr-trash" style="font-size: 16px"></i>
                           </a>
                        </th>
                     </tr>
                     </thead>
                     <tbody class="shopping_cart_items">
                        ${cartItemsHtml}
                     </tbody>
                  </table>
               </div>
            </div>
             <div class="col-12 col-md-12 col-lg-4">
               <div class="p-3 bg-white rounded">
                  <div class="cart_bill m-3">
                     <div class="br-bottom br-top py-2">
                        <div class="d-flex justify-content-between align-items-center my-1">
                           <span>Tạm tính</span> <span class="ml-auto text-dark ft-medium">$98.12</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center my-1">
                           <span>Phí giao hàng</span> <span class="ml-auto text-dark ft-medium">Miễn phí</span>
                        </div>
                     </div>
                     <div class="d-flex justify-content-between align-items-center pt-2">
                        <span>Tổng tiền</span> <span class="ml-auto text-danger fs-lg ft-medium">$98.12</span>
                     </div>
                  </div>

                  <a class="btn btn-block btn-main1 rounded mb-3" href="${BASE_URL}/checkout">Thanh toán ngay</a>

                  <a class="btn-link text-dark ft-medium" href="${BASE_URL}/">
                     <i class="ti-back-left mr-2"></i> Tiếp tục mua sắm
                  </a>
               </div>
            </div>
            `
            // $(".cart_items_container").html(cartHtml);
        } else {
            cartHtml += `
                <div class="col-12">
               <div class="cart_empty p-3 bg-white rounded">
                  <div class="d-flex justify-content-center align-items-center">
                     <img src="${BASE_URL}/static/assets/shop/img/cart_empty.png" style="width: 150px">
                  </div>
                  <div class="p-3">
                     <h4 class="text-center fs-sm ft-medium">
                        Không có sản phẩm nào!
                     </h4>
                     <p class="text-center">Hãy tham khảo thêm các sản phẩm khác ở cửa hàng nhé</p>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                     <div style="width: 280px;">
                        <a href="${BASE_URL}/" type="button" class="btn d-block btn-main1 rounded">Về trang chủ</a>
                     </div>
                  </div>

               </div>
            </div>
            `;
        }
        $(".shopping_cart_container").html(cartHtml);
    }

    // xóa cart-item trong view cart modal bằng event delegating trên phần tử cha có id=Cart, nên gộp sự kiện xóa thành 1 cái để dùng cho trang shopping cart
    $("#Cart").on("click", ".remove-cart-item-sidebar", function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let $cartItem = $(this).closest(".cart-item");
        let idCartItem = $cartItem.data('cart-item-id');
        if (cart.length > 0) {
            cart = cart.filter(c => c.id != idCartItem); // lọc ra cart không chứa idCartRemove
            if (cart.length > 0) {
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                localStorage.removeItem('cart');
            }
            // handerChangeCart(cart); //
            // $cartItem.remove(); // xóa về mặt view
        }
        renderCartModal(cart);
        $(".cart-quantity").text(cart.length); // thay đổi số lượng view item cart
    })

    // sự kiện sử lý xóa sản phẩm
    function handleDeleteItem($deleteItem) {
        $deleteItem.remove();
    }

    // sự kiện sử lý khi số lượng sản phẩm thay đổi
    function handleQuantityChange($input) {
        // tìm phần tử cha có class="list-group-item"
        let $item = $input.closest(".list-group-item");

        // lấy giá tiền trong phần tử có class="price" bằng cách lấy giá trị text và cắt chuỗi lấy số
        let price = parseInt($item.find(".price").text().replace(/\./g, '').replace(/₫|&#8363;/g, "").trim());
        // lấy số lượng sản phẩm trong input
        let quantity = parseInt($input.val());

        // // Kiểm tra nếu giá trị không phải là số hoặc là số âm thì đặt về giá trị 1
        // if (isNaN(quantity)) {
        //     console.log('Khong phai la so');
        //     $input.val('');
        // }
        // if (quantity < 0) {
        //     console.log('Da nhap so am');
        //     $input.val(1);
        // }

        // nếu số lượng về 0 sẽ hỏi người dùng có muốn xóa sản phẩm hay không
        if (quantity == 0) {
            Swal.fire({
                title: 'Bạn có muốn xóa sản phẩm?',
                text: "Bạn không thể khôi phục lại!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Đồng ý!',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Đã xóa!', text: 'Sản phẩm đã xóa khỏi giỏ hàng.', icon: 'success'
                    })
                    handleDeleteItem($item);
                } else {
                    quantity = 1;
                    $input.val(1);
                }
            })
        }

        let subTotal = price * quantity;
        // $item.find(".sub-total-price").text(subTotal.toFixed(0) + "₫");
        $item.find(".sub-total-price").text(formatCurrency.VND.format(subTotal));
    }

    function handleQuantityChange1($input) {
        // tìm phần tử cha có class="list-group-item"
        let $item = $input.closest(".cart-item");

        // lấy giá tiền trong phần tử có class="price" bằng cách lấy giá trị text và cắt chuỗi lấy số
        let price = parseInt($item.find(".price").text().replace(/\./g, "").replace(/₫|&#8363;/g, "").trim()); // dấu . trong giá thì sẽ là \. trong reg
        // console.log(price);

        // lấy số lượng sản phẩm trong input
        let quantity = parseInt($input.val());

        // // Kiểm tra nếu giá trị không phải là số hoặc là số âm thì đặt về giá trị 1
        // if (isNaN(quantity)) {
        //     console.log('Khong phai la so');
        //     $input.val('');
        // }
        // if (quantity < 0) {
        //     console.log('Da nhap so am');
        //     $input.val(1);
        // }

        // nếu số lượng về 0 sẽ hỏi người dùng có muốn xóa sản phẩm hay không
        if (quantity === 0) {
            Swal.fire({
                title: 'Bạn có muốn xóa sản phẩm?',
                text: "Bạn không thể khôi phục lại!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Đồng ý!',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Đã xóa!', text: 'Sản phẩm đã xóa khỏi giỏ hàng.', icon: 'success'
                    })
                    handleDeleteItem($item);
                } else {
                    quantity = 1;
                    $input.val(1);
                }
            })
        }

        let subTotal = price * quantity;
        // $item.find(".sub-total-price").text(subTotal.toFixed(0) + "₫");
        $item.find(".sub-total-price").text(formatCurrency.VND.format(subTotal));
    }

    // Sự kiện bấm nút tăng giảm số lượng sản phẩm
    $(".minus,.add").on("click", function () {
        /*
        * Tìm phần tử có class="quantity" trong phần tử cha có selector=div bằng
        * hàm .closest gần nhất của đối tượng click vào
        * */
        let $quantity = $(this).closest("div").find(".quantity");

        // lấy giá trị hiện tại của trường input và chuyển nó về số nguyên
        let currentVal = parseInt($quantity.val());

        // kiểm tra đối tượng click có selector="add" không
        let isAdd = $(this).hasClass("add");

        !isNaN(currentVal) && $quantity.val(isAdd ? ++currentVal : currentVal > 0 ? --currentVal : currentVal);
        // sử lý sự kiện khi giá trị quantity thay đổi
        handleQuantityChange($quantity);
        handleQuantityChange1($quantity);
    });

    // Sự kiện khi giá trị quantity thay đổi trong input, ngăn chặn nhập các giá trị không cho phép trong ô input
    $(".quantity").on("input keypress keyup", function (e) {
        var key = String.fromCharCode(e.which);
        if (!/^\d*$/.test(key)) {
            e.preventDefault(); // Ngăn việc nhập ký tự không phải số
        }
        handleQuantityChange($(this));
        handleQuantityChange1($(this));
    });

    $(".quantity").on("blur", function (e) { // khi blur ra ô input
        let value = parseInt($(this).val());
        if (isNaN(value)) {
            $(this).val(1);
        }
        handleQuantityChange($(this));
        handleQuantityChange1($(this));
    });

    // Sự kiện xóa sản phẩm trong giỏ hàng khi click vào nút xóa
    $(".remove-product").on("click", function () {
        var $li = $(this).closest(".list-group-item");
        $li.remove();
    });
    // SHOPPING CART END
    // ============================================
});