function showDescription(idName) {
    const description = document.getElementById(idName);
    if (description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}