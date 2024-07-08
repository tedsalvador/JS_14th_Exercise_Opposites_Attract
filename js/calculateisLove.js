
/* export function calculateAngle(angleOne, angleTwo) { */
export function calculateisLove(petalsFlower1, petalsFlower2) { 
    let lovesum = 0;
    let mensaje = "";

    lovesum = (petalsFlower1 + petalsFlower2);
    if (lovesum % 2 === 0) {
        mensaje = false;         
    } else {
        mensaje = true;
    }

  // Comprobar si uno es impar y el otro es par
  if ((petalsFlower1 % 2 === 0 && petalsFlower2 % 2 !== 0) || (petalsFlower1 % 2 !== 0 && petalsFlower2 % 2 === 0)) {
    console.log('true');
  } else {
    console.log('false');
  }
    return mensaje;
}