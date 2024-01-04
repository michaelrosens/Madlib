let adjective = prompt('Enter an adjective:')
let roominthehouse = prompt('Enter a room in a house:')
let noun = prompt('Enter a noun:')
let verb = prompt('Enter a verb:')
let adverb = prompt('Enter an adverb:')
let food = prompt('Enter a foodsss:')
let emotion = prompt('Enter an emotion:')
let verbendingining = prompt('Enter a verb-ending-in-ing:')
let room = prompt('Enter a room:')
let pluralnoun = prompt('Enter a plural-noun:')
let color = prompt('Enter a color:')

let story = `On Christmas Eve, our family gathered in the <b>${roominthehouse}</b> to celebrate the holiday. The <b>${adjective}</b> tree was adorned with <b>${pluralnoun}</b> and sparkling lights. The aroma of <b>${food}</b> filled the air as we waited for our traditional Christmas <b>${noun}</b> to finish cooking in the oven.
We all rushed to the window to catch a glimpse of the magical scene outside. The <b>${adjective}</b> snow was falling gently, creating a peaceful blanket over the <b>${noun}</b>. In the distance, we could see neighbors' houses adorned with festive <b>${pluralnoun}</b> and glowing lights.
The kids were filled with <b>${emotion}</b> as they anxiously awaited the arrival of Santa Claus. We could hear them giggling and <b>${verbendingining}</b> in the <b>${room}</b>. Suddenly, we heard a sound coming from the <b>${roominthehouse}</b>. It was as if Santa and his reindeer had landed on the roof!
As we settled down for a cozy evening by the <b>${pluralnoun}</b> and enjoyed each other's company. The warmth of the fireplace and the joy in our hearts made it a Christmas to remember.
We all rushed to the window to catch a glimpse of the magical scene outside. The <b>${adjective}</b> snow was falling gently, creating a peaceful blanket over the <b>${noun}</b>. In the distance, we could see neighbors' houses adorned with festive <b>${pluralnoun}</b> and glowing lights.
When it was finally time to exchange gifts, the room filled with laughter and excitement. Each present was wrapped in <b>${color}</b> paper and tied with a <b>${noun}</b>. The kids tore into their gifts with <b>${adjective}</b> enthusiasm, discovering toys, books, and other surprises.
As we settled down for a cozy evening by the <b>${noun}</b>, we exchanged <b>${pluralnoun}</b> and enjoyed each other's company. The warmth of the fireplace and the joy in our hearts made it a Christmas to remember.
As the night came to an end, we gathered around the table for a delicious Christmas ${food}. The room was filled with the sounds of joy and gratitude. It was a magical evening that brought our family closer together, creating memories that would last a lifetime.
When it was finally time to exchange gifts, the room filled with laughter and excitement. Each present was wrapped in <b>${color}</b> paper and tied with a <b>${noun}</b>. The kids tore into their gifts with <b>${adjective}</b> enthusiasm, discovering toys, books, and other surprises.
As the night came to an end, we gathered around the table for a delicious Christmas <b>${food}</b>. The room was filled with the sounds of joy and gratitude. It was a magical evening that brought our family closer together, creating memories that would last a lifetime. `








let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`