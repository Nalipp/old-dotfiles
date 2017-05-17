var elementTime = createElementTime();

function createElementTime() {
  var startTime = Date.now();
  var endTime = null;
  return {
    resetStartTime: function() {
      startTime = Date.now();
    }, 
    setEndTime: function() {
      endTime = Date.now();
    },
    totalDifference: function() {
      return endTime - startTime;
    },
  }
}

console.log(elementTime.getStartTime());
