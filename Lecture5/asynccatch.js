function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Match.random() * 1);
        // 0 reor 1, at random
        val ? resolve("Lucky!!") : reject("Nope ");
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

msg();// lucky
msg();// lucky
msg();// lucky
msg();//Nope
msg();// lucky
msg();//Nope
msg();//Nope
