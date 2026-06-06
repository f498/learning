let lang = prompt("Введите ваш язык в формате ru, en, de", "ru");
let helloMessage;
switch (lang) {
    case "ru":
        helloMessage = "Добро пожаловать";
        break;
    case "de":
        helloMessage = "Gutten tag!";
        break;
    case "en":
        helloMessage = "Welcome";
    default:
        helloMessage = "Добро пожаловать";
}

console.log(helloMessage);