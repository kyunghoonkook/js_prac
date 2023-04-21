window.addEventListener("load", function () {
    var uId = this.document.querySelector("#uId");
    var uPass = this.document.querySelector("#uPass");
    var uLabel = this.document.querySelector(".uId");
    var pLabel = this.document.querySelector(".uPass");

    uId.addEventListener("focus", function () {
        this.style.backgroundColor = "white";
        this.style.outlineWidth = 0;
        uLabel.style.display = "none";
    })

    uId.addEventListener("blur", function () {
        this.style.backgroundColor = "#eee";
        uLabel.style.display = "block";
    })

    uPass.addEventListener("focus", function () {
        this.style.backgroundColor = "white";
        this.style.outlineWidth = 0;
        pLabel.style.display = "none";
    })

    uPass.addEventListener("blur", function () {
        this.style.backgroundColor = "#eee";
        pLabel.style.display = "block";
    })
})