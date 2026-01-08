// ===== LOAD HEADER TỰ ĐỘNG =====
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Không load được " + file);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error("Lỗi load HTML:", error);
        });
}

// Khi trang load xong
document.addEventListener("DOMContentLoaded", function () {
    loadHTML("header.html", "header-placeholder");
    loadHTML("footer.html", "footer-placeholder");
    if (window.location.pathname.includes("signup.html")) {
    }
});
