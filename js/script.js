"use strict"

const getRandomDogImage = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    const dogImageUrl = data.message
    console.log(dogImageUrl)

    // Display the image on the webpage
    const dogImageElement = document.createElement("img")
    dogImageElement.src = dogImageUrl
    dogImageElement.alt = "Dog image"
    document.body.appendChild(dogImageElement)
  } catch (error) {
    console.log(error)
  }
}

getRandomDogImage()
