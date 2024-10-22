// console.log("Hello this is js area. ")
const petImageSection = document.getElementById("pet-image-section");
const dogImageSection = document.getElementById("dog-image-section");
const catImageSection = document.getElementById("cat-image-section");
const rabbitImageSection = document.getElementById("rabbit-image-section");
const birdImageSection = document.getElementById("bird-image-section");



const rightSection = document.getElementById("home-page-image-detail")


// All the buttons is here
const dogButton = document.getElementById("dog-button");


// Pet Section Container
const petSectionContainer = document.getElementById("pet-section-container")

// Spinner
const spinner = document.getElementById("spinner")




const petData = () => {
    
    rightSection.innerHTML = "";

    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => displayPetData(data))
    .catch(error => console.log(error))
}

const displayPetData = (allPets) =>{
    allPets.pets.forEach((pet) => {

    
 // ......................................................................................................
        // Getting Main image section 
        // const petImageSection = document.getElementById("pet-image-section");
       

        dogImageSection.classList = "hidden"
        catImageSection.classList = "hidden"
        rabbitImageSection.classList = "hidden"
        // birdImageSection.classList ="hidden"

        // Container Div of image and its detail
        const imageDetailContainer = document.createElement("div")
        petImageSection.append(imageDetailContainer)
        imageDetailContainer.classList = "h-[450px] border p-1 rounded-md my-2"



        // image div and it is append to the container
        const imageDiv = document.createElement("div")
        imageDetailContainer.append(imageDiv)
        imageDiv.classList = "h-[55%]"
        

        
        // image detail
        const imageDetail = document.createElement("div")
        imageDetailContainer.append(imageDetail)
        imageDetail.classList =" rounded-lg h-[45%] p-2"

// .........................................................................................................
        // Detail is started Here

        // image is here
        const allPetImage = document.createElement("img")
        allPetImage.src = pet.image
        imageDiv.append(allPetImage)
        allPetImage.classList = "h-full rounded-md"


        // ImageDetail is started Here
        const petName = document.createElement("h2")
        petName.innerText = pet.pet_name
        petName.classList = "font-bold"
        imageDetail.append(petName)

        
        // Breed 
        const breed = document.createElement("p")
        breed.innerText =`Breed : ${pet.breed}` 
        breed.classList = ""
        imageDetail.append(breed)

        // Birth Date
        const birth = document.createElement("p")
        birth.innerText =`Birth : ${pet.date_of_birth}` 
        birth.classList = ""
        imageDetail.append(birth)
        

        // Gender
        const gender = document.createElement("p")
        gender.innerText =`Gender : ${pet.gender}` 
        gender.classList = ""
        imageDetail.append(gender)


        // Price
        const price = document.createElement("p")
        price.innerText =`Price : ${pet.price}$` 
        price.classList = ""
        imageDetail.append(price)

        // Like Button
        const cardButton = document.createElement("div")
        imageDetail.append(cardButton)
        cardButton.classList= "mt-3 flex justify-center items-center gap-7"

        const likeButton = document.createElement("button")
        likeButton.classList = "btn"
        likeButton.addEventListener("click", function(){
            const smallImageContainer = document.createElement("div")
            let smallImage = document.createElement("img")
            smallImage.src = pet.image
            smallImageContainer.append(smallImage)
            console.log(smallImage)
            console.log(smallImageContainer)
            rightSection.append(smallImageContainer)
            smallImageContainer.classList = "border p-1 rounded-md h-[100px]"
        })
        const like = document.createElement("img")
        like.src = "images/like.png"
        likeButton.append(like)
        cardButton.append(likeButton)
        // console.log(like)

        const adopt = document.createElement("button")
        adopt.innerText = "Adopt"
        adopt.classList = "btn"
        cardButton.append(adopt)
        adopt.addEventListener('click', () => {
            adopt.disabled = true
            adopt.innerText = "Adopted"
        })
        
        const details = document.createElement("button")
        details.innerText = "Details"
        details.classList = "btn"
        cardButton.append(details)


          // Add event listener for Details button to show modal
          details.addEventListener("click", function() {
            // Create the modal structure
            const modal = document.createElement("div")
            modal.classList = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"

            // Modal content container
            const modalContent = document.createElement("div")
            modalContent.classList = "bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative"

            // Image in the modal
            const modalImage = document.createElement("img")
            modalImage.src = pet.image
            modalImage.classList = "w-full h-[300px] object-cover rounded-md"
            modalContent.append(modalImage)

            // Detailed Info in the modal
            const modalInfo = document.createElement("div")
            modalInfo.classList = "p-4"

            // Pet name
            const modalName = document.createElement("h2")
            modalName.innerText = pet.pet_name
            modalName.classList = "text-lg font-bold"
            modalInfo.append(modalName)

            // Breed
            const modalBreed = document.createElement("p")
            modalBreed.innerText = `Breed: ${pet.breed}`
            modalInfo.append(modalBreed)

            // Date of Birth
            const modalBirth = document.createElement("p")
            modalBirth.innerText = `Birth: ${pet.date_of_birth}`
            modalInfo.append(modalBirth)

            // Gender
            const modalGender = document.createElement("p")
            modalGender.innerText = `Gender: ${pet.gender}`
            modalInfo.append(modalGender)

            // Price
            const modalPrice = document.createElement("p")
            modalPrice.innerText = `Price: ${pet.price}$`
            modalInfo.append(modalPrice)

            // Description
            const modalDescription = document.createElement("p")
            modalDescription.innerText = `This is one of the sweetest pets. It has a lovely name, ${pet.pet_name}, and is well-trained. You will be happy to adopt this pet.`
            modalInfo.append(modalDescription)

            modalContent.append(modalInfo)

            // Cancel Button at the bottom
            const cancelButton = document.createElement("button")
            cancelButton.innerText = "Cancel"
            cancelButton.classList = "bg-red-500 text-white px-4 py-2 rounded mt-4 w-full"
            cancelButton.addEventListener("click", function() {
                modal.remove(); // Remove the modal on clicking cancel
            })
            modalContent.append(cancelButton)

            // Append modal to body or main container
            modal.append(modalContent)
            document.body.append(modal)
        })

        petImageSection.classList = "col-span-3 border rounded-lg p-2 grid grid-cols-3 gap-1"
        

    });
}
petData()


const dogData = () => {

    petSectionContainer.classList.add("hidden")

    rightSection.innerHTML = "";

    spinner.classList.remove("hidden")

    fetch("https://openapi.programming-hero.com/api/peddy/category/dog")
    .then(res => res.json())
    .then(data => {
        dogImageSection.innerHTML = "";
        setTimeout(() => {
            displayDogData(data.data);

            spinner.classList.add("hidden")
            petSectionContainer.classList.remove("hidden")
        }, 3000);
    })
    .catch(error => console.log(error))
}

const displayDogData = (dogs) =>{
        dogs.forEach(dog => {

        // console.log(dog)
        petImageSection.classList = "hidden"
        catImageSection.classList = "hidden"
        rabbitImageSection.classList = "hidden"
        dogImageSection.classList = "grid col-span-3 border rounded-lg p-2 grid grid-cols-3 gap-1"
        //.................................................
        // console.log(dog)
        // .............Onclick add korte hobe.....................................


        //................................................................................
        // Container Div of image and its detail
        const imageDetailContainer = document.createElement("div")
        dogImageSection.append(imageDetailContainer)
        imageDetailContainer.classList = "h-[450px] border p-1 rounded-md my-2"



        // image div and it is append to the container
        const imageDiv = document.createElement("div")
        imageDetailContainer.append(imageDiv)
        imageDiv.classList = "h-[55%]"
        

        
        // image detail
        const imageDetail = document.createElement("div")
        imageDetailContainer.append(imageDetail)
        imageDetail.classList =" rounded-lg h-[45%] p-2"

// .........................................................................................................
        // Detail is started Here

        // image is here
        const allPetImage = document.createElement("img")
        allPetImage.src = dog.image
        imageDiv.append(allPetImage)
        allPetImage.classList = "h-full rounded-md"


        // ImageDetail is started Here
        const petName = document.createElement("h2")
        petName.innerText = dog.pet_name
        petName.classList = "font-bold"
        imageDetail.append(petName)

        
        // Breed 
        const breed = document.createElement("p")
        breed.innerText =`Breed : ${dog.breed}` 
        breed.classList = ""
        imageDetail.append(breed)

        // Birth Date
        const birth = document.createElement("p")
        birth.innerText =`Birth : ${dog.date_of_birth}` 
        birth.classList = ""
        imageDetail.append(birth)
        

        // Gender
        const gender = document.createElement("p")
        gender.innerText =`Gender : ${dog.gender}` 
        gender.classList = ""
        imageDetail.append(gender)


        // Price
        const price = document.createElement("p")
        price.innerText =`Price : ${dog.price}$` 
        price.classList = ""
        imageDetail.append(price)

        // Like Button
        const cardButton = document.createElement("div")
        imageDetail.append(cardButton)
        cardButton.classList= "mt-3 flex justify-center items-center gap-7"

        const likeButton = document.createElement("button")
        likeButton.classList = "btn"

        likeButton.addEventListener("click", function(){
            const smallImageContainer = document.createElement("div")
            let smallImage = document.createElement("img")
            smallImage.src = dog.image
            smallImageContainer.append(smallImage)
            console.log(smallImage)
            console.log(smallImageContainer)
            rightSection.append(smallImageContainer)
            smallImageContainer.classList = "border p-1 rounded-md h-[100px]"
        })

        const like = document.createElement("img")
        like.src = "images/like.png"
        likeButton.append(like)
        cardButton.append(likeButton)
        // console.log(like)
        

        // Adopt button
        const adopt = document.createElement("button")
        adopt.innerText = "Adopt"
        adopt.classList = "btn"
        cardButton.append(adopt)
        adopt.addEventListener('click', () => {
            adopt.disabled = true
            adopt.innerText = "Adopted"
        })
        

        // Details Button
        const details = document.createElement("button");
        details.innerText = "Details";
        details.classList = "btn";   
        // Append the button to the card container
        cardButton.append(details);
    
        details.addEventListener("click", function() {
            // Create the modal structure
            const modal = document.createElement("div")
            modal.classList = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"

            // Modal content container
            const modalContent = document.createElement("div")
            modalContent.classList = "bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative"

            // Image in the modal
            const modalImage = document.createElement("img")
            modalImage.src = dog.image
            modalImage.classList = "w-full h-[300px] object-cover rounded-md"
            modalContent.append(modalImage)

            // Detailed Info in the modal
            const modalInfo = document.createElement("div")
            modalInfo.classList = "p-4"

            // dog name
            const modalName = document.createElement("h2")
            modalName.innerText = dog.pet_name
            modalName.classList = "text-lg font-bold"
            modalInfo.append(modalName)

            // Breed
            const modalBreed = document.createElement("p")
            modalBreed.innerText = `Breed: ${dog.breed}`
            modalInfo.append(modalBreed)

            // Date of Birth
            const modalBirth = document.createElement("p")
            modalBirth.innerText = `Birth: ${dog.date_of_birth}`
            modalInfo.append(modalBirth)

            // Gender
            const modalGender = document.createElement("p")
            modalGender.innerText = `Gender: ${dog.gender}`
            modalInfo.append(modalGender)

            // Price
            const modalPrice = document.createElement("p")
            modalPrice.innerText = `Price: ${dog.price}$`
            modalInfo.append(modalPrice)

            // Description
            const modalDescription = document.createElement("p")
            modalDescription.innerText = `This is one of the sweetest dogs. It has a lovely name, ${dog.pet_name}, and is well-trained. You will be happy to adopt this dog.`
            modalInfo.append(modalDescription)

            modalContent.append(modalInfo)

            // Cancel Button at the bottom
            const cancelButton = document.createElement("button")
            cancelButton.innerText = "Cancel"
            cancelButton.classList = "bg-red-500 text-white px-4 py-2 rounded mt-4 w-full"
            cancelButton.addEventListener("click", function() {
                modal.remove(); // Remove the modal on clicking cancel
            })
            modalContent.append(cancelButton)

            // Append modal to body or main container
            modal.append(modalContent)
            document.body.append(modal)
        })


    });

    
}


// .............................................................................................
// Cat Data is started here

const catData = () => {

    petSectionContainer.classList.add("hidden")

    rightSection.innerHTML = "";

    spinner.classList.remove("hidden")

    fetch("https://openapi.programming-hero.com/api/peddy/category/cat")
    .then(res => res.json())
    .then(data => {
        catImageSection.innerHTML = "";
        setTimeout(() => {
            displayCatData(data.data);

            spinner.classList.add("hidden")
            petSectionContainer.classList.remove("hidden")
        }, 3000);
    })
    .catch(error => console.log(error))
}

const displayCatData = (cats) => {
    



    cats.forEach(cat => {

        // console.log(cat)
        petImageSection.classList = "hidden"
        // petImageSection = ""
        dogImageSection.classList = "hidden"
        rabbitImageSection.classList = "hidden"
        catImageSection.classList = "grid col-span-3 border rounded-lg p-2 grid grid-cols-3 gap-1"
        //.................................................
        // console.log(cat)
        // .............Onclick add korte hobe.....................................


        //................................................................................
        // Container Div of image and its detail
        const imageDetailContainer = document.createElement("div")
        catImageSection.append(imageDetailContainer)
        imageDetailContainer.classList = "h-[450px] border p-1 rounded-md my-2"



        // image div and it is append to the container
        const imageDiv = document.createElement("div")
        imageDetailContainer.append(imageDiv)
        imageDiv.classList = "h-[55%]"
        

        
        // image detail
        const imageDetail = document.createElement("div")
        imageDetailContainer.append(imageDetail)
        imageDetail.classList =" rounded-lg h-[45%] p-2"

// .........................................................................................................
        // Detail is started Here

        // image is here
        const allPetImage = document.createElement("img")
        allPetImage.src = cat.image
        imageDiv.append(allPetImage)
        allPetImage.classList = "h-full rounded-md"


        // ImageDetail is started Here
        const petName = document.createElement("h2")
        petName.innerText = cat.pet_name
        petName.classList = "font-bold"
        imageDetail.append(petName)

        
        // Breed 
        const breed = document.createElement("p")
        breed.innerText =`Breed : ${cat.breed}` 
        breed.classList = ""
        imageDetail.append(breed)

        // Birth Date
        const birth = document.createElement("p")
        birth.innerText =`Birth : ${cat.date_of_birth}` 
        birth.classList = ""
        imageDetail.append(birth)
        

        // Gender
        const gender = document.createElement("p")
        gender.innerText =`Gender : ${cat.gender}` 
        gender.classList = ""
        imageDetail.append(gender)


        // Price
        const price = document.createElement("p")
        price.innerText =`Price : ${cat.price}$` 
        price.classList = ""
        imageDetail.append(price)

        // Like Button
        const cardButton = document.createElement("div")
        imageDetail.append(cardButton)
        cardButton.classList= "mt-3 flex justify-center items-center gap-7"

        const likeButton = document.createElement("button")
        likeButton.classList = "btn"

        likeButton.addEventListener("click", function(){
            const smallImageContainer = document.createElement("div")
            let smallImage = document.createElement("img")
            smallImage.src = cat.image
            smallImageContainer.append(smallImage)
            console.log(smallImage)
            console.log(smallImageContainer)
            rightSection.append(smallImageContainer)
            smallImageContainer.classList = "border p-1 rounded-md h-[100px]"
        })

        const like = document.createElement("img")
        like.src = "images/like.png"
        likeButton.append(like)
        cardButton.append(likeButton)
        // console.log(like)

        const adopt = document.createElement("button")
        adopt.innerText = "Adopt"
        adopt.classList = "btn"
        cardButton.append(adopt)
        adopt.addEventListener('click', () => {
            adopt.disabled = true
            adopt.innerText = "Adopted"
        })
        
        const details = document.createElement("button")
        details.innerText = "Details"
        details.classList = "btn"
        cardButton.append(details)


        details.addEventListener("click", function() {
            // Create the modal structure
            const modal = document.createElement("div")
            modal.classList = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"

            // Modal content container
            const modalContent = document.createElement("div")
            modalContent.classList = "bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative"

            // Image in the modal
            const modalImage = document.createElement("img")
            modalImage.src = cat.image
            modalImage.classList = "w-full h-[300px] object-cover rounded-md"
            modalContent.append(modalImage)

            // Detailed Info in the modal
            const modalInfo = document.createElement("div")
            modalInfo.classList = "p-4"

            // cat name
            const modalName = document.createElement("h2")
            modalName.innerText = cat.pet_name
            modalName.classList = "text-lg font-bold"
            modalInfo.append(modalName)

            // Breed
            const modalBreed = document.createElement("p")
            modalBreed.innerText = `Breed: ${cat.breed}`
            modalInfo.append(modalBreed)

            // Date of Birth
            const modalBirth = document.createElement("p")
            modalBirth.innerText = `Birth: ${cat.date_of_birth}`
            modalInfo.append(modalBirth)

            // Gender
            const modalGender = document.createElement("p")
            modalGender.innerText = `Gender: ${cat.gender}`
            modalInfo.append(modalGender)

            // Price
            const modalPrice = document.createElement("p")
            modalPrice.innerText = `Price: ${cat.price}$`
            modalInfo.append(modalPrice)

            // Description
            const modalDescription = document.createElement("p")
            modalDescription.innerText = `This is one of the sweetest cats. It has a lovely name, ${cat.pet_name}, and is well-trained. You will be happy to adopt this cat.`
            modalInfo.append(modalDescription)

            modalContent.append(modalInfo)

            // Cancel Button at the bottom
            const cancelButton = document.createElement("button")
            cancelButton.innerText = "Cancel"
            cancelButton.classList = "bg-red-500 text-white px-4 py-2 rounded mt-4 w-full"
            cancelButton.addEventListener("click", function() {
                modal.remove(); // Remove the modal on clicking cancel
            })
            modalContent.append(cancelButton)

            // Append modal to body or main container
            modal.append(modalContent)
            document.body.append(modal)
        })





        



    })

}



// .................................................................................................
// Rabbit Data is Started Here

const rabbitData = () => {
    petSectionContainer.classList.add("hidden")
    spinner.classList.remove("hidden")

    rightSection.innerHTML = "";
    
    fetch("https://openapi.programming-hero.com/api/peddy/category/rabbit")
    .then(res => res.json())
    .then(data => {
        rabbitImageSection.innerHTML = "";
        setTimeout(() => {
            displayRabbitData(data.data);

            spinner.classList.add("hidden")
            petSectionContainer.classList.remove("hidden")
        }, 3000);
    })
    .catch(error => console.log(error))
}

const displayRabbitData = (rabbits) => {
    



    rabbits.forEach(rabbit => {

        // console.log(rabbit)
        petImageSection.classList = "hidden"
        // petImageSection = ""
        dogImageSection.classList = "hidden"
        catImageSection.classList = "hidden"
        rabbitImageSection.classList = "grid col-span-3 border rounded-lg p-2 grid grid-cols-3 gap-1"
        //.................................................
        // console.log(rabbit)
        // .............Onclick add korte hobe.....................................


        //................................................................................
        // Container Div of image and its detail
        const imageDetailContainer = document.createElement("div")
        rabbitImageSection.append(imageDetailContainer)
        imageDetailContainer.classList = "h-[450px] border p-1 rounded-md my-2"



        // image div and it is append to the container
        const imageDiv = document.createElement("div")
        imageDetailContainer.append(imageDiv)
        imageDiv.classList = "h-[55%]"
        

        
        // image detail
        const imageDetail = document.createElement("div")
        imageDetailContainer.append(imageDetail)
        imageDetail.classList =" rounded-lg h-[45%] p-2"

// .........................................................................................................
        // Detail is started Here

        // image is here
        const allPetImage = document.createElement("img")
        allPetImage.src = rabbit.image
        imageDiv.append(allPetImage)
        allPetImage.classList = "h-full rounded-md"


        // ImageDetail is started Here
        const petName = document.createElement("h2")
        petName.innerText = rabbit.pet_name
        petName.classList = "font-bold"
        imageDetail.append(petName)

        
        // Breed 
        const breed = document.createElement("p")
        breed.innerText =`Breed : ${rabbit.breed}` 
        breed.classList = ""
        imageDetail.append(breed)

        // Birth Date
        const birth = document.createElement("p")
        birth.innerText =`Birth : ${rabbit.date_of_birth}` 
        birth.classList = ""
        imageDetail.append(birth)
        

        // Gender
        const gender = document.createElement("p")
        gender.innerText =`Gender : ${rabbit.gender}` 
        gender.classList = ""
        imageDetail.append(gender)


        // Price
        const price = document.createElement("p")
        price.innerText =`Price : ${rabbit.price}$` 
        price.classList = ""
        imageDetail.append(price)

        // Like Button
        const cardButton = document.createElement("div")
        imageDetail.append(cardButton)
        cardButton.classList= "mt-3 flex justify-center items-center gap-7"

        const likeButton = document.createElement("button")
        likeButton.classList = "btn"

        likeButton.addEventListener("click", function(){
            const smallImageContainer = document.createElement("div")
            let smallImage = document.createElement("img")
            smallImage.src = rabbit.image
            smallImageContainer.append(smallImage)
            console.log(smallImage)
            console.log(smallImageContainer)
            rightSection.append(smallImageContainer)
            smallImageContainer.classList = "border p-1 rounded-md h-[100px]"
        })

        const like = document.createElement("img")
        like.src = "images/like.png"
        likeButton.append(like)
        cardButton.append(likeButton)
        // console.log(like)

        const adopt = document.createElement("button")
        adopt.innerText = "Adopt"
        adopt.classList = "btn"
        cardButton.append(adopt)
        adopt.addEventListener('click', () => {
            adopt.disabled = true
            adopt.innerText = "Adopted"
        })
        
        const details = document.createElement("button")
        details.innerText = "Details"
        details.classList = "btn"
        cardButton.append(details)



        details.addEventListener("click", function() {
            // Create the modal structure
            const modal = document.createElement("div")
            modal.classList = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"

            // Modal content container
            const modalContent = document.createElement("div")
            modalContent.classList = "bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative"

            // Image in the modal
            const modalImage = document.createElement("img")
            modalImage.src = rabbit.image
            modalImage.classList = "w-full h-[300px] object-cover rounded-md"
            modalContent.append(modalImage)

            // Detailed Info in the modal
            const modalInfo = document.createElement("div")
            modalInfo.classList = "p-4"

            // rabbit name
            const modalName = document.createElement("h2")
            modalName.innerText = rabbit.pet_name
            modalName.classList = "text-lg font-bold"
            modalInfo.append(modalName)

            // Breed
            const modalBreed = document.createElement("p")
            modalBreed.innerText = `Breed: ${rabbit.breed}`
            modalInfo.append(modalBreed)

            // Date of Birth
            const modalBirth = document.createElement("p")
            modalBirth.innerText = `Birth: ${rabbit.date_of_birth}`
            modalInfo.append(modalBirth)

            // Gender
            const modalGender = document.createElement("p")
            modalGender.innerText = `Gender: ${rabbit.gender}`
            modalInfo.append(modalGender)

            // Price
            const modalPrice = document.createElement("p")
            modalPrice.innerText = `Price: ${rabbit.price}$`
            modalInfo.append(modalPrice)

            // Description
            const modalDescription = document.createElement("p")
            modalDescription.innerText = `This is one of the sweetest rabbits. It has a lovely name, ${rabbit.pet_name}, and is well-trained. You will be happy to adopt this rabbit.`
            modalInfo.append(modalDescription)

            modalContent.append(modalInfo)

            // Cancel Button at the bottom
            const cancelButton = document.createElement("button")
            cancelButton.innerText = "Cancel"
            cancelButton.classList = "bg-red-500 text-white px-4 py-2 rounded mt-4 w-full"
            cancelButton.addEventListener("click", function() {
                modal.remove(); // Remove the modal on clicking cancel
            })
            modalContent.append(cancelButton)

            // Append modal to body or main container
            modal.append(modalContent)
            document.body.append(modal)
        })




        



    })

}


const birdData = () => {

    petSectionContainer.classList.add("hidden")
    spinner.classList.remove("hidden")

    setTimeout(() => {
        displayRabbitData(data.data);

        spinner.classList.add("hidden")
        petSectionContainer.classList.remove("hidden")
    }, 3000);

}

