/** CLIENT-SIDE LOGIC */

fetch("http://192.168.0.100:4000/api/votes")
    .then(res => res.json())
    .then(votes => {
        // Contar los votos para cada candidato
        let votesKennethCayo = 0;
        let votesErickaA = 0;
        let votesAdonysB = 0;
        votes.forEach(vote => {
            if (vote.candidate === "KennethCayo") {
                votesKennethCayo += vote.votes;
            } else if (vote.candidate === "ErickaA") {
                votesErickaA += vote.votes;
            } else if (vote.candidate === "AdonysB") {
                votesAdonysB += vote.votes;
            }
        });

        // Actualizar los contadores de votos en la página
        document.getElementById("VotesKennethCayo").innerHTML = votesKennethCayo;
        document.getElementById("VotesErickaA").innerHTML = votesErickaA;
        document.getElementById("VotesAdonysB").innerHTML = votesAdonysB;
    })
    .catch(error => console.error(error));


//USUARIOS CONECTADOS
socket = io();
socket.on("UpdateUsers", (n_users) => {
    document.getElementById("n-users").innerHTML = n_users;
});

socket.on("UpdateKennethCayo", (n_votes) => {
    document.getElementById("VotesKennethCayo").innerHTML = n_votes;
});

socket.on("UpdateErickaA", (n_votes) => {
    document.getElementById("VotesErickaA").innerHTML = n_votes;
});

socket.on("UpdateAdonysB", (n_votes) => {
    document.getElementById("VotesAdonysB").innerHTML = n_votes;
})








//GUARDAR DATOS EN NAVEGADOR
// /** CLIENT-SIDE LOGIC */
// socket = io();

// socket.on("UpdateUsers", (n_users) => {
//     document.getElementById("n-users").innerHTML = n_users;
// });

// socket.on("UpdateKennethCayo", (n_votes) => {
//     document.getElementById("VotesKennethCayo").innerHTML = n_votes;
//     localStorage.setItem('KennethCayo', n_votes);
// });

// socket.on("UpdateErickaA", (n_votes) => {
//     document.getElementById("VotesErickaA").innerHTML = n_votes;
//     localStorage.setItem('ErickaA', n_votes);
// });

// socket.on("UpdateAdonysB", (n_votes) => {
//     document.getElementById("VotesAdonysB").innerHTML = n_votes;
//     localStorage.setItem('AdonysB', n_votes);
// });

// // Verificar el almacenamiento local
// if (localStorage.getItem('KennethCayo')) {
//     document.getElementById("VotesKennethCayo").innerHTML = localStorage.getItem('KennethCayo');
// }

// if (localStorage.getItem('ErickaA')) {
//     document.getElementById("VotesErickaA").innerHTML = localStorage.getItem('ErickaA');
// }

// if (localStorage.getItem('AdonysB')) {
//     document.getElementById("VotesAdonysB").innerHTML = localStorage.getItem('AdonysB');
// }

