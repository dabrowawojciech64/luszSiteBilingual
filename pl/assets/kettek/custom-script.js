document
    .querySelector(".selected-language")
    .addEventListener("click", function () {
        document.getElementById("languageOptions").style.display = "block";
    });

document.querySelectorAll(".language-option").forEach(function (option) {
    option.addEventListener("click", function () {
        const selectedValue = this.getAttribute("data-value");
        const selectedFlag = this.querySelector("img").src;
        const selectedText = this.textContent.trim();

        document.getElementById(
            "selectedLanguage"
        ).innerHTML = `<img src="${selectedFlag}" alt="${selectedText}"> ${selectedText}`;
        document.getElementById("languageOptions").style.display = "none";

        const currentPath = window.location.pathname;
        const currentFolder = currentPath.split("/").at(-2);
        const currentPage = currentPath.split("/").pop();

        let newPath;

        switch (selectedValue) {
            case "de":
                newPath =
                    currentFolder === "pl" ||
                    currentFolder === "ua" ||
                    currentFolder === "cn"
                    ? `../${currentPage}`
                    : currentPage;
                break;
            case "pl":
                newPath = currentFolder === "pl" ? currentPage : `pl/${currentPage}`;
                break;
            case "ua":
                newPath = currentFolder === "ua" ? currentPage : `ua/${currentPage}`;
                break;
            case "cn":
                newPath = currentFolder === "cn" ? currentPage : `cn/${currentPage}`;
                break;
            default:
                newPath = currentPage;
        }

        if (newPath != currentPage) {
            window.location.href = newPath;
        }
    });
});

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (event) {
    if (!document.querySelector(".language-selector").contains(event.target)) {
        document.getElementById("languageOptions").style.display = "none";
    }
});
