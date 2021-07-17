$(".btn-favorite").on("click", function(){
    $(this).toggleClass('active');
});


$(".btn-catalog").on("click", function(){
    $('.catalog-menu').addClass('show');
});

$(".btn-catalog-open").on("click", function(){
    $('.catalog-menu').removeClass('show');
});


/* add class if has ul children */
$('.catalog-menu__col>ul').parent().addClass('has-subnav');

/* menu */
$(".catalog-menu__col-title").on("click", function(){
    $(this).toggleClass('active');
});


/* basket header preview */
$(".header-user__basket").on("click", function(){
    $('.header-basket').toggleClass('show');
});


//  Author: Vlasenko Fedor, valsenkofedor@mail.ru
(function () {
    var plus = document.createElement("span");
    var minus = document.createElement("span");
    var div = document.createElement("div");
    
    div.className = "choice";
    plus.className = "plus";
    minus.className = "minus";
    plus.appendChild(document.createTextNode("+"));
    minus.appendChild(document.createTextNode("–"));
    div.appendChild(plus);
    div.appendChild(minus);

    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (fn, scope) {
            for (var i = 0, len = this.length; i < len; ++i) {
                fn.call(scope, this[i], i, this);
            }
        };
    }

     HTMLCollection.prototype.forEach = NodeList.prototype.forEach
    = Array.prototype.forEach;
    
    function build(el) {
        var new_el = div.cloneNode(true);
        new_el.appendChild(el.cloneNode());
        el.parentNode.replaceChild(new_el, el);
    }

    function num_click(e) {
        var el = e ? e.target : window.event.srcElement;
        if (el.tagName !== "SPAN") return;
        var inp = this.lastChild;
        var val = +inp.value;
        inp.value = val +(el.className == "plus" ? 1: val > 0 ? -1 : 0);
    }

    function num_input(e) {
        var el = e ? e.target : window.event.srcElement;
        if (el.tagName !== "INPUT") return;
        var val = el.value.replace(/\D/g, '');
        el.value = val ? val : 0;
    }

    document.querySelectorAll('input.number').forEach(build);
    document.querySelectorAll('div.choice').forEach(function (el) {
        el.onclick = num_click;
        el.oninput = num_input;
    });
}());



/* tabs */
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


$('.collapse-characteristics-table span').on('click', function (e) {
    $(this).parents('.collapse-characteristics-table').toggleClass('show');
    $('.characteristics-table__row_hidden').toggleClass('show');
    var btnLabel2 = $('.characteristics-table__row_hidden')
        .is(':visible')
        ? 'свернуть' : ' развернуть';
    $(e.target).text(btnLabel2);
});



/* slider range */

    $(function() {
        $( "#slider-range" ).slider({
          // orientation: "vertical",
          // step: 15,
          range: true,
          min: 0,
          max: 10000,
          step:100,
          values: [ 1000, 6000 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] );
            $( "#amount_1" ).val( ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
        $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

        // Изменение местоположения ползунка при вводиде данных в первый элемент input
          $("input#amount").change(function(){
            var value1=$("input#amount").val();
            var value2=$("input#amount_1").val();
              if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $("input#amount").val(value1);
            }
            $("#slider-range").slider("values",0,value1);   
          });
              
          // Изменение местоположения ползунка при вводиде данных в второй элемент input    
          $("input#amount_1").change(function(){
            var value1=$("input#amount").val();
            var value2=$("input#amount_1").val();

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $("input#amount_1").val(value2);
            }
            $("#slider-range").slider("values",1,value2);
          });

          // фильтрация ввода в поля
            jQuery('#amount, #amount_1').keypress(function(event){
                var key, keyChar;
                if(!event) var event = window.event;
                
                if (event.keyCode) key = event.keyCode;
                else if(event.which) key = event.which;
            
                if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
                keyChar=String.fromCharCode(key);
                
                if(!/\d/.test(keyChar)) return false;
            
            });

      });



$('.catalog-text__more').on('click', function (e) {
    $(this).toggleClass('show');
    $('.catalog-text_hidden').toggleClass('show');
    var btnLabel2 = $('.catalog-text_hidden')
        .is(':visible')
        ? 'Свернуть' : 'читать дальше';
    $(e.target).text(btnLabel2);
});



    $(function() {
        $( "#slider-rangeH" ).slider({
          // orientation: "vertical",
          // step: 15,
          range: true,
          min: 0,
          max: 100,
          step:0,
          values: [ 10, 60 ],
          slide: function( event, ui ) {
            $( "#amountH" ).val( ui.values[ 0 ] );
            $( "#amountH_1" ).val( ui.values[ 1 ] );
          }
        });
        $( "#amountH" ).val( $( "#slider-rangeH" ).slider( "values", 0 ) );
        $( "#amountH_1" ).val( $( "#slider-rangeH" ).slider( "values", 1 ) );

        // Изменение местоположения ползунка при вводиде данных в первый элемент input
          $("input#amountH").change(function(){
            var value1=$("input#amountH").val();
            var value2=$("input#amountH_1").val();
              if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $("input#amountH").val(value1);
            }
            $("#slider-rangeH").slider("values",0,value1);   
          });
              
          // Изменение местоположения ползунка при вводиде данных в второй элемент input    
          $("input#amountH_1").change(function(){
            var value1=$("input#amountH").val();
            var value2=$("input#amountH_1").val();

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $("input#amountH_1").val(value2);
            }
            $("#slider-rangeH").slider("values",1,value2);
          });

          // фильтрация ввода в поля
            jQuery('#amountH, #amountH_1').keypress(function(event){
                var key, keyChar;
                if(!event) var event = window.event;
                
                if (event.keyCode) key = event.keyCode;
                else if(event.which) key = event.which;
            
                if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
                keyChar=String.fromCharCode(key);
                
                if(!/\d/.test(keyChar)) return false;
            
            });

      });



/* .filter-link */
$(".filter-link").on("click", function(){
    $('.aside').toggleClass('show');
    $('.overlay').toggleClass('show');
    $('body').toggleClass('hidden');
});

/* .filter-link */
$(".prooduct-main__share span").on("click", function(){
    $(this).parents('.prooduct-main__share').toggleClass('show');
});






$(function($) {
  var allAccordions = $('.accordion div.data');
  var allAccordionItems = $('.accordion .accordion-item');
  $('.accordion > .accordion-item > .accordion-header').click(function() {
    if($(this).parents('.accordion-item').hasClass('open'))
    {
      $(this).parents('.accordion-item').removeClass('open');
      $(this).next().slideUp("fast");
    }
    else
    {
    allAccordions.slideUp("fast");
    allAccordionItems.removeClass('open');
    $(this).parents('.accordion-item').addClass('open');
    $(this).next().slideDown("fast");
    return false;
    }
  });
});