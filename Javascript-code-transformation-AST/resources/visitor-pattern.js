function Ceo() {
  let income = 100;
  this.setIncome = val => {
    income = val;
  };
  this.getIncome = () => income;
  this.accept = operation => {
    operation.visit(this);
  };
}

function Vp() {
  let income = 70;
  this.setIncome = val => {
    income = val;
  };
  this.getIncome = () => income;
  this.accept = operation => {
    operation.visit(this);
  };
}

const extraIncome = {
  visit: position => {
    const initialIncome = position.getIncome();
    position.setIncome(initialIncome * 2);
  }
};

const ceo = new Ceo();
const vp = new Vp();

ceo.accept(extraIncome);
console.log(ceo.getIncome()); // 200

vp.accept(extraIncome);
console.log(vp.getIncome()); // 140

