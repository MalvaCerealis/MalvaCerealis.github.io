import * as random from 'random';
var names, x, yes;
x = 1;
names = ["callista", "calida", "cele", "cecelia", "cardea", "celesta", "casta", "clora", "cyrilla", "cyra", "cesira", "caria", "celia", "coretta", "cora", "clea", "calise", "cali", "cleo", "celena", "cleta", "coleta", "cressida", "ceres", "cyrena", "calida", "cuora", "camila", "clara", "costa", "carina", "ciel", "cara", "cerelia", "carria", "cira", "cinzia", "celeste", "lira", "cora", "celica", "celsa", "malva", "corradea", "cira", "cereal"];

while (x) {
  random.seed({
    "a": null,
    "version": 2
  });
  yes = input("Press any key for a name");

  if (yes === yes) {
    console.log(random.choice(names));
  }
}