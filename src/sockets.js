/** SERVER-SIDE LOGIC */
const Vote = require('./models/votos-model');


module.exports = function (io) {
    
    let users = 0;

    
    io.on('connection', (socket) => {
        users++;
        io.emit('UpdateUsers', users);
        socket.on('KennethCayo', function () {
            // Registrar voto
            Vote.findOneAndUpdate({ candidate: 'KennethCayo' }, { $inc: { votes: 1 } }, { upsert: true, new: true }, (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                    io.emit('UpdateKennethCayo', result.votes);
                }
            });
        });

        socket.on('ErickaA', function () {
            // Registrar voto
            Vote.findOneAndUpdate({ candidate: 'ErickaA' }, { $inc: { votes: 1 } }, { upsert: true, new: true }, (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                    io.emit('UpdateErickaA', result.votes);
                }
            });
        });

        socket.on('AdonysB', function () {
            // Registrar voto
            Vote.findOneAndUpdate({ candidate: 'AdonysB' }, { $inc: { votes: 1 } }, { upsert: true, new: true }, (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                    io.emit('UpdateAdonysB', result.votes);
                }
            });
        });

        socket.on('disconnect', function () {
            users--;
            io.emit('UpdateUsers', users);
        });
    });

    
};





// /** SERVER-SIDE LOGIC */
// const Vote = require('./models/votos-model');

// module.exports = function (io) {
//     let users = 0, KennethCayo = 0, ErickaA = 0, AdonysB = 0;

//     io.on('connection', (socket) => {
//         users++;
//         io.emit('UpdateUsers', users);
//         socket.on('KennethCayo', function () {
//             KennethCayo++;
//             io.emit('UpdateKennethCayo', KennethCayo);

//             // Registrar voto
//             const vote = new Vote({ candidate: 'KennethCayo' });
//             vote.save();
//         });

//         socket.on('ErickaA', function () {
//             ErickaA++;
//             io.emit('UpdateErickaA', ErickaA);

//             // Registrar voto
//             const vote = new Vote({ candidate: 'ErickaA' });
//             vote.save();
//         });

//         socket.on('AdonysB', function () {
//             AdonysB++;
//             io.emit('UpdateAdonysB', AdonysB);

//             // Registrar voto
//             const vote = new Vote({ candidate: 'AdonysB' });
//             vote.save();
//         });

//         socket.on('disconnect', function () {
//             users--;
//             io.emit('UpdateUsers', users);
//         });
//     });
// };
