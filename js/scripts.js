var player = function(userName, turnScore, totalScore) {
  this.userName = userName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

player.prototype.roll = function() {
  var dice = Math.floor(Math.random() * 6);
  if (dice === 1) {
    return 0;
    } else {
    return dice;
  }
}
