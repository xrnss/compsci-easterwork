$(window).on('load', function () {
    let ReplaceCatImage = function () {
        fetch("https://api.thecatapi.com/v1/images/search") // Performs a GET request to the API for cats!! :)
            .then((response) => response.json()) // Turns response data into an actual JavaScript object so we can index it 
            .then((json) => {
                let catImage = json[0].url; // Finds the URL for the cat image in the object data

                $("#catpicture").attr("src", catImage); // Sets the "source" element of the picture to the URL of the cat image we just got.

                let Breed = json[0].breed; // Finds breed data inside the object data
                if (Breed != null) { // Checks if there was breed data attached
                    $("#breed").text("Breed Data: " + Breed);
                } else {
                    $("#breed").text("Breed Data: N/A"); // Changes the text appropriately 
                }
            });
    }

    $("#buttonclick").click(function () { // When the button is clicked, it generates it
        ReplaceCatImage()
    })

    ReplaceCatImage() // On page load set cat image
});