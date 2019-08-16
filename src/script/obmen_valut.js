window.onkeyup = keyup;
var kurs_usd = 0.015;
var kurs_uah = 0.038;

function keyup() {
    document.getElementById("output-usd").value = (kurs_usd * document.getElementById("input").value).toFixed(2);
    document.getElementById("output-uah").value = (kurs_uah * document.getElementById("input").value).toFixed(2);
}



var count = 0;
var cache = 0;
var percents = 0;
$(function(){
    $(".discount-item").click(function() {
        if ($(this).hasClass("active"))
        {
            $(this).removeClass("active");
            switch ($(this).attr("id")) {
                case "phone1":
                    count -= 10000;
                    break;
                case "phone2":
                    count -= 2000;
                    break;
                case "phone3":
                    count -= 7000;
                    break;
                case "phone4":
                    count -= 5000;
                    break;
                case "phone5":
                    count -= 20000;
                    break;
            }
            document.getElementById("cash").value = count;
        } else {
            $(this).addClass("active");
            switch ($(this).attr("id")) {
                case "phone1":
                    count += 10000;
                    break;
                case "phone2":
                    count += 2000;
                    break;
                case "phone3":
                    count += 7000;
                    break;
                case "phone4":
                    count += 5000;
                    break;
                case "phone5":
                    count += 20000;
                    break;
            }
            document.getElementById("cash").value = count;
        }
    });
});
function obmen() {
    if (count < 20000)
    {
        var discound_card = confirm("Есть ли у вас дисконтана карта?");
        if (discound_card === true)
        {
            var card_percent = confirm("У вас 10% дисконт?");
            if (card_percent === false)
            {
                card_percent = confirm("У вас 15% дисконт?");
                if (card_percent === false){
                    alert("Вы неверно ввели дисконт попробуйте еще раз!");
                    return;
                } else {
                    percents = count * 0.15;
                    cache = count - (count * 0.15);
                }
            } else {
                percents = count * 0.1;
                cache = count - (count * 0.1);
            }
        } else {
            cache = count;
        }
        alert(`Ваш сумма к оплате составила ${cache}. Сумма скидки составила ${percents}`)
    } else {
        percents = count * 0.1;
        cache = count - (count * 0.1);
        alert(`Ваш сумма к оплате составила ${cache}. Сумма скидки составила ${percents}`)
    }
    location.reload();
}


