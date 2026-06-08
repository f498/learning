const getCryptPass = (password) => {
    password = password.split("");
    const firstHalf = password.splice(0, Math.floor(password.length / 2));

    return (firstHalf.reverse().concat(password.reverse())).join('');
}

const check = (cryptPass, password) => {
    return getCryptPass(cryptPass) === password;
}