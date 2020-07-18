$(document).ready(function () {
    var i = 1;
    function KTTen() {
        var kt = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/; if ($("#txtTen").val() == "") {
            $("#tbTen").html("*Bắt buộc nhập !!");
            return false;
        }
        if (!kt.test($("#txtTen").val())) {
            $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa !!"); return false;
        }
        $("#tbTen").html("*"); return true;
    };
    $("#txtTen").blur(KTTen);
    function KTDC() {
        if ($("#txtDC").val() == "") {
            $("#tbDC").html("* Bắt buộc nhập"); return false;
        }
        $("#tbDC").html("*"); return true; 
    }
    $("#txtDC").blur(KTDC);
    function KTNgay() {
        if ($("#txtNgay").val() == "") {
            $("#tbNgay").html("*Bắt buộc nhập !!");
            return false;
        }
        var day = new Date($("#txtNgay").val()); var today = new Date; today.setDate(today.getDate() + 3); if (day < today) {
            $("#tbNgay").html("*Nhập ngày sau ngày hiện tại 3 ngày"); return false;
        }
        $("#tbNgay").html("*"); return true;
    };
    $("#txtNgay").blur(KTNgay);

    function KTSDT() {
        var sdt = /^[0-9]{3}\-\d{4}\-\d{3}$/; if ($("#txtSDT").val() == "") {
            $("#tbSDT").html("* Bắt buộc nhập");
            return false;
        }
        if (!sdt.test($("#txtSDT").val())) {
            $("#tbSDT").html("Nhập theo dạng 000-0000-000"); return false;
        }
        $("#tbSDT").html("*"); return true;
    };
    $("#txtSDT").blur(KTSDT);
    function KTMail() {
        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if ($("#txtMail").val() == "") {
            $("#tbMail").html("* Bắt buộc nhập");
            return false;
        }
        if (!mail.test($("#txtMail").val())) {
            $("#tbMail").html("* Nhập đúng định dạng mail");
            return false;
        }
        $("#tbMail").html("*");
        return true;
    }
    $("#txtMail").blur(KTMail);
    $("#btnSave").click(function () {
        if (!KTTen() || !KTDC() || !KTNgay() || !KTMail() || !KTSDT()) {
            $("#thongbao").html("*Nhập đúng và đủ thông tin"); return false;
        }
        var ten = $("#txtTen").val(); var diachi = $("#txtDC").val(); var ngay = $("#txtNgay").val(); var gmail = $("#txtMail").val(); var sdt = $("#txtSDT").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + ten + "</td><td>" + diachi + "</td><td>" + ngay + "</td><td>" + gmail + "</td><td>" + sdt + "</td></tr>";
        $("table").append(them);
        $("#myModal").modal("hide");
    });



$("#myBtn").click(function(){
    $("#myModal").modal();
});
});