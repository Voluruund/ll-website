//API email
export function invioEmail(){
    $(document).on('click','#submit',function(){
      let postData = {
        "Nome": $("#name").val(),
        "Email" : $("#email").val(),
        "Content" : $("#content").val(),
      } ;
      //asynchronous http request
      $.ajax({
        url: "./php/email.php",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({"email": postData}),
        accept: "*/*",
        success: function(data)
        {  
          console.log(postData)
          console.log(data);
        },
        error: function(errorThrown)
        {
          console.log( errorThrown );
        }
    });
  });
}