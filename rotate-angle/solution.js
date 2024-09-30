function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = (initialAngle + rotation) % 360;

  return (newAngle >= 0) ? newAngle : newAngle +360;
}

console.log(rotateAngleByDegrees(350,
15));


