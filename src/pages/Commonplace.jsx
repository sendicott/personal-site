import { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack, Divider, Container } from '@chakra-ui/react';

function Commonplace() {
  // const quotes = [
  //   {
  //     text: "Keep thy mind in hell, and despair not.",
  //     author: "St. Silouan the Athonite",
  //   },
  //   {
  //     text: "Animus debes mutare, non caelum. (You must change your soul, not the sky)",
  //     author: "Lucio Anneo Seneca",
  //   },
  //   {
  //     text: "The challenge is to resist circumstances. Any idiot can be happy in a happy place, but moral courage is required to be happy in a hellhole.",
  //     author: "Joyce Carol Oates",
  //   },
  //   {
  //     text: "Man is an animal, and his happiness depends upon his physiology more than he likes to think. This is a humble conclusion, but I cannot make myself disbelieve it. Unhappy businessmen, I am convinced, would increase their happiness more by walking six miles every day than by any conceivable change of philosophy.",
  //     author: "Bertrand Russell",
  //   },
  //   {
  //     text: "Not one of us knows what effect his life produces, and what he gives to others; that is hidden from us and must remain so, though we are often allowed to see some little fraction of it, so that we may not lose courage. The way in which power works is a mystery.",
  //     author: "Albert Schweitzer",
  //   },
  //   {
  //     text: "Man is a rational animal — so at least I have been told. Throughout a long life, I have looked diligently for evidence in favor of this statement, but so far I have not had the good fortune to come across it.",
  //     author: "Bertrand Russell",
  //   },
  //   {
  //     text: "There is no man, however wise, who has not at some period in his youth said things, or lived in a way the consciousness of which is so unpleasant to him in later life that he would gladly, if he could, expunge it from his memory.",
  //     author: "Marcel Proust",
  //   },
  //   {
  //     text: "Modern man is afraid of silence because in silence he might hear God.",
  //     author: "Metropolitan Tikhon Shevkunov",
  //   },
  //   {
  //     text: "We are as forlorn as children lost in the woods. When you stand in front of me and look at me, what do you know of the griefs that are in me and what do I know of yours? And if I were to cast myself down before you and weep and tell you, what more would you know about me than you know about Hell when someone tells you it is hot and dreadful? For that reason alone we human beings ought to stand before one another as reverently, as reflectively, as lovingly, as we would before the entrance to Hell.",
  //     author: "Franz Kafka",
  //   },
  //   {
  //     text: "There are no ordinary people. You have never talked to a mere mortal. Nations, cultures, arts, civilizations - these are mortal, and their life is to ours as the life of a gnat. But it is immortals whom we joke with, work with, marry, snub and exploit - immortal horrors or everlasting splendors. This does not mean that we are to be perpetually solemn. We must play. But our merriment must be of that kind (and it is, in fact, the merriest kind) which exists between people who have, from the outset, taken each other seriously - no flippancy, no superiority, no presumption.",
  //     author: "C.S. Lewis",
  //   },
  //   {
  //     text: "None of us has all the qualities to be a good observer of his age.",
  //     author: "George Kennan",
  //   },
  //   {
  //     text: "It is the task of the university to prepare men for the formation of their prejudices, not to impregnate them with its own.",
  //     author: "George Kennan",
  //   },
  //   {
  //     text: "Ce ne sont que les Français qui puissent faire une si belle ruine. (Only the French can make such a beautiful ruin.)",
  //     author: "George Kennan’s German uncle",
  //   },
  //   {
  //     text: "I suddenly became aware that I had a reputable and appointed place in the proceedings: I was now responsible for the well-being of others. For this reason, I was something more than my usual self. I no longer had to relate myself to others as a species of naked intruder on the human scene. I had a role to play, a useful, necessary, legitimate role, helpful to others, requiring no justification or apology. If I played it credibly, I acquitted myself; there could be no need for further questions. Under this welcome mask I felt a hitherto unknown strength that was never entirely to fail me…",
  //     author: "George Kennan",
  //     note: "This reminds me of fatherhood…",
  //   },
  //   {
  //     text: "Dearest, I beg of you, sleep properly and go for walks.",
  //     author: "Franz Kafka",
  //   },
  //   {
  //     text: "For the Christians are distinguished from other men neither by country, nor language, nor the customs which they observe. For they neither inhabit cities of their own, nor employ a peculiar form of speech, nor lead a life which is marked out by any singularity. The course of conduct which they follow has not been devised by any speculation or deliberation of inquisitive men…they have a common table, but not a common bed. They are in the flesh, but they do not live after the flesh. They pass their days on earth, but they are citizens of heaven.",
  //     author: "The Epistle of Mathetes to Diognetus",
  //   },
  //   {
  //     text: "An honest man falls in love with an honest woman; he wishes, therefore to marry her, to be the father of her children, to secure her and himself. All systems of government should be tested by whether he can do this. If any system—feudal, servile, or barbaric—does, in fact, give him so large a cabbage-field that he can do it, there is the essence of liberty and justice. If any system—republican, mercantile, or Eugenist—does, in fact, give him so small a salary that he can’t do it, there is the essence of eternal tyranny and shame.",
  //     author: "G.K. Chesterton",
  //   },
  //   {
  //     text: "If you’re afraid, you’re already a slave.",
  //     author: "Grzegorz Braun",
  //   },
  //   {
  //     text: "It is sometimes so bitterly cold in the winter that one says, 'The cold is too awful for me to care whether summer is coming or not; the harm outdoes the good.' But with or without our approval, the severe weather does come to an end eventually and one fine morning the wind changes and there is a thaw. When I compare the state of the weather to our state of mind and our circumstances, subject to change and fluctuation like the weather, then I still have some hope that things may get better.",
  //     author: "Vincent Van Gogh",
  //   },
  //   {
  //     text: "How often people speak of art and science as though they were two entirely different things, with no interconnection. An artist is emotional, they think, and uses only his intuition; he sees all at once and has no need of reason. A scientist is cold, they think, and uses only his reason; he argues carefully step by step, and needs no imagination. That is all wrong. The true artist is quite rational as well as imaginative and knows what he is doing; if he does not, his art suffers. The true scientist is quite imaginative as well as rational, and sometimes leaps to solutions where reason can follow only slowly; if he does not, his science suffers.",
  //     author: "Isaac Asimov",
  //   },
  //   {
  //     text: "In the middle of the journey of our life I came to myself within a dark wood where the straight way was lost. Ah, how hard a thing it is to tell what a wild, and rough, and stubborn wood this was, which in my thought renews the fear!",
  //     author: "Dante Alighieri",
  //   },
  //   {
  //     text: "There is no path. The path is made by walking.",
  //     author: "Antonio Machado",
  //   },
  //   {
  //     text: "Blessed is that man who finds his work",
  //     author: "Thomas Carlyle",
  //   },
  //   {
  //     text: "Those who will not slip beneath the still surface on the well of grief, turning down through its black water to the place we cannot breathe, will never know the source from which we drink, the secret water, cold and clear, nor find in the darkness glimmering, the small round coins, thrown by those who wished for something else.",
  //     author: "David Whyte",
  //     title: "The Well of Grief",
  //   },
  //   {
  //     text: "My religious belief teaches me to feel as safe in battle as in bed. God has fixed the time for my death. I do not concern myself about that, but to be always ready, no matter when it may overtake me. That is the way all men should live, and then all would be equally brave.",
  //     author: "Stonewall Jackson",
  //   },
  //   {
  //     text: "Stand at the brink of despair, and when you see that you cannot bear it anymore, draw back a little, and have a cup of tea.",
  //     author: "Sophrony Sakharov",
  //   },
  //   {
  //     text: "Gradually it was disclosed to me that the line separating good and evil passes not through states, nor between classes, nor between political parties either—but right through every human heart—and through all human hearts.",
  //     author: "Aleksandr Solzhenitsyn",
  //   },
  //   {
  //     text: "Man, as long as he lives, must always struggle. And his first fight is to defeat himself.",
  //     author: "St. Ephraim of Katounakia",
  //   },
  //   {
  //     text: "Since limits make us what we are, the idea of absolute freedom is bound to be terroristic.",
  //     author: "Terry Eagleton",
  //   },
  //   {
  //     text: "People in those old times had convictions; we moderns only have opinions. And it needs more than a mere opinion to erect a Gothic cathedral.",
  //     author: "Heinrich Heine",
  //   },
  //   {
  //     text: "The freedom to love presupposes the responsibility to be a channel of reconciliation.",
  //     author: "Stavros Kofinas",
  //   },
  //   {
  //     text: "A man who is unable to bear chastisement is unable to be healed.",
  //     author: "Fr Paul Truebenbach",
  //   },
  //   {
  //     text: "If the world is against the truth, then I am against the world.",
  //     author: "St. Athanasios the Great",
  //   },
  //   {
  //     text: "When one falsity has been let in, infinite others follow.",
  //     author: "Baruch Spinoza",
  //   },
  //   {
  //     text: "Before you act, you should pray, for action before prayer is pride.",
  //     author: "St. Paisios of Mt. Athos",
  //   },
  //   {
  //     text: "Nobody is equal to anybody. Even the same man is not equal to himself on different days.",
  //     author: "Thomas Sowell",
  //   },
  //   {
  //     text: "The same Greek word (pathos) that is translated as suffering can also mean the passions (e.g., anger, lust, pride, despair).",
  //     author: "Daniel B. Hinshaw",
  //   },
  //   {
  //     text: "Be at peace with your soul and heaven and earth will be at peace with you. Endeavor to enter the treasury within you and you will see the treasury which is in heaven…The ladder of that kingdom is hidden…within your soul. Dive away from sin into yourself and there you will find the steps by which you may ascend.",
  //     author: "St. Isaac of Nineveh",
  //   },
  //   {
  //     text: "The doing of things from duty is but a stage on the road to the kingdom of truth and love.",
  //     author: "George MacDonald",
  //   },
  //   {
  //     text: "‘I have led a toothless life,’ he thought. ‘A toothless life. I have never bitten into anything. I was waiting. I was reserving myself for later on—and I have just noticed that my teeth have gone.’",
  //     author: "Jean-Paul Sartre",
  //   },
  //   {
  //     text: "It is the habit of tyrants to prefer the company of aliens. Citizens they feel are enemies, but aliens will offer no opposition.",
  //     author: "Aristotle",
  //   },
  //   {
  //     text: "However, he who makes himself a worm cannot complain afterwards that he gets stepped on.",
  //     author: "Immanuel Kant",
  //   },
  //   {
  //     text: "These are days when the Christian is expected to praise every creed but his own.",
  //     author: "G.K. Chesterton",
  //   },
  //   {
  //     text: "Tolerance is the virtue of people who do not believe in anything.",
  //     author: "G.K. Chesterton",
  //   },
  //   {
  //     text: "Just as the tadpole already breathes, though with different organs from those of the frog, so the child acts like the adult, but employing a mentality whose structure varies according to the stages of its development.",
  //     author: "Jean Piaget",
  //   },
  //   {
  //     text: "The patient should give some indication of wanting not only change but 𝘵𝘰 𝘤𝘩𝘢𝘯𝘨𝘦, that is, of dissatisfaction with something that resides in the self",
  //     author: "Otto Kernberg",
  //   },
  //   {
  //     text: "The goal is not simply to avoid sin but to rise spiritually.",
  //     author: "Saint Paisios",
  //   },
  //   {
  //     text: "Tradition is not the worship of ashes, but the preservation of fire.",
  //     author: "Roman Maxim",
  //   },
  //   {
  //     text: "There are always plenty of rivals to our work. We are always falling in love or quarreling, looking for jobs or fearing to lose them, getting ill and recovering, following public affairs. If we let ourselves, we shall always be waiting for some distraction or other to end before we can really get down to our work. The only people who achieve much are those who want knowledge so badly that they seek it while the conditions are still unfavourable. Favourable conditions never come.",
  //     author: "C.S. Lewis",
  //   },
  //   {
  //     text: "There is a God-shaped vacuum in every man that only Christ can fill.",
  //     author: "St. Augustine",
  //   },
  //   {
  //     text: "The soul is healed by being with children.",
  //     author: "Fyodor Dostoevsky",
  //   },
  //   {
  //     text: "When you pray to God in time of temptation do not say, 'Take this or that away from me', but pray like this: 'O Jesus Christ, sovereign Master, help me and do not let me sin against Thee...'",
  //     author: "Abba Isaiah",
  //   },
  //   {
  //     text: "We must not mind insulting men, if by respecting them we offend God.",
  //     author: "St. John Chrysostom",
  //   },
  //   {
  //     text: "No matter how just your words may be, you ruin everything when you speak with anger.",
  //     author: "St. John Chrysostom",
  //   },
  //   {
  //     text: "There are two kinds of truth: the truth that lights the way and the truth that warms the heart. The first of these is science, and the second is art. Neither is independent of the other or more important than the other. Without art, science would be as useless as a pair of high forceps in the hands of a plumber. Without science, art would become a crude mess of folklore and emotional quackery. The truth of art keeps science from becoming inhuman, and the truth of science keeps art from becoming ridiculous.",
  //     author: "Raymond Chandler",
  //   },
  //   {
  //     text: "Everything written with vitality expresses that vitality: there are no dull subjects, only dull minds. All men who read escape from something else into what lies behind the printed page; the quality of the dream may be argued, but its release has become a functional necessity. All men must escape at times from the deadly rhythm of their private thoughts. It is part of the process of life among thinking beings.",
  //     author: "Raymond Chandler",
  //   },
  //   {
  //     text: "I remember a psychiatrist telling me that I gamble in order to escape the reality of life, and I told him that’s why everyone does everything.",
  //     author: "Norm MacDonald",
  //   },
  //   {
  //     text: "The only thing an old man can tell a young man is that it goes fast, real fast, and if you’re not careful it’s too late. Of course, the young man will never understand this truth.",
  //     author: "Norm MacDonald",
  //   },
  //   {
  //     text: "No one can heal my disease except He Who knows the depths of the heart.",
  //     author: "St. Ephraim the Syrian",
  //   },
  //   {
  //     text: "A healthy person has a thousand dreams but a sick person has only one dream.",
  //     author: "Robert F. Kennedy Jr.",
  //   },
  //   {
  //     text: "There’s no vocabulary For love within a family, love that’s lived in But not looked at, love within the light of which All else is seen, the love within which All other love finds speech. This love is silent.",
  //     author: "T.S. Eliot",
  //   },
  //   {
  //     text: "Mystery does not imply muddled thinking. On the other hand, thinking you could be clear about something which in its nature is essentially mysterious is muddled thinking.",
  //     author: "Iain McGilchrist",
  //   },
  //   {
  //     text: "What did you do as a child that made the hours pass like minutes? Herein lies the key to your earthly pursuits.",
  //     author: "Carl Jung",
  //   },
  //   {
  //     text: "Abstract love of humanity is nearly always love of self.",
  //     author: "Fyodor Dostoyevsky",
  //   },
  //   {
  //     text: "To try too hard to make people good, is one way to make them worse; … the only way to make them good is to be good—remembering well the beam and the mote; … the time for speaking comes rarely, the time for being never departs.",
  //     author: "George MacDonald",
  //   },
  //   {
  //     text: "Marriage is a matter of justice for children.",
  //     author: "Katy Faust",
  //   },
  //   {
  //     text: "There is no coming to consciousness without pain.",
  //     author: "Carl Jung",
  //   },
  //   {
  //     text: "Let everything happen to you: beauty and terror. Just keep going. No feeling is final.",
  //     author: "Rainer Maria Rilke",
  //   },
  //   {
  //     text: "Man is fond of counting his troubles, but he does not count his joys.",
  //     author: "Fyodor Dostoyevsky",
  //   },
  //   {
  //     text: "We do not merely study the past: we inherit it, and inheritance brings with it not only the rights of ownership, but the duties of trusteeship. Things fought for and died for should not be idly squandered. For they are the property of others, who are not yet born.",
  //     author: "Roger Scruton",
  //   },
  //   {
  //     text: "My argument against God was that the universe seemed so cruel and unjust. But how had I got this idea of just and unjust? A man does not call a line crooked unless he has some idea of a straight line. What was I comparing this universe with when I called it unjust?",
  //     author: "C.S. Lewis",
  //   },
  //   {
  //     text: "By not being aware of having a shadow, you declare a part of your personality to be non-existent. Then it enters the kingdom of the non-existent, which swells up and takes on enormous proportions…When you don’t acknowledge that you have such qualities, you are simply feeding the devils. If you get rid of qualities you don’t like by denying them, you become more and more unaware of what you are, you declare yourself more and more non-existent, and your devils will grow fatter and fatter.",
  //     author: "Carl Jung",
  //   },
  //   {
  //     text: "The faster that you do the hard things you want to avoid, the faster you will receive the good things you actually want.",
  //     author: "Anonymous",
  //   },
  //   {
  //     text: "The search for happiness is one of the chief sources of unhappiness.",
  //     author: "Eric Hoffer",
  //   },
  //   {
  //     text: "Nature loves courage. You make the commitment and nature will respond to that commitment by removing impossible obstacles. Dream the impossible dream and the world will not grind you under, it will lift you up. This is the trick. This is what all these teachers and philosophers who really counted, who really touched the alchemical gold, this is what they understood. This is the shamanic dance in the waterfall. This is how magic is done. By hurling yourself into the abyss and discovering it's a feather bed.",
  //     author: "Terence McKenna",
  //   },
  //   {
  //     text: "The foundation of all mental illness is the unwillingness to experience legitimate suffering.",
  //     author: "Carl Jung",
  //   },
  // ];
  const [quotes, setQuotes] = useState([]);
  const API_URL = 'https://touch-of-wisdom-api.onrender.com';

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`${API_URL}/quotes`);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
    fetchQuotes();
  });

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Commonplace Book
      </Heading>
      <VStack spacing={6} align="stretch">
        {quotes.map((quote, index) => (
          <Box key={index}>
            <Text fontStyle="italic" mb={2}>
              “{quote.text}”
            </Text>
            {quote.author && (
              <Text fontSize="sm" color="gray.600" textAlign="right">
                — {quote.author}
                {quote.title && `, ${quote.title}`}
                {quote.note && ` (${quote.note})`}
              </Text>
            )}
            <Divider my={4} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
}

export default Commonplace;