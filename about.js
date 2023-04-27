let testName = document.getElementById("testName")
let testEvent = document.getElementById("testEvent")
let testMessage = document.getElementById("testMessage")

let names = ["Sarah Goodman", "Mitchell Murphy", "Rose Tyler"]
let events = ["Graduation Part", "Corporate Conference", "Friends Reunion"]
let testimonials = ["Finishing high school was a big deal. Moments Venue came through with helping my parents get an awesome places to celebrate.", "Needed a place to get several business partners together. Arranged a large conference room with wonderful catering.", "Finally reuinited with my good friend the Doctor, and our companions. Had a wonderful Dalek free event!"]

function slideTestimonials(){
    let currentTestimonial = Math.floor(Math.random() * 3)





    testName.innerHTML = names[currentTestimonial];
    testEvent.innerHTML = events[currentTestimonial];
    testMessage.innerHTML = testimonials[currentTestimonial]
    
  
}

setInterval(slideTestimonials, 5000)