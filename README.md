# Project 3 - Cookie Swap




* Sleep bar will decrease every 6 hours
* Play bar will decrease every 3 hours
* hungry bar will decrease every 2 hours

![Image of PetPark](https://github.com/JoshVanOverbeke/Project2/blob/master/public/assets/img/petpark.gif)

## Links

- Deployment page: https://pet-park.herokuapp.com/
- Repository: https://github.com/JoshVanOverbeke/Project2

## Installing / Getting started

This application doesn't require any other installation for a user.

## Initial Configuration

Before starting development of this application, we needed to npm install express-jwt, express, moment, express-handlebars, mysqul2, and sequelize packages. We created the database on jawsDB and deployed to Heroku.

## Things that worked well

A couple of things that worked well for us are listed below.
* checkToken function: show the buttons according to whether there is a token in the local storage

* timeout for thunder gif and boom gif after clicking resurrect and hard kill

* See the code snippet for these two below under code snippet 2 and 3

## Running the tests

We ran tests creating a user and creating a pet.  Made pets with all of our gifs. We fed, played, and napped a pet to make sure the bars increase.  We also killed a pet and resurrected it.  Changed our time to minutes to simulate time passing to make sure that the feed, sleep, play, and hp decreases if it has been too long.  Made sure authentication works and a user needs to be logged in before they can play with the pet.  

## Code Snippet

* Code Snippet 1
```
// increment hungry by one
     db.Pet.findOne(
        {
            where: {
                id:req.params.id
            }
        })
        .then(function(foundPet) {
        return foundPet.update({hungry: parseInt(foundPet.hungry)+1})
        })
        .then(function(result) {
        console.log("results: ", result)
        });
```
* Code Snippet 2
```
//////////// manage btns on the page================================================================
// a function that check if there is a token in localstorage
// if is display log-out btn
// if not display log-in and sign-up btns
function checkToken() {
    console.log(localStorage.getItem("token"))
    if (localStorage.getItem("token") === null) {
        $("#logoutBtn").css("display", "none")
        $("#loginModalBtn").attr("style", "display:inline!important")
        $("#signinModalBtn").attr("style", "display:inline!important")
    } else {
        $("#logoutBtn").css("display", "inline")
        $("#loginModalBtn").attr("style", "display:none!important")
        $("#signinModalBtn").attr("style", "display:none!important")
    }
}
```
* Code Snippet 3
```
// click handler for resurrecting the pet
    $("#resurrectBtn").on("click", function (e) {
        e.preventDefault()
        console.log("click")
        // hide the modal
        $('#petStatus').modal('hide')
        var id = $(this).data("id")
        // show the thunder
        let thunderImg = `<div><img src="/assets/img/thunder.gif" id="thunder"  style="width:80%"></div>`
        $(".grave[data-id=" + id + "]").append(thunderImg)
        //remove the thunder and reload the dom to show the resurrected pet
        setTimeout(function () {
            $('#thunder').remove()
            // a PUT request to change the pet back to alive
            let requestBody = {
                action: "Resurrect"
            }
            console.log(requestBody)
            // PUT: change specific data of specific pet
            $.ajax({
                url: "/api/pets/" + id,
                type: 'PUT',
                data: requestBody,
            }).then(function (result) {
                console.log("The pet is resurrected!");
                location.reload()
            })
        }, 1200)
    })
    // clickhandler for hard kill the pet
    $("#hardKillBtn").on("click", function (e) {
        e.preventDefault()
        if (localStorage.getItem("token") === null) {
            alert("You need to log in to hard kill a pet!")
        } else {
            var id = $(this).data("id")
            // DELETE: remove a pet from the database
            $.ajax({
                url: "/api/pet/" + id,
                type: 'DELETE',
            }).then(function (result) {
                if (result === "notOwner") {
                    alert("Sorry, you're not the owner!")
                } else {
                    // hide the modal
                    $('#petStatus').modal('hide')
                    // show the boom and remove it and reload
                    let boomImg = `<div><img src="/assets/img/boom.png" id="boom"></div>`
                    $(".grave[data-id=" + id + "]").append(boomImg)
                    setTimeout(function () {
                        $('#boom').remove()
                        location.reload()
                    }, 800)
                }
            })
        }
    })
```
## Built With
* jquery
* Bootstrap
* express-handlebars
* express
* moment
* sequelize
* express-jwt
* jwt

## Happy Users

![Image of PetPark](https://github.com/JoshVanOverbeke/Project2/blob/master/public/assets/img/happyusers.jpeg)