// var leapYear = function(year) {
//     if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// };
//
// $(document).ready(function() {
//     $("form#leap-year").submit(function(event) {
//         var year = parseInt($("input#year").val());
//         var result = leapYear(year);
//
//         $(".year").text(year);
//         $(".not").text("");
//         if (!result) {
//             $(".not").text("not");
//         }
//
//         $("#result").show();
//         event.preventDefault();
//     });
// });

var queenAttack = function(attack, victim) {
    var x = attack[0];
    var y = attack[1];
    var a = victim[0];
    var b = victim[1];

    var attacksum = attack[0] + attack[1];
    var victimsum = victim[0] + victim[1];

    var attacksub = attack[0] - attack[1];
    var victimsub = victim[0] - victim[1];

    //queen [x,y]
    //victim [a,b]
    if (x === a || y === b) || (attacksum === victimsum) || (attacksub === victimsub)) {
        return true;
    }   else {
        return false;
    }
};

$(document).ready(function() {
    $("form#queen-attack").submit(function(event) {
        var x = parseInt($('input#x').val());
        var y = parseInt($('input#y').val());
        var a = parseInt($('input#a').val());
        var b = parseInt($('input#b').val());
        var result = queenAttack(attack, victim);


        $(".not").empty();
        if (!result) {
            $(".not").text("not");
        }

        $("#result").show();
        event.preventDefault();
    });
});
