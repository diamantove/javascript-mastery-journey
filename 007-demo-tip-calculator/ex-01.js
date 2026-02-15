let billAmount, tipPercentage, numberOfPeople;

do {
    billAmount = Number(prompt("Сумма счёта"));
    tipPercentage = Number(prompt("Процент чаевых"));
    numberOfPeople = Number(prompt("Сколько человек участвовало в обеде"));

    let tipAmount = billAmount * tipPercentage / 100;
    let totalAmount = billAmount + tipAmount;
    let perPersonAmount = totalAmount / numberOfPeople;

    alert(`Общий счет: ${tipAmount}.\nИтого с учетом чаевых: ${totalAmount}\nИтого с каждого человека: ${perPersonAmount}`);
}
while (Number.isNaN(billAmount) || Number.isNaN(tipPercentage) || Number.isNaN(numberOfPeople) ||
billAmount <= 0 || tipPercentage <= 0 || numberOfPeople <= 1);