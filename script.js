let adjective = prompt('Enter an adjective:')
let roominthehouse = prompt('Enter an room in a house:')
let noun = prompt('Enter a noun:')
let verb = prompt('Enter a verb:')
let adverb = prompt('Enter an adverb:')
let typeoffood = prompt('Enter an type-of-food:')
let emotion = prompt('Enter an emotion:')
let verbendingining = prompt('Enter an verb-ending-in-ing:')
let room = prompt('Enter an room:')
let pluralnoun = prompt('Enter an plural-noun:')
let color = prompt('Enter a color:')

let story = `On Christmas Eve, our family gathered in the ${roominthehouse} to celebrate the holiday. The ${adjective} tree was adorned with ${pluralnoun} and sparkling lights. The aroma of ${typeoffood} filled the air as we waited for our traditional Christmas ${noun} to finish cooking in the oven.
We all rushed to the window to catch a glimpse of the magical scene outside. The ${adjective} snow was falling gently, creating a peaceful blanket over the ${noun}. In the distance, we could see neighbors' houses adorned with festive$ ${pluralnoun} and glowing lights.
The kids were filled with ${emotion} as they anxiously awaited the arrival of Santa Claus. We could hear them giggling and ${verbendingining} in the ${room}. Suddenly, we heard a sound coming from the ${roominthehouse}. It was as if Santa and his reindeer had landed on the roof!
As we settled down for a cozy evening by the ${pluralnoun} and enjoyed each other's company. The warmth of the fireplace and the joy in our hearts made it a Christmas to remember.
We all rushed to the window to catch a glimpse of the magical scene outside. The ${adjective} snow was falling gently, creating a peaceful blanket over the ${noun}. In the distance, we could see neighbors' houses adorned with festive ${pluralnoun} and glowing lights.
When it was finally time to exchange gifts, the room filled with laughter and excitement. Each present was wrapped in ${color} paper and tied with a ${noun}. The kids tore into their gifts with ${adjective} enthusiasm, discovering toys, books, and other surprises.
As we settled down for a cozy evening by the ${noun}, we exchanged ${pluralnoun} and enjoyed each other's company. The warmth of the fireplace and the joy in our hearts made it a Christmas to remember.
As the night came to an end, we gathered around the table for a delicious Christmas (type of food). The room was filled with the sounds of joy and gratitude. It was a magical evening that brought our family closer together, creating memories that would last a lifetime.
When it was finally time to exchange gifts, the room filled with laughter and excitement. Each present was wrapped in ${color} paper and tied with a ${noun}. The kids tore into their gifts with ${adjective} enthusiasm, discovering toys, books, and other surprises.
As the night came to an end, we gathered around the table for a delicious Christmas ${typeoffood}. The room was filled with the sounds of joy and gratitude. It was a magical evening that brought our family closer together, creating memories that would last a lifetime. `








let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`