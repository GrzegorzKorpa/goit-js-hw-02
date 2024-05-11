"use strict";
function checkForSpam(message) {
  const lowerCheckForSpam = checkForSpam.toLowerCase();
  const hasSpam = lowerCheckForSpam.includes("SPAM");
  const hasSale = lowerCheckForSpam.includes("SALE");
  if(hasSpam = true || hasSale == true) {return true;}
  else {return false};
}
