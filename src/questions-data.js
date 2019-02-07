import NapoleonImage from './assets/Napoleon.jpg';
import EngelsImage from './assets/Engels.jpg';

const questionsData = [
  {
    number: 1,
    image: NapoleonImage,
    hint: 'Wskazówka: nie lubił wyspy Świętej Heleny.',
    variants: [ 
                'Napoleon I', 
                'Aleksander I Romanow', 
                'George Washington'
              ],
    correctVariant: 'Napoleon I',
    description: 'Jeden z najwybitniejszych dowódców wojskowych w historii. Zwycięzca wielu bitew, rządził Francją przez ponad piętnaście lat.'
  },

  {
    number: 2,
    image: EngelsImage,
    hint: 'Wskazówka: miał bardziej znanego kolegę.',
    variants: [
                'Otto von Bismarck',
                'Georges Clemenceau',
                'Friedrich Engels'
              ],
    correctVariantIndex: 2,
    description: 'Filozof i ideolog komunistyczny. Jeden z wspołtwórców komunizmu.'
  }
];
export default questionsData;

