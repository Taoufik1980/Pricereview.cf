//Code by Ghiasy Alexandre

let addProductUrl = './src/addnewproduct.php';

$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        var customerId = 1; //= $.cookie("customer_id");
        var fileData = $('#productfile').prop('files')[0];
        var formData = new FormData($('#myForm')[0]);
        formData.append('productfile', fileData);

        for (var item of formData.entries()) {
            console.log(item[0] + ', ' + item[1]);
        }

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: addProductUrl,
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            dataType: "JSON",
        }).done(function (data) {
            console.log(data);

            if (!data.success) {

                $("#errorsubmit").html("");
                $("#errorsubmit").css({ color: "red"});

                if (data.errors.productname) {
                  $("#errorsubmit").append(data.errors.productname);
                }

                if (data.errors.productprice) {
                  $("#errorsubmit").append(data.errors.productprice);
                }

                if (data.errors.productdescription) {
                  $("#errorsubmit").append(data.errors.productdescription);
                }

                if (data.errors.productfile) {
                  $("#errorsubmit").append(data.errors.productfile);
                }

                if (data.errors.producttaken) {
                  $("#errorsubmit").append(data.errors.producttaken);
                }

                if (data.errors.fileextension) {
                  $("#errorsubmit").append(data.errors.fileextension);
                }

                if (data.errors.uploaderror) {
                    $("#errorsubmit").append(data.errors.uploaderror);
                }

              } else {
                $("#errorsubmit").css({ color: "green"});
                $("#errorsubmit").html(data.message);
            }

        });

    });

});

function previewFile(input){
    var file = $("input[type=file]").get(0).files[0];

    if(file){
        var reader = new FileReader();

        reader.onload = function(){
            $("#productframe").attr("src", reader.result);
        }

        reader.readAsDataURL(file);
    }
}
