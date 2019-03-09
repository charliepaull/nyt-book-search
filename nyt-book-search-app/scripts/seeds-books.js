import mongoose from "mongoose";
import db from "../models";

mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const gbooksSeed = [
    {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
    },

    {
        authors: "Harper Lee",
        description: "The story is told by the little six-year-old girl Jean Louise Finch nicknamed Scout. She is a rebellious girl who has tomboy tendencies. The storyline is based in Maycomb, a small town in Alabama in the 1930s where Scout lives with her elder brother Jem, and her father, Atticus, who is widowed.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg",
        link: "https://books.google.com/books?id=PGR2AwAAQBAJ&printsec=frontcover&dq=title:To+Kill+A+Mockingbird&hl=en&sa=X&ved=2ahUKEwiL6f3i6PPgAhVCrFQKHe_TD1IQ6AEwAHoECAYQAg#v=onepage&q&f=false", 
        title: "To Kill A Mockingbird"
    }, 

    {
        author: "Kurt Vonnegut",
        description: "A Duty-Dance with Death (1969) is a science fiction-infused anti-war novel by Kurt Vonnegut about the World War II experiences and journeys through time of Billy Pilgrim, from his time as an American soldier and chaplain's assistant, to postwar and early years.",
        image: "https://books.google.com/books/content?id=1yiRYgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73OrgHyWaAb5KTmBSvnqtVi96B3HE1BZCdDS7AQH9qGjN1zjIaJZQsnutXJfStvsPpIn0Ts3NqGb8VOJXAJQYkovUAhudWEzaQGBoylbAa6_2XmBKYW988WQ_IidPAuIqsa0l4T", 
        link: "https://books.google.com/books?id=1yiRYgEACAAJ&dq=title:+slaughterhouse+five&hl=en&sa=X&ved=2ahUKEwjK5pme6fPgAhWoxlQKHZMdAtoQ6wEwAXoECAAQAQ", 
        title: "SlaughterHouse Five"
    }, 

    {
        author: ["Steven D. Levitt", "Stephen J. Dubner"],
        description: "A Rogue Economist Explores the Hidden Side of Everything is the debut non-fiction book by University of Chicago economist Steven Levitt and New York Times journalist Stephen J. Dubner. It was published on April 12, 2005, by William Morrow. The book has been described as melding pop culture with economics.",
        image: "https://books.google.com/books/content?id=wNPnl5zYA-cC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73VzK-MjIot3B1si1_2a1Lq7gJeUTJRPHls3jK8jAA7Fg5HCwN_rMT3_NiBlxL65mNbaClfiAlDZTB7JJ2mP-voiyH4367K3ol6NNKSRUHxhpMi7x2ptGi5Xar_sOMU_xH72ehD",
        link: "https://books.google.com/books?id=wNPnl5zYA-cC&printsec=frontcover&dq=title:+freakonomics&hl=en&sa=X&ved=2ahUKEwjgvOK46fPgAhUpi1QKHYrlBSMQ6AEwAHoECAQQAg#v=onepage&q&f=false",
        title: "Freakonomics"
    }, 

    {
        author: "Bill Browder",
        description: "A financial caper, a crime thriller, and a political crusade, Red Notice is the story of one man taking on overpowering odds to change the world, and also the story of how, without intending to, he found meaning in his life.",
        image: "https://books.google.com/books/content?id=sZ-SBgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73zQNNy8UcqsIKdTVylzun4yNjaWtU2c9jl3qv1goZHI_uOlE3v0gcfP8ZnBo-UDOGVxxM3NosjvpK4jCaTcWm4dtN7MVUG5Z-OnM2AJLy9hg5Ollu5BLo69kqBJLxVNg4W6vN0",
        link: "https://books.google.com/books?id=sZ-SBgAAQBAJ&dq=title:+red+notice&hl=en&sa=X&ved=2ahUKEwjq4sLu6fPgAhXGjFQKHUNwBAAQ6AEwAHoECAAQAg",
        title: "Red Notice"
    }
    
]