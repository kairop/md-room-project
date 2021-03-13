import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Home = ({navigation}) => {
  const profileData = {
    name: 'Guest',
    point: 200,
  };

  const booktheHoundoftheBaskervilles = {
    id: 1,
    bookName: 'The Hound of the Baskerville',
    bookCover: images.theHoundoftheBaskerville,
    rating: 4.5,
    language: 'Eng',
    pageNo: 2852,
    author: 'Arthur Conan Doyle',
    genre: ['Adventure', 'Drama'],
    readed: '12k',
    description:" My dear Robinson, It was to your account of a West-Country legend that this tale owes its inception. For this and for your help in the details all thanks.",
    Contents:"Mr. Sherlock HolmesMr. Sherlock Holmes, who was usually very late in the mornings,save upon those not infrequent occasions when he was up allnight, was seated at the breakfast table. I stood upon thehearth-rug and picked up the stick which our visitor had leftbehind him the night before. It was a fine, thick piece of wood,bulbous-headed, of the sort which is known as a “Penang lawyer.”Just under the head was a broad silver band nearly an inchacross. “To James Mortimer, M.R.C.S., from his friends of theC.C.H.,” was engraved upon it, with the date “1884.” It was justsuch a stick as the old-fashioned family practitioner used tocarry—dignified, solid, and reassuring.“Well, Watson, what do you make of it?”Holmes was sitting with his back to me, and I had given him nosign of my occupation.“How did you know what I was doing? I believe you have eyes inthe back of your head.”“I have, at least, a well-polished, silver-plated coffee-pot infront of me,” said he. “But, tell me, Watson, what do you make ofour visitor’s stick? Since we have been so unfortunate as to misshim and have no notion of his errand, this accidental souvenirbecomes of importance. Let me hear you reconstruct the man by anexamination of it.”“I think,” said I, following as far as I could the methods of mycompanion, “that Dr. Mortimer is a successful, elderly medicalman, well-esteemed since those who know him give him this mark oftheir appreciation.”“Good!” said Holmes. “Excellent!”“I think also that the probability is in favour of his being acountry practitioner who does a great deal of his visiting onfoot.”“Why so?”“Because this stick, though originally a very handsome one hasbeen so knocked about that I can hardly imagine a townpractitioner carrying it. The thick-iron ferrule is worn down, soit is evident that he has done a great amount of walking withit.”“Perfectly sound!” said Holmes.“And then again, there is the ‘friends of the C.C.H.’ I shouldguess that to be the Something Hunt, the local hunt to whosemembers he has possibly given some surgical assistance, and whichhas made him a small presentation in return.”“Really, Watson, you excel yourself,” said Holmes, pushing backhis chair and lighting a cigarette. “I am bound to say that inall the accounts which you have been so good as to give of my ownsmall achievements you have habitually underrated your ownabilities. It may be that you are not yourself luminous, but youare a conductor of light. Some people without possessing geniushave a remarkable power of stimulating it. I confess, my dearfellow, that I am very much in your debt.”He had never said as much before, and I must admit that his wordsgave me keen pleasure, for I had often been piqued by hisindifference to my admiration and to the attempts which I hadmade to give publicity to his methods. I was proud, too, to thinkthat I had so far mastered his system as to apply it in a waywhich earned his approval. He now took the stick from my handsand examined it for a few minutes with his naked eyes. Then withan expression of interest he laid down his cigarette, andcarrying the cane to the window, he looked over it again with aconvex lens.“Interesting, though elementary,” said he as he returned to hisfavourite corner of the settee. “There are certainly one or twoindications upon the stick. It gives us the basis for severaldeductions.”“Has anything escaped me?” I asked with some self-importance. “Itrust that there is nothing of consequence which I haveoverlooked?”“I am afraid, my dear Watson, that most of your conclusions wereerroneous. When I said that you stimulated me I meant, to befrank, that in noting your fallacies I was occasionally guidedtowards the truth. Not that you are entirely wrong in thisinstance. The man is certainly a country practitioner. And hewalks a good deal.”“Then I was right.”“To that extent.”“But that was all.”“No, no, my dear Watson, not all—by no means all. I wouldsuggest, for example, that a presentation to a doctor is morelikely to come from a hospital than from a hunt, and that whenthe initials ‘C.C.’ are placed before that hospital the words‘Charing Cross’ very naturally suggest themselves.”“You may be right.”“The probability lies in that direction. And if we take this as aworking hypothesis we have a fresh basis from which to start ourconstruction of this unknown visitor.”“Well, then, supposing that ‘C.C.H.’ does stand for ‘CharingCross Hospital,’ what further inferences may we draw?”“Do none suggest themselves? You know my methods. Apply them!”“I can only think of the obvious conclusion that the man haspractised in town before going to the country.”“I think that we might venture a little farther than this. Lookat it in this light. On what occasion would it be most probablethat such a presentation would be made? When would his friendsunite to give him a pledge of their good will? Obviously at themoment when Dr. Mortimer withdrew from the service of thehospital in order to start a practice for himself. We know therehas been a presentation. We believe there has been a change froma town hospital to a country practice. Is it, then, stretchingour inference too far to say that the presentation was on theoccasion of the change?”“It certainly seems probable.”“Now, you will observe that he could not have been on the _staff_of the hospital, since only a man well-established in a Londonpractice could hold such a position, and such a one would notdrift into the country. What was he, then? If he was in thehospital and yet not on the staff he could only have been ahouse-surgeon or a house-physician—little more than a seniorstudent. And he left five years ago—the date is on the stick. Soyour grave, middle-aged family practitioner vanishes into thinair, my dear Watson, and there emerges a young fellow underthirty, amiable, unambitious, absent-minded, and the possessor ofa favourite dog, which I should describe roughly as being largerthan a terrier and smaller than a mastiff.”I laughed incredulously as Sherlock Holmes leaned back in hissettee and blew little wavering rings of smoke up to the ceiling.“As to the latter part, I have no means of checking you,” said I,“but at least it is not difficult to find out a few particularsabout the man’s age and professional career.” From my smallmedical shelf I took down the Medical Directory and turned up thename. There were several Mortimers, but only one who could be ourvisitor. I read his record aloud.“Mortimer, James, M.R.C.S., 1882, Grimpen, Dartmoor, Devon.House-surgeon, from 1882 to 1884, at Charing Cross Hospital.Winner of the Jackson prize for Comparative Pathology, withessay entitled ‘Is Disease a Reversion?’  Corresponding memberof the Swedish Pathological Society.  Author of ‘Some Freaks ofAtavism’ (_Lancet_ 1882).  ‘Do We Progress?’ (_Journal ofPsychology_, March, 1883). Medical Officer for the parishes ofGrimpen, Thorsley, and High Barrow.”“No mention of that local hunt, Watson,” said Holmes with amischievous smile, “but a country doctor, as you very astutelyobserved. I think that I am fairly justified in my inferences. Asto the adjectives, I said, if I remember right, amiable,unambitious, and absent-minded. It is my experience that it isonly an amiable man in this world who receives testimonials, onlyan unambitious one who abandons a London career for the country,and only an absent-minded one who leaves his stick and not hisvisiting-card after waiting an hour in your room.”“And the dog?”“Has been in the habit of carrying this stick behind his master.Being a heavy stick the dog has held it tightly by the middle,and the marks of his teeth are very plainly visible. The dog’sjaw, as shown in the space between these marks, is too broad inmy opinion for a terrier and not broad enough for a mastiff. Itmay have been—yes, by Jove, it _is_ a curly-haired spaniel.”He had risen and paced the room as he spoke. Now he halted in therecess of the window. There was such a ring of conviction in hisvoice that I glanced up in surprise.“My dear fellow, how can you possibly be so sure of that?”“For the very simple reason that I see the dog himself on ourvery door-step, and there is the ring of its owner. Don’t move, Ibeg you, Watson. He is a professional brother of yours, and yourpresence may be of assistance to me. Now is the dramatic momentof fate, Watson, when you hear a step upon the stair which iswalking into your life, and you know not whether for good or ill.What does Dr. James Mortimer, the man of science, ask of SherlockHolmes, the specialist in crime? Come in!”The appearance of our visitor was a surprise to me, since I hadexpected a typical country practitioner. He was a very tall, thinman, with a long nose like a beak, which jutted out between twokeen, grey eyes, set closely together and sparkling brightly frombehind a pair of gold-rimmed glasses. He was clad in aprofessional but rather slovenly fashion, for his frock-coat wasdingy and his trousers frayed. Though young, his long back wasalready bowed, and he walked with a forward thrust of his headand a general air of peering benevolence. As he entered his eyesfell upon the stick in Holmes’s hand, and he ran towards it withan exclamation of joy. “I am so very glad,” said he. “I was notsure whether I had left it here or in the Shipping Office. Iwould not lose that stick for the world.”“A presentation, I see,” said Holmes.“Yes, sir.”“From Charing Cross Hospital?”“From one or two friends there on the occasion of my marriage.”“Dear, dear, that’s bad!” said Holmes, shaking his head.Dr. Mortimer blinked through his glasses in mild astonishment.“Why was it bad?”“Only that you have disarranged our little deductions. Yourmarriage, you say?”“Yes, sir. I married, and so left the hospital, and with it allhopes of a consulting practice. It was necessary to make a homeof my own.”“Come, come, we are not so far wrong, after all,” said Holmes.“And now, Dr. James Mortimer—”“Mister, sir, Mister—a humble M.R.C.S.”“And a man of precise mind, evidently.”“A dabbler in science, Mr. Holmes, a picker up of shells on theshores of the great unknown ocean. I presume that it is Mr.Sherlock Holmes whom I am addressing and not—”“No, this is my friend Dr. Watson.”“Glad to meet you, sir. I have heard your name mentioned inconnection with that of your friend. You interest me very much,Mr. Holmes. I had hardly expected so dolichocephalic a skull orsuch well-marked supra-orbital development. Would you have anyobjection to my running my finger along your parietal fissure? Acast of your skull, sir, until the original is available, wouldbe an ornament to any anthropological museum. It is not myintention to be fulsome, but I confess that I covet your skull.”Sherlock Holmes waved our strange visitor into a chair. “You arean enthusiast in your line of thought, I perceive, sir, as I amin mine,” said he. “I observe from your forefinger that you makeyour own cigarettes. Have no hesitation in lighting one.”The man drew out paper and tobacco and twirled the one up in theother with surprising dexterity. He had long, quivering fingersas agile and restless as the antennæ of an insect.Holmes was silent, but his little darting glances showed me theinterest which he took in our curious companion. “I presume,sir,” said he at last, “that it was not merely for the purpose ofexamining my skull that you have done me the honour to call herelast night and again today?”“No, sir, no; though I am happy to have had the opportunity ofdoing that as well. I came to you, Mr. Holmes, because Irecognized that I am myself an unpractical man and because I amsuddenly confronted with a most serious and extraordinaryproblem. Recognizing, as I do, that you are the second highestexpert in Europe—”“Indeed, sir! May I inquire who has the honour to be the first?”asked Holmes with some asperity.“To the man of precisely scientific mind the work of MonsieurBertillon must always appeal strongly.”“Then had you not better consult him?”“I said, sir, to the precisely scientific mind. But as apractical man of affairs it is acknowledged that you stand alone.I trust, sir, that I have not inadvertently—”“Just a little,” said Holmes. “I think, Dr. Mortimer, you woulddo wisely if without more ado you would kindly tell me plainlywhat the exact nature of the problem is in which you demand myassistance.”",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  const booktreasureIsland = {
    id: 2,
    bookName: 'Treasure Island',
    bookCover: images.treasureIsland,
    rating: 4.1,
    language: 'Eng',
    pageNo: 120,
    author: 'Robert Louis Stevenson',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    description:
      " TO THE HESITATING PURCHASERIf sailor tales to sailor tunes,Storm and adventure, heat and cold,If schooners, islands, and maroons,And buccaneers, and buried gold,And all the old romance, retoldExactly in the ancient way,Can please, as me they pleased of old,The wiser youngsters of today:--So be it, and fall on!  If not,If studious youth no longer crave,His ancient appetites forgot,Kingston, or Ballantyne the brave,Or Cooper of the wood and wave:So be it, also!  And may IAnd all my pirates share the graveWhere these and their creations lie!",
    Contents:
      "PART ONE--The Old Buccaneer1The Old Sea-dog at the Admiral BenbowSQUIRE TRELAWNEY, Dr. Livesey, and the rest of these gentlemen havingasked me to write down the whole particulars about Treasure Island, fromthe beginning to the end, keeping nothing back but the bearings of theisland, and that only because there is still treasure not yet lifted, Itake up my pen in the year of grace 17__ and go back to the time whenmy father kept the Admiral Benbow inn and the brown old seaman with thesabre cut first took up his lodging under our roof.I remember him as if it were yesterday, as he came plodding to theinn door, his sea-chest following behind him in a hand-barrow--atall, strong, heavy, nut-brown man, his tarry pigtail falling over theshoulder of his soiled blue coat, his hands ragged and scarred, withblack, broken nails, and the sabre cut across one cheek, a dirty, lividwhite. I remember him looking round the cove and whistling to himselfas he did so, and then breaking out in that old sea-song that he sang sooften afterwards:“Fifteen men on the dead man’s chest--Yo-ho-ho, and a bottle of rum!”in the high, old tottering voice that seemed to have been tuned andbroken at the capstan bars. Then he rapped on the door with a bit ofstick like a handspike that he carried, and when my father appeared,called roughly for a glass of rum. This, when it was brought to him,he drank slowly, like a connoisseur, lingering on the taste and stilllooking about him at the cliffs and up at our signboard.“This is a handy cove,” says he at length; “and a pleasant sittyatedgrog-shop. Much company, mate?”My father told him no, very little company, the more was the pity.“Well, then,” said he, “this is the berth for me. Here you, matey,” hecried to the man who trundled the barrow; “bring up alongside and helpup my chest. I’ll stay here a bit,” he continued. “I’m a plain man; rumand bacon and eggs is what I want, and that head up there for to watchships off. What you mought call me? You mought call me captain. Oh, Isee what you’re at--there”; and he threw down three or four gold pieceson the threshold. “You can tell me when I’ve worked through that,” sayshe, looking as fierce as a commander.And indeed bad as his clothes were and coarsely as he spoke, he had noneof the appearance of a man who sailed before the mast, but seemed likea mate or skipper accustomed to be obeyed or to strike. The man who camewith the barrow told us the mail had set him down the morning before atthe Royal George, that he had inquired what inns there were along thecoast, and hearing ours well spoken of, I suppose, and described aslonely, had chosen it from the others for his place of residence. Andthat was all we could learn of our guest.He was a very silent man by custom. All day he hung round the cove orupon the cliffs with a brass telescope; all evening he sat in a cornerof the parlour next the fire and drank rum and water very strong. Mostlyhe would not speak when spoken to, only look up sudden and fierce andblow through his nose like a fog-horn; and we and the people who cameabout our house soon learned to let him be. Every day when he came backfrom his stroll he would ask if any seafaring men had gone by along theroad. At first we thought it was the want of company of his own kindthat made him ask this question, but at last we began to see he wasdesirous to avoid them. When a seaman did put up at the Admiral Benbow(as now and then some did, making by the coast road for Bristol) hewould look in at him through the curtained door before he entered theparlour; and he was always sure to be as silent as a mouse when any suchwas present. For me, at least, there was no secret about the matter, forI was, in a way, a sharer in his alarms. He had taken me aside one dayand promised me a silver fourpenny on the first of every month if Iwould only keep my “weather-eye open for a seafaring man with one leg”and let him know the moment he appeared. Often enough when the firstof the month came round and I applied to him for my wage, he would onlyblow through his nose at me and stare me down, but before the week wasout he was sure to think better of it, bring me my four-penny piece, andrepeat his orders to look out for “the seafaring man with one leg.”How that personage haunted my dreams, I need scarcely tell you. Onstormy nights, when the wind shook the four corners of the house andthe surf roared along the cove and up the cliffs, I would see him in athousand forms, and with a thousand diabolical expressions. Now the legwould be cut off at the knee, now at the hip; now he was a monstrouskind of a creature who had never had but the one leg, and that in themiddle of his body. To see him leap and run and pursue me over hedge andditch was the worst of nightmares. And altogether I paid pretty dear formy monthly fourpenny piece, in the shape of these abominable fancies.But though I was so terrified by the idea of the seafaring man with oneleg, I was far less afraid of the captain himself than anybody else whoknew him. There were nights when he took a deal more rum and waterthan his head would carry; and then he would sometimes sit and sing hiswicked, old, wild sea-songs, minding nobody; but sometimes he would callfor glasses round and force all the trembling company to listen to hisstories or bear a chorus to his singing. Often I have heard the houseshaking with “Yo-ho-ho, and a bottle of rum,” all the neighbours joiningin for dear life, with the fear of death upon them, and each singinglouder than the other to avoid remark. For in these fits he was the mostoverriding companion ever known; he would slap his hand on the table forsilence all round; he would fly up in a passion of anger at a question,or sometimes because none was put, and so he judged the company was notfollowing his story. Nor would he allow anyone to leave the inn till hehad drunk himself sleepy and reeled off to bed.His stories were what frightened people worst of all. Dreadful storiesthey were--about hanging, and walking the plank, and storms at sea, andthe Dry Tortugas, and wild deeds and places on the Spanish Main. By hisown account he must have lived his life among some of the wickedest menthat God ever allowed upon the sea, and the language in which he toldthese stories shocked our plain country people almost as much as thecrimes that he described. My father was always saying the inn would beruined, for people would soon cease coming there to be tyrannized overand put down, and sent shivering to their beds; but I really believe hispresence did us good. People were frightened at the time, but on lookingback they rather liked it; it was a fine excitement in a quiet countrylife, and there was even a party of the younger men who pretended toadmire him, calling him a “true sea-dog” and a “real old salt” andsuch like names, and saying there was the sort of man that made Englandterrible at sea.In one way, indeed, he bade fair to ruin us, for he kept on staying weekafter week, and at last month after month, so that all the money hadbeen long exhausted, and still my father never plucked up the heart toinsist on having more. If ever he mentioned it, the captain blew throughhis nose so loudly that you might say he roared, and stared my poorfather out of the room. I have seen him wringing his hands after such arebuff, and I am sure the annoyance and the terror he lived in must havegreatly hastened his early and unhappy death.All the time he lived with us the captain made no change whatever in hisdress but to buy some stockings from a hawker. One of the cocks of hishat having fallen down, he let it hang from that day forth, though itwas a great annoyance when it blew. I remember the appearance of hiscoat, which he patched himself upstairs in his room, and which, beforethe end, was nothing but patches. He never wrote or received a letter,and he never spoke with any but the neighbours, and with these, for themost part, only when drunk on rum. The great sea-chest none of us hadever seen open.He was only once crossed, and that was towards the end, when my poorfather was far gone in a decline that took him off. Dr. Livesey camelate one afternoon to see the patient, took a bit of dinner from mymother, and went into the parlour to smoke a pipe until his horse shouldcome down from the hamlet, for we had no stabling at the old Benbow. Ifollowed him in, and I remember observing the contrast the neat, brightdoctor, with his powder as white as snow and his bright, black eyes andpleasant manners, made with the coltish country folk, and above all,with that filthy, heavy, bleared scarecrow of a pirate of ours, sitting,far gone in rum, with his arms on the table. Suddenly he--the captain,that is--began to pipe up his eternal song:“Fifteen men on the dead man’s chest--Yo-ho-ho, and a bottle of rum!Drink and the devil had done for the rest--Yo-ho-ho, and a bottle of rum!”At first I had supposed “the dead man’s chest” to be that identical bigbox of his upstairs in the front room, and the thought had been mingledin my nightmares with that of the one-legged seafaring man. But by thistime we had all long ceased to pay any particular notice to the song; itwas new, that night, to nobody but Dr. Livesey, and on him I observed itdid not produce an agreeable effect, for he looked up for a moment quiteangrily before he went on with his talk to old Taylor, the gardener, ona new cure for the rheumatics. In the meantime, the captain graduallybrightened up at his own music, and at last flapped his hand uponthe table before him in a way we all knew to mean silence. The voicesstopped at once, all but Dr. Livesey’s; he went on as before speakingclear and kind and drawing briskly at his pipe between every word ortwo. The captain glared at him for a while, flapped his hand again,glared still harder, and at last broke out with a villainous, low oath,“Silence, there, between decks!”“Were you addressing me, sir?” says the doctor; and when the ruffian hadtold him, with another oath, that this was so, “I have only one thing tosay to you, sir,” replies the doctor, “that if you keep on drinking rum,the world will soon be quit of a very dirty scoundrel!”The old fellow’s fury was awful. He sprang to his feet, drew and openeda sailor’s clasp-knife, and balancing it open on the palm of his hand,threatened to pin the doctor to the wall.The doctor never so much as moved. He spoke to him as before, over hisshoulder and in the same tone of voice, rather high, so that all theroom might hear, but perfectly calm and steady: “If you do not put thatknife this instant in your pocket, I promise, upon my honour, you shallhang at the next assizes.”Then followed a battle of looks between them, but the captain soonknuckled under, put up his weapon, and resumed his seat, grumbling likea beaten dog.“And now, sir,” continued the doctor, “since I now know there’s such afellow in my district, you may count I’ll have an eye upon you day andnight. I’m not a doctor only; I’m a magistrate; and if I catch a breathof complaint against you, if it’s only for a piece of incivility liketonight’s, I’ll take effectual means to have you hunted down and routedout of this. Let that suffice.”Soon after, Dr. Livesey’s horse came to the door and he rode away, butthe captain held his peace that evening, and for many evenings to come.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };

  const booktheWonderful = {
    id: 3,
    bookName: 'The Wonderful Wizard of Oz',
    bookCover: images.theWonderful,
    rating: 3.5,
    language: 'Eng',
    pageNo: 55,
    author: 'L. Frank Baum',
    genre: ['Drama', 'Adventure', 'Romance'],
    readed: '13k',
    description:
      'Folklore, legends, myths and fairy tales have followed childhoodthrough the ages, for every healthy youngster has a wholesome andinstinctive love for stories fantastic, marvelous and manifestlyunreal. The winged fairies of Grimm and Andersen have brought morehappiness to childish hearts than all other human creations.Yet the old time fairy tale, having served for generations, may now beclassed as “historical” in the children’s library; for the time hascome for a series of newer “wonder tales” in which the stereotypedgenie, dwarf and fairy are eliminated, together with all the horribleand blood-curdling incidents devised by their authors to point afearsome moral to each tale. Modern education includes morality;therefore the modern child seeks only entertainment in its wonder talesand gladly dispenses with all disagreeable incident.Having this thought in mind, the story of “The Wonderful Wizard of Oz”was written solely to please children of today. It aspires to being amodernized fairy tale, in which the wonderment and joy are retained andthe heartaches and nightmares are left out.L. Frank BaumChicago, April, 1900.',
    Contents:
      "Chapter IThe CycloneDorothy lived in the midst of the great Kansas prairies, with UncleHenry, who was a farmer, and Aunt Em, who was the farmer’s wife. Theirhouse was small, for the lumber to build it had to be carried by wagonmany miles. There were four walls, a floor and a roof, which made oneroom; and this room contained a rusty looking cookstove, a cupboard forthe dishes, a table, three or four chairs, and the beds. Uncle Henryand Aunt Em had a big bed in one corner, and Dorothy a little bed inanother corner. There was no garret at all, and no cellar—except asmall hole dug in the ground, called a cyclone cellar, where the familycould go in case one of those great whirlwinds arose, mighty enough tocrush any building in its path. It was reached by a trap door in themiddle of the floor, from which a ladder led down into the small, darkhole.When Dorothy stood in the doorway and looked around, she could seenothing but the great gray prairie on every side. Not a tree nor ahouse broke the broad sweep of flat country that reached to the edge ofthe sky in all directions. The sun had baked the plowed land into agray mass, with little cracks running through it. Even the grass wasnot green, for the sun had burned the tops of the long blades untilthey were the same gray color to be seen everywhere. Once the house hadbeen painted, but the sun blistered the paint and the rains washed itaway, and now the house was as dull and gray as everything else.When Aunt Em came there to live she was a young, pretty wife. The sunand wind had changed her, too. They had taken the sparkle from her eyesand left them a sober gray; they had taken the red from her cheeks andlips, and they were gray also. She was thin and gaunt, and never smilednow. When Dorothy, who was an orphan, first came to her, Aunt Em hadbeen so startled by the child’s laughter that she would scream andpress her hand upon her heart whenever Dorothy’s merry voice reachedher ears; and she still looked at the little girl with wonder that shecould find anything to laugh at.Uncle Henry never laughed. He worked hard from morning till night anddid not know what joy was. He was gray also, from his long beard to hisrough boots, and he looked stern and solemn, and rarely spoke.It was Toto that made Dorothy laugh, and saved her from growing as grayas her other surroundings. Toto was not gray; he was a little blackdog, with long silky hair and small black eyes that twinkled merrily oneither side of his funny, wee nose. Toto played all day long, andDorothy played with him, and loved him dearly.Today, however, they were not playing. Uncle Henry sat upon thedoorstep and looked anxiously at the sky, which was even grayer thanusual. Dorothy stood in the door with Toto in her arms, and looked atthe sky too. Aunt Em was washing the dishes.From the far north they heard a low wail of the wind, and Uncle Henryand Dorothy could see where the long grass bowed in waves before thecoming storm. There now came a sharp whistling in the air from thesouth, and as they turned their eyes that way they saw ripples in thegrass coming from that direction also.Suddenly Uncle Henry stood up.“There’s a cyclone coming, Em,” he called to his wife. “I’ll go lookafter the stock.” Then he ran toward the sheds where the cows andhorses were kept.Aunt Em dropped her work and came to the door. One glance told her ofthe danger close at hand.“Quick, Dorothy!” she screamed. “Run for the cellar!”Toto jumped out of Dorothy’s arms and hid under the bed, and the girlstarted to get him. Aunt Em, badly frightened, threw open the trap doorin the floor and climbed down the ladder into the small, dark hole.Dorothy caught Toto at last and started to follow her aunt. When shewas halfway across the room there came a great shriek from the wind,and the house shook so hard that she lost her footing and sat downsuddenly upon the floor.Then a strange thing happened.The house whirled around two or three times and rose slowly through theair. Dorothy felt as if she were going up in a balloon.The north and south winds met where the house stood, and made it theexact center of the cyclone. In the middle of a cyclone the air isgenerally still, but the great pressure of the wind on every side ofthe house raised it up higher and higher, until it was at the very topof the cyclone; and there it remained and was carried miles and milesaway as easily as you could carry a feather.It was very dark, and the wind howled horribly around her, but Dorothyfound she was riding quite easily. After the first few whirls around,and one other time when the house tipped badly, she felt as if she werebeing rocked gently, like a baby in a cradle.Toto did not like it. He ran about the room, now here, now there,barking loudly; but Dorothy sat quite still on the floor and waited tosee what would happen.Once Toto got too near the open trap door, and fell in; and at firstthe little girl thought she had lost him. But soon she saw one of hisears sticking up through the hole, for the strong pressure of the airwas keeping him up so that he could not fall. She crept to the hole,caught Toto by the ear, and dragged him into the room again, afterwardclosing the trap door so that no more accidents could happen.Hour after hour passed away, and slowly Dorothy got over her fright;but she felt quite lonely, and the wind shrieked so loudly all abouther that she nearly became deaf. At first she had wondered if she wouldbe dashed to pieces when the house fell again; but as the hours passedand nothing terrible happened, she stopped worrying and resolved towait calmly and see what the future would bring. At last she crawledover the swaying floor to her bed, and lay down upon it; and Totofollowed and lay down beside her.In spite of the swaying of the house and the wailing of the wind,Dorothy soon closed her eyes and fell fast asleep.",
    backgroundColor: 'rgba(241,158,141,0.9)',
    navTintColor: '#000',
  };

  const bookTheCountofMonte = {
    id: 4,
    bookName: 'The Count of Monte Cristo',
    bookCover: images.theCount,
    rating: 4,
    language: 'Eng',
    pageNo: 1184,
    author: 'Alexandre Dumas, père',
    genre: ['Romance'],
    readed: '12k',
    description:
      'On the 24th of February, 1815, the look-out at Notre-Dame de la Gardesignalled the three-master, the _Pharaon_ from Smyrna, Trieste, andNaples.As usual, a pilot put off immediately, and rounding the Château d’If,got on board the vessel between Cape Morgiou and Rion island.Immediately, and according to custom, the ramparts of Fort Saint-Jeanwere covered with spectators; it is always an event at Marseilles for aship to come into port, especially when this ship, like the _Pharaon_,has been built, rigged, and laden at the old Phocee docks, and belongsto an owner of the city.',
    Contents:
      "Chapter 1. Marseilles—The ArrivalOn the 24th of February, 1815, the look-out at Notre-Dame de la Gardesignalled the three-master, the _Pharaon_ from Smyrna, Trieste, andNaples.As usual, a pilot put off immediately, and rounding the Château d’If,got on board the vessel between Cape Morgiou and Rion island.Immediately, and according to custom, the ramparts of Fort Saint-Jeanwere covered with spectators; it is always an event at Marseilles for aship to come into port, especially when this ship, like the _Pharaon_,has been built, rigged, and laden at the old Phocee docks, and belongsto an owner of the city.The ship drew on and had safely passed the strait, which some volcanicshock has made between the Calasareigne and Jaros islands; had doubledPomègue, and approached the harbor under topsails, jib, and spanker,but so slowly and sedately that the idlers, with that instinct which isthe forerunner of evil, asked one another what misfortune could havehappened on board. However, those experienced in navigation saw plainlythat if any accident had occurred, it was not to the vessel herself,for she bore down with all the evidence of being skilfully handled, theanchor a-cockbill, the jib-boom guys already eased off, and standing bythe side of the pilot, who was steering the _Pharaon_ towards thenarrow entrance of the inner port, was a young man, who, with activityand vigilant eye, watched every motion of the ship, and repeated eachdirection of the pilot.",
    backgroundColor: 'rgba(19,7,186,0.5)',
    navTintColor: '#FFF',
  };

  const bookTheSecret = {
    id: 5,
    bookName: 'The Secret Dispatch',
    bookCover: images.theSecret,
    rating: 4,
    language: 'Eng',
    pageNo: 322,
    author: 'James Grant',
    genre: ['Romance'],
    readed: '12k',
    description:
      'I need scarcely inform the reader of history, that most of the eventsnarrated in the subsequent pages actually occurred in the mannerstated; and I have done much to soften, or subdue, the actualbarbarity of the story, though such barbarity was consonant enough tothe days of her, whose "lust of power and contempt of all moralrestraint" won her the name of "the Semiramis of the North."For the betrothal of the young Lieutenant of the Valikolutz Infantryto his cousin, it may be mentioned that a dispensation was necessary,as the Russian Church--like the Catholic--forbids all marriageswithin four degrees of relationship.As stated in the text, the little song of the gipsy is one of manycurrent enough in Russia, where the destruction of the Crescent isalways fondly predicted; but never so confidently as during our lateCrimean War: and even at this very time, an aged Muscovite, namedAlexis Alexandrovitch, after a seclusion of many years in thedistrict of Samara, has come forth as a prophet on the same subject,and is now proceeding from place to place, like another Peter theHermit, foretelling and preaching the downfall of "the sick man" atStamboul, and the speedy substitution of the Russian Cross for theTurkish Crescent on the dome of St. Sophia.',
    Contents:
      "CHAPTER I.THE LOST TRAVELLER.Heaven aid me! here am I now--which way shall I turn--advance orretire? exclaimed Balgonie, as his horse came plunging down almoston its knees, amid wild gorse and matted jungle.A cold day in the middle of April had passed away; a pale andcheerless sun, that had cast no heat on the leafless scenery and thehalf-frozen marshes that border the Louga in Western Russia, hadsunk, and the darkness of a stormy night came on rapidly.  The keenblast of the north, that swept the arid scalps of the Dudenhof (theonly range of hills that traverses the ancient Ingria), was bellowingthrough a gorge, where the Louga poured in foam upon its passage tothe Gulf of Finland, between steep banks that were covered by gloomypines, when the speaker, a mounted officer in Russian uniform, whoseemed too surely to have lost his way, reined up a weary andmud-covered horse on the margin of the stream, and by the light thatyet lingered on the tops of the tall pines, and gilded faintly themetal-covered domes of a distant building on the opposite bank,looked hopelessly about him for the means of crossing the dangerousriver.Where am I? he repeated, almost despairingly; for, as Schillersings in his Song of the Bell,--Man fears the kingly lion's tread;Man fears the tiger's fangs of terror;And still the dreadliest of the dreadIs man himself in error!Though clad in the uniform of the Russian Regiment of Smolensko,which was raised in the famous duchy of that name, the traveller wasneither Muscovite nor Calmuck, Cossack nor Tartar, but a cool, wary,and determined young Briton, one of the many Scottish officers whommisfortune or ambition had drawn into the Russian service, both bysea and land, from the time of Peter the Great down to the beginningof the present century; for many Scottish officers served in theRussian fleet with Admiral Greig at the famous bombardment of Varna:and it was such volunteers as these that first taught the barbaroushordes of the growing empire the true science of war and thenecessity for discipline.",
    backgroundColor: 'rgba(56,195,186,0.5)',
    navTintColor: '#FFF',
  }

  const myBooksData = [
    {
      ...booktheHoundoftheBaskervilles,
      completion: '75%',
      lastRead: '3d 5h',
    },
    {
      ...booktreasureIsland,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...booktheWonderful,
      completion: '10%',
      lastRead: '1d 2h',
    },
    {
      ...bookTheCountofMonte,
      completion: '100%',
      lastRead: '1y 23h'
    },
    {
      ...bookTheSecret,
      completion: '78%',
      lastRead: '24d 5h'
    }
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [booktheHoundoftheBaskervilles, booktreasureIsland, booktheWonderful],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [booktreasureIsland,booktheWonderful],
    },
    {
      id: 3,
      categoryName: 'Coming Soon',
      books: [bookTheCountofMonte,bookTheSecret],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  function renderMyBookSection(myBooks) {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate('BookDetail',{
              book: item, 
            })
          }>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.clock_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
              {item.lastRead}
            </Text>

            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>My Book</Text>
        </View>

        {/* Books */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory == item.id && (
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{...FONTS.h2, color: COLORS.lightGray}}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1, paddingLeft: SIZES.padding}}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory,
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({item}) => {
      return (
        <View style={{marginVertical: SIZES.base}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() =>
              navigation.navigate('BookDetail', {
                book: item,
              })
            }>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{width: 100, height: 150, borderRadius: 10}}
            />

            <View style={{flex: 1, marginLeft: SIZES.radius}}>
              {/* Book name and author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.white,
                  }}>
                  {item.bookName}
                </Text>
                <Text style={{...FONTS.h3, color: COLORS.lightGray}}>
                  {item.author}
                </Text>
              </View>

              {/* Book Info */}
              <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.pageNo}
                </Text>

                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.readed}
                </Text>
              </View>

              {/* Genre */}
              <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Romance') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes('Drama') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>
                      Drama
                    </Text>
                  </View>
                )}
                {item.genre.includes('') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>
                      Drama
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            style={{position: 'absolute', top: 5, right: 15}}
            onPress={() => console.log('Bookmark')}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding}}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* Header Section */}
      <View style={{height: 5}}>
        {/* {renderHeader(profile)} */}
        {/* {renderButtonSection()} */}
      </View>

      {/* Body Section */}
      <ScrollView style={{marginTop: SIZES.radius}}
      >
        {/* Books Section */}
        <View>{renderMyBookSection(myBooks)}</View>

        {/* Categories Section */}
        <View style={{marginTop: SIZES.padding}}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
