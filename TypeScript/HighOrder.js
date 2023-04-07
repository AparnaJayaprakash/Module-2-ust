var scores = [33, 21, 100, 34, 54, 67, 88, 99, 43, 23, 43, 65, 78, 90, 11, 3, 95];
var players = [
    { name: "Sunil Gavaskar", city: "Bombay", total_runs: 10260, wickets: 10, start: 1972, end: 1987 },
    { name: "Kapil Dev", city: "Chandigarh", total_runs: 4500, wickets: 320, start: 1974, end: 1987 },
    { name: "G Vishwanath", city: "Bangalore", total_runs: 6500, wickets: 4, start: 1969, end: 1983 },
    { name: "Sandeep Patil", city: "Bombay", total_runs: 5500, wickets: 70, start: 1979, end: 1985 },
    { name: "Sachin Tendulkar", city: "Bombay", total_runs: 150000, wickets: 100, start: 1989, end: 2012 },
    { name: "Azaruddin", city: "Hyderabad", total_runs: 9548, wickets: 80, start: 1984, end: 2003 },
    { name: "Saurav Ganguly", city: "Kolkata", total_runs: 12030, wickets: 70, start: 1993, end: 2011 },
    { name: "Rahul Dravid", city: "Bangalore", total_runs: 122350, wickets: 3, start: 1993, end: 2010 },
    { name: "Yuvrag Sing", city: "Chandigarh", total_runs: 3400, wickets: 103, start: 2002, end: 2011 },
    { name: "MS Dhoni", city: "Ranchi", total_runs: 10773, wickets: 1, start: 2004, end: 2020 }
];
/*
console.log('hello');
for(var i =0;i<scores.length;i++){
    console.log(scores[i]);
}
scores.forEach((score) =>{
    console.log(score);
});
*/
//1. forEach
// players.forEach((player)=>{
//     console.log(player);
// });
//2. filters
// scores.filter((score)=>{                 //scores is an array and score is an element
//     if(score >= 50 && score <= 80){
//         console.log(score);
//     }
// });
// players.filter((player) =>{
//     if(player.total_runs > 3000){
//         console.log(player.name, player.total_runs);
//     }
// });
//3. Map: Map create new array from existing array.
// var newScores = scores.map(function(score){
//     return (score * 2);
// });
// console.log(newScores);
// var yearsPlayed = players.map((players)=>{
//     return players.end - players.start;
// });
// console.log(yearsPlayed);
// var newScores = scores.map(
//     (scores)=>{
//         return(scores * 2);
//     });
//     console.log(newScores);
//4. Sort: Ascending
var sortedScores = scores.sort(function (score1, score2) {
    if (score1 > score2) {
        return 1;
        // if we put -1 descending order
        //if we put 1 ascending order
    }
    else {
        return -1;
    }
});
console.log(sortedScores);
var sortTotalScores = players.sort(function (player1, player2) {
    if (player1.total_runs < player2.total_runs) {
        return 1;
    }
    else {
        return -1;
    }
});
console.log(sortTotalScores);
//5. reduce
var sumScores1 = players.reduce(function (cumTotal, player) {
    return ((cumTotal + player.total_runs));
}, 0);
console.log(sumScores1);
