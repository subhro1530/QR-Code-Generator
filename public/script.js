const wrapper = document.querySelector(".wrapper"),
    qrinput = document.querySelector(".form input"),
    qrImage = document.querySelector(".qr-code img"),
    generateBtn = document.querySelector(".form button");

generateBtn.addEventListener("click", () => {
    let qrValue = qrinput.value;
    if (!qrValue) return;
    console.log(qrValue);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    wrapper.classList.add("active");
});

