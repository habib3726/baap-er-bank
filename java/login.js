document.getElementById('btn-submit').addEventListener('click', function () {

    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(email, password)

    if (email === 'baaperbank@gmail.com' && password === 'lee mama') {
        window.location.href = 'bank.html';
    }
    else {
        alert('A beda thik pasword dee..');
    }
})
