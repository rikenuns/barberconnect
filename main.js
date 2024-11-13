const form = document.getElementById("form");
const btnSubmit = document.getElementById("entrar");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = String(document.getElementById("email").value);
    const password = String(document.getElementById("password").value);

    try {
        const response = await fetch('https://d9a0-2804-1690-953-8400-7962-8d6f-7b29-b374.ngrok-free.app/auth/login', {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();
        console.log(data);

        if(response.ok){
            window.location = 'code/home/home.html'
        }

    } catch (error) {
        console.log('Erro de sistema', error);
    }
});
