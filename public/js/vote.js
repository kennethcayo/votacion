/** CLIENT-SIDE LOGIC */
$(function () {
    const socket = io();
    let voted = false;

    $("#send_answer").click(function (e) {
        e.preventDefault();
        if (voted) {
            alert('Ya has votado en esta sesión.');
            return;
        }
        const answer = $('input[type="radio"]:checked').val();
        if (answer == "KennethCayo") {
            socket.emit('KennethCayo');
        } else if (answer == "ErickaA") {
            socket.emit('ErickaA');
        } else if (answer == "AdonysB") {
            socket.emit('AdonysB');
        }
        voted = true;
        alert('Su voto se ha enviado con éxito');
    });

    $('#logoutBtn').click(function () {
        socket.emit('logout');
        // alert('Sesion Cerrada')
    });

});






