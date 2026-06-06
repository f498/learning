const lang = "ru";
let helloMessage;
switch (lang) {
    case "ru":
        helloMessage = "Добро пожаловать";
        break;
    case "de":
        helloMessage = "Herzlich willkommen";
        break;
    default:
        helloMessage = "Welcome";
}

console.log(helloMessage);