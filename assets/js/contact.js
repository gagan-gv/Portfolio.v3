window.addEventListener("load", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        var name = document.getElementById("name").value;
        var msg = document.getElementById("msg").value;
        var body = "From: " + name + " Message: " + msg

        window.open('mailto:chordiagagan@gmail.com?subject="Mailed for reach"&body=' + body)
            /*var formdata = {
                "name": name,
                "email": email,
                "msg": msg
            };

            axios({
                    method: "post",
                    url: "https://mailgagan.herokuapp.com/index",
                    data: formdata,
                })
                .then(() => {
                    alert("Mailed");
                })
                .catch(() => {
                    alert("Not mailed");
                });*/
    });

})