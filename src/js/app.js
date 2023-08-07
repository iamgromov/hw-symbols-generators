import Character from './Character';
import Team from './Team';

const team = new Team();

team.addCharacter(new Character('Oleg', 'Daemon'));
team.addCharacter(new Character('Ivan', 'Swordsman'));

for (const character of team) {
  console.log(character);
}
