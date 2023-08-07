const typesList = [
  'Bowerman',
  'Daemon',
  'Magician',
  'Swordsman',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  get name() {
    return this.Name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('hero name must be between 2 and 10 symbols');
    }

    this.Name = value;
  }

  get type() {
    return this.Type;
  }

  set type(value) {
    if (!typesList.includes(value)) {
      throw new Error('unknown type of hero');
    }

    this.Type = value;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('game over');
    }
  }

  damage(points) {
    if (typeof points !== 'number') {
      throw new Error('value of points is not a number');
    }

    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('game over');
    }
  }
}
