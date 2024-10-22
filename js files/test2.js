console.log("Hello this is js area.");

// Get section elements
const petImageSection = document.getElementById("pet-image-section");
const dogImageSection = document.getElementById("dog-image-section");
const catImageSection = document.getElementById("cat-image-section");
const rabbitImageSection = document.getElementById("rabbit-image-section");
const birdImageSection = document.getElementById("bird-image-section");

// Fetch all pets data
const petData = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => {
        // Clear the section to avoid repetition
        petImageSection.innerHTML = "";
        displayPetData(data);
    })
    .catch(error => console.log(error));
}

// Display general pet data
const displayPetData = (allPets) => {
    allPets.pets.forEach(pet => {
        // Container div of image and its details
        const imageDetailContainer = document.createElement("div");
        petImageSection.append(imageDetailContainer);
        imageDetailContainer.classList = "h-[450px] border p-1 rounded-md my-2";

        // Image div and details
        const imageDiv = document.createElement("div");
        imageDetailContainer.append(imageDiv);
        imageDiv.classList = "h-[55%]";
        
        const imageDetail = document.createElement("div");
        imageDetailContainer.append(imageDetail);
        imageDetail.classList = "rounded-lg h-[45%] p-2";

        // Image
        const allPetImage = document.createElement("img");
        allPetImage.src = pet.image;
        imageDiv.append(allPetImage);
        allPetImage.classList = "h-full rounded-md";

        // Details
        const petName = document.createElement("h2");
        petName.innerText = pet.pet_name;
        petName.classList = "font-bold";
        imageDetail.append(petName);

        // Breed
        const breed = document.createElement("p");
        breed.innerText = `Breed: ${pet.breed}`;
        imageDetail.append(breed);

        // Birth Date
        const birth = document.createElement("p");
        birth.innerText = `Birth: ${pet.date_of_birth}`;
        imageDetail.append(birth);

        // Gender
        const gender = document.createElement("p");
        gender.innerText = `Gender: ${pet.gender}`;
        imageDetail.append(gender);

        // Price
        const price = document.createElement("p");
        price.innerText = `Price: ${pet.price}$`;
        imageDetail.append(price);

        // Buttons
        const cardButton = document.createElement("div");
        imageDetail.append(cardButton);
        cardButton.classList = "mt-3 flex justify-center items-center gap-7";

        const likeButton = document.createElement("button");
        likeButton.classList = "btn";
        const like = document.createElement("img");
        like.src = "images/like.png";
        likeButton.append(like);
        cardButton.append(likeButton);

        const adopt = document.createElement("button");
        adopt.innerText = "Adopt";
        adopt.classList = "btn";
        cardButton.append(adopt);

        const details = document.createElement("button");
        details.innerText = "Details";
        details.classList = "btn";
        cardButton.append(details);
    });
}

// Fetch and display dog data
const dogData = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/category/dog")
    .then(res => res.json())
    .then(data => {
        // Clear the dog section to avoid repetition
        dogImageSection.innerHTML = "";
        displayDogData(data.data);
    })
    .catch(error => console.log(error));
}

const displayDogData = (dogs) => {
    petImageSection.classList = "hidden";
    catImageSection.classList = "hidden";
    dogImageSection.classList = "grid col-span-3 border rounded-lg p-2 grid grid-cols-3 gap-1";

    dogs.forEach(dog => {
        const imageDetailContainer = document.createElement("div");
        dogImageSection.append(imageDetailContainer);
        imageDetailContainer.classList = "h-[450px] border p-1 rounded-md my-2";

        const imageDiv = document.createElement("div");
        imageDetailContainer.append(imageDiv);
        imageDiv.classList = "h-[55%]";
        
        const imageDetail = document.createElement("div");
        imageDetailContainer.append(imageDetail);
        imageDetail.classList = "rounded-lg h-[45%] p-2";

        const allPetImage = document.createElement("img");
        allPetImage.src = dog.image;
        imageDiv.append(allPetImage);
        allPetImage.classList = "h-full rounded-md";

        const petName = document.createElement("h2");
        petName.innerText = dog.pet_name;
        petName.classList = "font-bold";
        imageDetail.append(petName);

        const breed = document.createElement("p");
        breed.innerText = `Breed: ${dog.breed}`;
        imageDetail.append(breed);

        const birth = document.createElement("p");
        birth.innerText = `Birth: ${dog.date_of_birth}`;
        imageDetail.append(birth);

        const gender = document.createElement("p");
        gender.innerText = `Gender: ${dog.gender}`;
        imageDetail.append(gender);

        const price = document.createElement("p");
        price.innerText = `Price: ${dog.price}$`;
        imageDetail.append(price);

        const cardButton = document.createElement("div");
        imageDetail.append(cardButton);
        cardButton.classList = "mt-3 flex justify-center items-center gap-7";

        const likeButton = document.createElement("button");
        likeButton.classList = "btn";
        const like = document.createElement("img");
        like.src = "images/like.png";
        likeButton.append(like);
        cardButton.append(likeButton);

        const adopt = document.createElement("button");
        adopt.innerText = "Adopt";
        adopt.classList = "btn";
        cardButton.append(adopt);

        const details = document.createElement("button");
        details.innerText = "Details";
        details.classList = "btn";
        cardButton.append(details);
    });
}

// Fetch and display cat data
const catData = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/category/cat")
    .then(res => res.json())
    .then(data => {
        // Clear the cat section to avoid repetition
        catImageSection.innerHTML = "";
        displayCatData(data.data);
    })
    .catch(error => console.log(error));
}

const displayCatData = (cats) => {
    petImageSection.classList = "hidden";
    dogImageSection.classList = "hidden";
    catImageSection.classList = "grid col-span-3 border rounded-lg p-2 grid grid-cols-3 gap-1";

    cats.forEach(cat => {
        const imageDetailContainer = document.createElement("div");
        catImageSection.append(imageDetailContainer);
        imageDetailContainer.classList = "h-[450px] border p-1 rounded-md my-2";

        const imageDiv = document.createElement("div");
        imageDetailContainer.append(imageDiv);
        imageDiv.classList = "h-[55%]";
        
        const imageDetail = document.createElement("div");
        imageDetailContainer.append(imageDetail);
        imageDetail.classList = "rounded-lg h-[45%] p-2";

        const allPetImage = document.createElement("img");
        allPetImage.src = cat.image;
        imageDiv.append(allPetImage);
        allPetImage.classList = "h-full rounded-md";

        const petName = document.createElement("h2");
        petName.innerText = cat.pet_name;
        petName.classList = "font-bold";
        imageDetail.append(petName);

        const breed = document.createElement("p");
        breed.innerText = `Breed: ${cat.breed}`;
        imageDetail.append(breed);

        const birth = document.createElement("p");
        birth.innerText = `Birth: ${cat.date_of_birth}`;
        imageDetail.append(birth);

        const gender = document.createElement("p");
        gender.innerText = `Gender: ${cat.gender}`;
        imageDetail.append(gender);

        const price = document.createElement("p");
        price.innerText = `Price: ${cat.price}$`;
        imageDetail.append(price);

        const cardButton = document.createElement("div");
        imageDetail.append(cardButton);
        cardButton.classList = "mt-3 flex justify-center items-center gap-7";

        const likeButton = document.createElement("button");
        likeButton.classList = "btn";
        const like = document.createElement("img");
        like.src = "images/like.png";
        likeButton.append(like);
        cardButton.append(likeButton);

        const adopt = document.createElement("button");
        adopt.innerText = "Adopt";
        adopt.classList = "btn";
        cardButton.append(adopt);

        const details = document.createElement("button");
        details.innerText = "Details";
        details.classList = "btn";
        cardButton.append(details);
    });
}
