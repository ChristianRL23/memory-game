import {
  faCar,
  faChild,
  faCouch,
  faEarthAmericas,
  faFaceSmile,
  faFish,
  faFootball,
  faGlasses,
  faGuitar,
  faHand,
  faHeart,
  faHouse,
  faKey,
  faLaptopCode,
  faLock,
  faMobileScreenButton,
  faMusic,
  faShirt,
} from '@fortawesome/free-solid-svg-icons';

export const assignIcon = (internNumber) => {
  let backIcon;
  switch (internNumber) {
    case 1:
      backIcon = faCar;
      break;
    case 2:
      backIcon = faChild;
      break;
    case 3:
      backIcon = faCouch;
      break;
    case 4:
      backIcon = faEarthAmericas;
      break;
    case 5:
      backIcon = faFaceSmile;
      break;
    case 6:
      backIcon = faFish;
      break;
    case 7:
      backIcon = faFootball;
      break;
    case 8:
      backIcon = faGlasses;
      break;
    case 9:
      backIcon = faGuitar;
      break;
    case 10:
      backIcon = faHand;
      break;
    case 11:
      backIcon = faHeart;
      break;
    case 12:
      backIcon = faHouse;
      break;
    case 13:
      backIcon = faKey;
      break;
    case 14:
      backIcon = faLaptopCode;
      break;
    case 15:
      backIcon = faLock;
      break;
    case 16:
      backIcon = faMobileScreenButton;
      break;
    case 17:
      backIcon = faMusic;
      break;
    case 18:
      backIcon = faShirt;
      break;
    default:
      backIcon = faCar;
  }
  return backIcon;
};
