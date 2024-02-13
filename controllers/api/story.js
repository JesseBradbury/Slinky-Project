const router = require("express").Router();

const storyData = {
    title: "The Legend of Slinkying",
    content: `In the quaint town of Springville, nestled amidst rolling hills and lush greenery, there lived a young inventor named Benny Springsworth. Benny was a dreamer, constantly tinkering away in his workshop, concocting wild contraptions that often ended in spectacular failures. But Benny was undeterred, for he was on a quest to invent something truly revolutionary.

    One fateful day, while rummaging through a pile of discarded springs and coils, Benny stumbled upon an old S-shaped piece of metal. Intrigued by its peculiar shape and elasticity, he decided to conduct a series of experiments. Little did he know that his discovery would change the course of history forever.

    Armed with nothing but determination and a healthy dose of curiosity, Benny set out to unlock the secrets of the mysterious metal coil. After countless hours of trial and error, he finally stumbled upon the perfect combination of materials and design.
    
    And thus, the slinky was born.
    
    At first, Benny's invention seemed like nothing more than a novelty item, a curious trinket that amused children and confounded adults. But Benny knew that he had stumbled upon something truly extraordinary, something that had the potential to revolutionize the world of play. Determined to share his invention with the world, Benny embarked on a whirlwind adventure, traveling from town to town, demonstrating the mesmerizing properties of the slinky. And everywhere he went, he captured the hearts and imaginations of people young and old.
    
    But little did Benny know that his invention had caught the attention of a nefarious villain known only as the "Slinky Snatcher." With his sights set on stealing Benny's invention and claiming it as his own, the Slinky Snatcher set out to wreak havoc on the peaceful town of Springville. In a daring showdown that would go down in history as the "Battle of the Bouncing Springs," Benny faced off against the Slinky Snatcher in an epic showdown of wits and ingenuity. Armed with nothing but his trusty slinky and a quick wit, Benny outsmarted the villain at every turn, sending him tumbling into a pile of bouncing coils.
    
    As the dust settled and the town of Springville rejoiced in victory, Benny stood tall as a hero, the inventor of the slinky and the savior of Springville. And from that day forth, the slinky became more than just a toy—it became a symbol of imagination, creativity, and the boundless possibilities that lay ahead. And so, the legend of Benny Springsworth and the slinky lived on, inspiring generations to come to embrace their inner inventors and bounce their way to greatness.`,
};

router.get("/", (req, res) => {
    try {
        res.json(storyData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
