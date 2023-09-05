document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search');
    const animalList = document.getElementsByClassName('animals');

    search.addEventListener("input", function(){
        const searchText = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll("section");

        sections.forEach(section => {
            const animalName = section.className.toLowerCase();

            if(animalName.includes(searchText)){
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});