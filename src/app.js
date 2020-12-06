import { buildPage } from './buildPage.js';
import { choiceRCS } from './choiceRCS.js';
import './css/style.css';

buildPage.addTitle();
buildPage.addButton();

choiceRCS.waitForUserChoice();
