let adjective = prompt('Enter a adjective:')
let room_in_the_house = prompt('Enter an room in a house:')
let noun = prompt('Enter a noun:')
let type_of_food = prompt('Enter an type_of_food:')
let emotion = prompt('Enter an emotion:')
let verb_ending_in_ing = prompt('Enter an verb_ending_in_ing:')
let room = prompt('Enter an room:')
let plural_noun = prompt('Enter an plural_noun:')
let color = prompt('Enter a color:')


let story = `On Christmas Eve, our family gathered in the <b>${room_in_the_house}</b> to celebrate the holiday. The ${adjective} tree was adorned with ${plural_noun} and sparkling lights. The aroma of ${type_of_food} filled the air as we waited for our traditional Christmas ${noun} to finish cooking in the oven.

The kids were filled with ${emotion} as they anxiously awaited the arrival of Santa Claus. We could hear them giggling and ${verb_ending_in_ing} in the ${room}. Suddenly, we heard a sound coming from the ${room_in_the_house}. It was as if Santa and his reindeer had landed on the roof!

We all rushed to the window to catch a glimpse of the magical scene outside. The ${adjective} snow was falling gently, creating a peaceful blanket over the ${noun}. In the distance, we could see neighbors' houses adorned with festive ${plural_noun} and glowing lights.

As we settled down for a cozy evening by the ${noun}, we exchanged ${plural_noun} and enjoyed each other's company. The warmth of the fireplace and the joy in our hearts made it a Christmas to remember.

When it was finally time to exchange gifts, the room filled with laughter and excitement. Each present was wrapped in ${color} paper and tied with a ${noun}. The kids tore into their gifts with ${adjective} enthusiasm, discovering toys, books, and other surprises.

As the night came to an end, we gathered around the table for a delicious Christmas ${type_of_food}. The room was filled with the sounds of joy and gratitude. It was a magical evening that brought our family closer together, creating memories that would last a lifetime. '





`


let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`