// stap - 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // stap-2
    const userWithdraw = document.getElementById('user-withdraw');
    const newWithdrawAmountString = userWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // stap -7
    userWithdraw.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // stap-3
    const totalWithdaw = document.getElementById('withdraw-total');
    const totalWithdawAmountString = totalWithdaw.innerText;
    const totalWithdawAmount = parseFloat(totalWithdawAmountString);

    // stap-5
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceAmountString = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);

    if (newWithdrawAmount > totalBalanceAmount) {
        alert('tor baap er banke ato taka nai..');
        return;
    }

    // stap-4
    const currenWithdrawAmount = totalWithdawAmount + newWithdrawAmount;
    totalWithdaw.innerText = currenWithdrawAmount;

    // stap-6
    const currentBalanceAmount = totalBalanceAmount - newWithdrawAmount;
    totalBalance.innerText = currentBalanceAmount;

})