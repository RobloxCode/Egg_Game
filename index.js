//create an object which is gunna be the number of clicks
let click = JSON.parse(localStorage.getItem('trackOfClicks')) || { clikcs:0, remainingClicks:10000 };

function pressClick() {
  click.clikcs++;
  click.remainingClicks--;

  localStorage.setItem('trackOfClicks', JSON.stringify(click)); //saving the score
}

function updateTheText() {
  document.getElementById('clicks').textContent = `Clicks: ${click.clikcs}`;
  document.getElementById('remaining_clicks').textContent = `Total Of Clicks: ${click.remainingClicks}`;
}

function resetScore() {
  click.clikcs = 0;
  click.remainingClicks = 10000;
}

