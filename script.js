function showMessage() {
    alert("🚀 Welcome! Your JavaScript is working perfectly!");
}

function changeTheme() {

    const body = document.body;

    if (body.classList.contains("light")) {

        body.classList.remove("light");

    } else {

        body.classList.add("light");

        body.style.background =
            "linear-gradient(135deg, #ffe0f7, #dce7ff)";

        body.style.color = "#222";
    }
}