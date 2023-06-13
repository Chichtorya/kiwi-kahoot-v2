const { result } = require('lodash');

(async function () {
    require('dotenv').config();
    const express = require('express')
        , session = require('express-session')
        , path = require('path')
        , fs = require('fs')
        , bodyParser = require('body-parser')
        , quizCtrl = require('./quizCtrl')
        , { Quiz } = require('./utils/quiz');


    // const app = require('express')()
    // const server = require('https').createServer(  {
    //     key: fs.readFileSync("./cert/key.pem"),
    //     cert: fs.readFileSync("./cert/cert.pem"),
    //   }, app)

    const app = require('express')()
    const cors = require("cors");
    const server = require('http').createServer(
        app)


    // handle cors
    
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
        if (req.method === 'OPTIONS') {
            return res.sendStatus(200);
        } else {
            return next();
        }
    });

    const io = require('socket.io')(server
    )
    // for development and debugging
    if (require.main === module) {
        require('http').createServer(app).listen(3000, function () {
            console.info("Listening for HTTP on", this.address());
        });
    }
    // const {
    //     SERVER_PORT,
    //     SESSION_SECRET,
    //     DOMAIN,
    //     CLIENT_ID,
    //     CLIENT_SECRET,
    //     CALLBACK_URL,
    //     CONNECTION_STRING,
    //     FRONTEND_URL,
    // } = require('./cfg.js')



    // server.listen(process.env.SERVER_PORT, '0.0.0.0', function () {
    //     console.log('Server running at ', process.env.SERVER_PORT);
    //     console.log(server.address());
    // });

    //When a connection to server is made from client
    io.on('connection', socket => {
        console.log('Connected on port', process.env.SOCKET_PORT)
        // Host Connection
        socket.on('host-join', (data) => {
            socket.join(data.pin)
        })
        //Player Join Room
        socket.on('player-joined', (data) => {
            socket.join(data)
        })
        //Add player to Quiz Object
        socket.on('player-add', (data) => {
            socket.to(`${data.selectedPin}`).emit('room-joined', { name: data.nickname, id: socket.id });
        })

        socket.on('question-over', (data) => {
            socket.to(`${data.pin}`).emit('question-over')
        })
        socket.on('next-question', (data) => {
            socket.to(`${data.pin}`).emit('next-question')

        })
        socket.on('question-answered', (data) => {
            socket.to(data.pin).emit('player-answer', { name: data.name, answer: data.answer })
        })

        socket.on('sent-info', (data) => {
            io.to(data.id).emit('sent-info', { answeredCorrect: data.answeredCorrect, score: data.score });
        })

        socket.on('error', (reason) => {
            console.log(reason); // prints the message associated with the error, e.g. "thou shall not pass" in the example above
        });
    })


    io.engine.on("connection_error", (err) => {
        console.log(err.req);      // the request object
        console.log(err.code);     // the error code, for example 1
        console.log(err.message);  // the error message, for example "Session ID unknown"
        console.log(err.context);  // some additional error context
    });
    const pgp = require('pg-promise')();
    const db = pgp({
        connectionString: process.env.CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false
        }
    });

    db.connect()
        .then(function (obj) {

            const server_version = obj.client.serverVersion;
            console.log(`Connect successfully to database ${obj.client.database} (server version: ${server_version})`);
            obj.done();
        })
        .catch(function (error) {
            console.log('ERROR:', error.message || error);
        });

    app.set('db', db);
    app.get('/', express.static(path.join(__dirname, "public")));
    app.use(express.static(`${__dirname}/../build`));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    // app.use(session({
    //     secret: SESSION_SECRET,
    //     resave: false,
    //     saveUninitialized: true
    // }))


    //author anhdd

    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(express.json());


    app.post('/change', (req, res, next) => {

        const { username, password } = req.body;

        try {
            db.any("SELECT * FROM users WHERE user_name = $1 AND pass = $2", [username, password])
                .then(data => {


                    if (data.length === 1) {

                        res.status(200).json({
                            message: 'ok',
                            id: data[0].id
                        })
                    } else if (data.length === 0) {

                        res.status(200).json({
                            message: 'no data'
                        })
                    }

                    else {
                        console.log("holy fuck , why we have 2 user same same")
                    }
                })

        } catch (error) {

            console.log(error)
            return res.status(400).send({
                error
            })
        }
    })

    // function check(req, res, next) {
    //     if (req.user) {
    //         res.redirect(`${process.env.FRONTEND_URL}#/host`)
    //     } else { next() }
    // }




    /////////////////// DB calls for quizzes

    //Get
    app.get('/check', (req, res) => {

        try {
            db.any("SELECT * FROM users WHERE user_name = 'user1' AND pass = 'pass1'")
                .then(data => {


                    if (data.length === 1) {

                        res.status(200).json({
                            message: 'ok',

                        })
                    } else if (data.length === 0) {

                        res.status(200).json({
                            message: 'no data'
                        })
                    }

                    else {
                        console.log("holy fuck , why we have 2 user same same"),
                            res.status(200).json({
                                message: 'holy fuck , why we have 2 user same same'
                            })
                    }
                })

        } catch (error) {

            console.log(error)
            return res.status(200).send({
                error
            })
        }
    })
    app.get('/getQuizzes', quizCtrl.getQuizzes)
    app.get('/getquestions/', quizCtrl.getQuestions)
    app.get('/getquestion/', quizCtrl.getQuestion)
    app.get('/getquiz/', quizCtrl.getQuiz)

    //Put

    app.put('/updatequestion', quizCtrl.updateQuestion)
    app.put('/updatequiz', quizCtrl.updateQuiz)

    //Post

    app.post('/newquestion', quizCtrl.addQuestion)
    app.post('/newquiz', quizCtrl.newQuiz)

    //Delete

    app.delete('/deletequiz/', quizCtrl.deleteQuiz)
    app.delete('/deletequestion/', quizCtrl.deleteQuestion)

    module.exports = app;

})()
