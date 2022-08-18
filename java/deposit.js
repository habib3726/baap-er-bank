// stap-1
document.getElementById('btn-diposit').addEventListener('click', function () {
    // stap-2
    const userDiposit = document.getElementById('user-diposit');
    const newDpositAmountString = userDiposit.value;
    const newDpositAmount = parseFloat(newDpositAmountString);

    // stap-3
    const dipositTotal = document.getElementById('diposit-total');
    const dipositTotalAmountString = dipositTotal.innerText;
    const dipositTotalAmount = parseFloat(dipositTotalAmountString);
    // stap- 4
    const currentDipositAmount = dipositTotalAmount + newDpositAmount;
    dipositTotal.innerText = currentDipositAmount;

    // stap - 5
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    // stap = 6
    const currentBalanceAmount = balanceTotalAmount + newDpositAmount;
    balanceTotal.innerText = currentBalanceAmount;

    // stap -7
    userDiposit.value = '';
})