// $(document).ready(
//     function() {
//         $('.button-add').click(
//             function() {
//                 let toAdd = $('input[name=listColors]').val();
//                 $('ul').append('<li>' + toAdd + '</li>' + '<br>');
//                 if (!toAdd) {
//                     alert(false);
//                 } else {
//                     toAdd;
//                 }
//             });

//         $("input[name=listColors]").keyup(function(event) {
//             if (event.keyCode == 13) {
//                 $(".button-add").click();
//             }
//         });

//         $(document).on('dblclick', 'li', function() {
//             $(this).toggleClass('strike').fadeOut('slow');
//         });

//         $('input').focus(function() {
//             $(this).val('');
//         });

//         $('ul').sortable();

//     }
// );



// $(document).ready(
//     function() {
//         $('.button-add').click(
//             function() {
//                 let toAdd = $('input[name=listColors]').val();
//                 if (!toAdd) {
//                     return false;
//                 }
//                 $('.list').append('<li class="size-1">' + '<input class="checkbox" type="checkbox">' + '</li>' + '<li class="size-2">' + toAdd + '</li>' + '<br>');
//             });

//     })


// $(document).ready(
//     function(){
//         $('.listColors').click(
//             function(){
//                 $('.').css('color', '#F00');
//             }
//         )
//     }
// )



// $(document).ready(
//     function() {
//         $('.button-add').click(
//             function() {
//                 let toAdd = $('input[name=listColors]').val();
//                 let li = $('ul li')
//                     // let value1 = $('#color1').val();
//                     // let value2 = $('#color2').val();
//                     // let value3 = $('#color3').val();
//                     // let value4 = $('#color4').val();
//                     // let value5 = $('#color5').val();
//                     // let value6 = $('#color6').val();
//                 $('select.size').val
//                     // console.log("value!!!!! ", value1);


//                 if (!toAdd) {
//                     return false;
//                 }
//                 // $(this).parent('li').addClass('.block1');
//                 $('ul').append('<li class="size-1 block1">' + '<input class="checkbox" type="checkbox">' + '</li>' + '<li class="size-2 block1">' + toAdd + '</li>' + '<br>');
//                 console.log(li);
//             });

//     })




// $("input[type='checkbox']").change(function() {
//     if ($(this).is(":checked")) {
//         $(this).parent().addClass("block2");

//     } else {
//         $(this).parent().removeClass("block2");
//     }
// });

//check off simple todo by clicking



// $(":checkbox").on("change", function() {
//     $(this).parent().toggleClass("checked", this.checked);
// });


// $("ul").on("click", "li", function() {
//     $(this).toggleClass("completed")
// });


$(document).ready(function() {
    $("#documents").on('click', '#li', function(event) {
        $this = $(this);
        if (event.target.tagName == "INPUT") $this.toggleClass('active');
        $this.find('input').prop('checked', $this.hasClass('active'));
    })
});