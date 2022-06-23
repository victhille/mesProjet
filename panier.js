const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

const totalCount = document.getElementById("total-count");
const totalCount2 = document.getElementById("total-count2");

var count = 1;
var prix = 145;

totalCount.innerHTML = count;
totalCount2.innerHTML = count;

const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
  totalCount2.innerHTML = count;
  prixTotal();
};



const handleDecrement = () => {
    if (count > 1) {
        count--;
        totalCount.innerHTML = count;
        totalCount2.innerHTML = count;
        prixTotal();
    }
};

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);



function prixTotal() {
  var total = count*prix;
  document.getElementById("totalPrix").innerHTML = total;
  document.getElementById("totalPrix2").innerHTML = total;
}