document.addEventListener('DOMContentLoaded', function() {
    const signinBtn = document.getElementById('signin-btn');
    const signupBtn = document.getElementById('signup-btn');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    signinBtn.addEventListener('click', function() {
        signinForm.classList.add('active');
        signupForm.classList.remove('active');
        signinBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    signupBtn.addEventListener('click', function() {
        signupForm.classList.add('active');
        signinForm.classList.remove('active');
        signupBtn.classList.add('active');
        signinBtn.classList.remove('active');
    });

    signinForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = signinForm.querySelector('input[type="email"]').value;
        const password = signinForm.querySelector('input[type="password"]').value;

        const response = await fetch('/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Sign in successful');
            localStorage.setItem('token', result.token);
        } else {
            alert(result.error);
        }
    });

    signupForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert('User created successfully');
            localStorage.setItem('token', result.token);
        } else {
            alert(result.error);
        }
    });
});
