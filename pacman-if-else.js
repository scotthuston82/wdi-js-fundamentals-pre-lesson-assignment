var powerPelletEaten = false;
var numberOfGhosts = 4;

while (true) {
  console.log('Ghosts remaining are: ' + numberOfGhosts);

  if (powerPelletEaten == false) {
    console.log('Pac-man eats power pellet');
    powerPelletEaten = true;

  } else if (numberOfGhosts > 0) {
    console.log('Pac-man eats a ghost');
    numberOfGhosts--;
  } else {
    break;
  }


}
