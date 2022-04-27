$(document).ready(function(){
    let i = 2; // Khởi tạo số thứ tự
    $("#btnDK").click(function() {
        $("#myModal").modal();
    })
    function kiemtrama() {
        let maukt = /^[0-9]{10}$/;
        let chuoi = $("#txtMaSV").val();
        if (chuoi == "") {
          $("#tbMa").html("Bắt buộc nhập");
          return false;
        } else if (!maukt.test(chuoi)) {
          $("#tbMa").html("Nhập sai, chỉ dùng 10 chữ số");
          return false;
        } else {
          $("#tbMa").html("*");
          return true;
        }
      }
      $("#txtMaSV").blur(kiemtrama);
    
     // Kiểm tra họ tên
    function kiemtrahoten() {
        let chuoi = $("#txtHT").val();
        let maukt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if (chuoi == "") {
            $("#tbHoTen").html("Bắt buộc nhập");
            return false;
        } else if (!maukt.test(chuoi)) {
            $("#tbHoTen").html("Ký tự đầu tiên viết hoa, không sử dụng số");
            return false;
        } else {
            $("#tbHoTen").html("*");
            return true;
        }
    }
    $("#txtHT").blur(kiemtrahoten);
     // Kiểm tra email
    function kiemtraemail() {
        let chuoi = $("#txtEmail").val();
        let maukt = /^\w+([\.-]?w+)*@iuh.edu.vn$/;
        if (chuoi == "") {
            $("#tbEmail").html("Bắt buộc nhập");
            return false;
        } else if (!maukt.test(chuoi)) {
            $("#tbEmail").html("Nhập sai mẫu, nhập theo mẫu xxxxx@iuh.edu.vn");
        } else {
            $("#tbEmail").html("*");
            return true;
        }
    }
    $("#txtEmail").blur(kiemtraemail);
});
