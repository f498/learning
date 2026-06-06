const hasLicence = true;
const age = 20;
const isDrunk = false;
const canDrive = hasLicence && !isDrunk && age >= 18;
console.log(canDrive ? 'может' : 'не может');