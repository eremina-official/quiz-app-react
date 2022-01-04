import NapoleonImage from '../assets/Napoleon.jpg';
import EngelsImage from '../assets/Engels.jpg';
import GenghisImage from '../assets/Genghis.jpg';
import ZumaImage from '../assets/Zuma.jpg';
import CharlemagneImage from '../assets/Charlemagne.jpg';
import AlexanderImage from '../assets/Alexander-the-Great.jpg';
import ThatcherImage from '../assets/Thatcher.jpg';
import TitoImage from '../assets/Tito.jpg';

const questionsData = [
  {
    number: 1,
    image: NapoleonImage,
    hint: 'Wskazówka: nie lubił wyspy Świętej Heleny.',
    variants: ['Napoleon I', 'Aleksander I Romanow', 'George Washington'],
    correctVariant: 'Napoleon I',
    description:
      'Jeden z najwybitniejszych dowódców wojskowych w historii. Zwycięzca wielu bitew, rządził Francją przez ponad piętnaście lat.',
  },

  {
    number: 2,
    image: EngelsImage,
    hint: 'Wskazówka: miał bardziej znanego kolegę.',
    variants: ['Otto von Bismarck', 'Georges Clemenceau', 'Friedrich Engels'],
    correctVariant: 'Friedrich Engels',
    description:
      'Filozof i ideolog komunistyczny. Jeden z wspołtwórców komunizmu.',
  },

  {
    number: 3,
    image: GenghisImage,
    hint: 'Wskazówka: zjednoczył swój naród i podbił pół Azji.',
    variants: ['Czyngis-chan', 'Tamerlan', 'Jumong'],
    correctVariant: 'Czyngis-chan',
    description:
      'Wielki zdobywca, twórca jednego z największych imperiów w historii.',
  },

  {
    number: 4,
    image: ZumaImage,
    hint: 'Wskazówka: afrykański polityk, ma sześć żon.',
    variants: ['Jacob Zuma', 'Jean-Bedel Bokassa', 'Robert Mugabe'],
    correctVariant: 'Jacob Zuma',
    description: 'Były prezydent Republiki Południowej Afryki.',
  },

  {
    number: 5,
    image: CharlemagneImage,
    hint: 'Wskazówka: załoźył imperium, które było prekursorem dzisiejszej Francji, Niemiec i Włoch.',
    variants: ['Fryderyk II Hohenstauf', 'Karol Wielki', 'Pepin Krótki'],
    correctVariant: 'Karol Wielki',
    description:
      'Twórca Świętego Cesarstwa Rzymskiego, jeden z najwybitniejszych władców w dziejach średniowiecznej Europy.',
  },

  {
    number: 6,
    image: AlexanderImage,
    hint: 'Wskazówka: podbił starożytną Persję i zapoczątkował epokę hellenistyczną.',
    variants: ['Filip II Macedoński', 'Leonidas I', 'Aleksander Macedoński'],
    correctVariant: 'Aleksander Macedoński',
    description: 'Jeden z największych wodzów i zdobywców w starożytności.',
  },

  {
    number: 7,
    image: ThatcherImage,
    hint: 'Wskazówka: nazywano ją  „Żelazną Damą”.',
    variants: ['Eva Peron', 'Margaret Thatcher', 'Wilhelmina'],
    correctVariant: 'Margaret Thatcher',
    description: 'Pierwsza kobieta premier w Wielkiej Brytanii.',
  },

  {
    number: 8,
    image: TitoImage,
    hint: 'Wskazówka: był działaczem komunistycznym.',
    variants: ['Josip Broz Tito', 'Benito Mussolini', 'Konrad Adenauer'],
    correctVariant: 'Josip Broz Tito',
    description:
      'Przywódca antyniemieckiej partyzantki, wieloletni przewódca komunistycznej Jugosławii.',
  },
];

export default questionsData;
