   $(document).ready(function() {
            $("#mycarousel").carousel({ interval : 2000});
            
            $("#carouselPause").click(function() {
                $("#mycarousel").carousel('pause');
            });
            
            $("#carouselPlay").click(function() {
                $("#mycarousel").carousel('cycle');
            });
        });
     
        $("#login").click(function() {
            $('#loginModal').modal('show');
        });
        
        $("#reserveTableBtn").click(function() {
           $('#reserveModal').modal('show'); 
        });

       /* Javascript code to initailize tooltip 
        $(document).ready(function(){
                    $('[data-toggle="tooltip"]').tooltip();
                });*/