var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(testScores) {
    var total = 0;
    testScores.forEach(function(score) {
        total += score;
    })

    return console.log(Math.round(total / testScores.length))
}

average(scores);
average(scores2);
