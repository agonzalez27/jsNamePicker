var wdi_38_names = ["Aaron", "Andrew", "Antonio", "Darin", "Emily", "Gaye", "Josh", "Kevin", "Kylan", "Kevin", "Matt", "Michael", "Michelle", "Paul", "Viviana"];

function eachName() {
  return wdi_38_names[Math.floor(Math.random() * wdi_38_names.length)];
}

console.log(eachName());
