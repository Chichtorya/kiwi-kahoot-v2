const fs = require('fs');
const { result } = require('lodash');
querySQL = (file_name) => {
    return fs.readFileSync(file_name).toString()
}

module.exports = {
    getQuizzes: (req, res) => {
        const { idu: id } = req.query;
        const db = req.app.get('db');

        db.query(querySQL("./db/get_quizes.sql"), [id])
            .then(quizzes => {
                // console.log(quizzes);
                res.status(200).send(quizzes)
            })
            .catch(error => { console.log('ERROR:', error.message || error); })
    },
    newQuiz: (req, res) => {
        ;
        let { idcreater, name, info } = req.body;

        const db = req.app.get('db');
        db.query(querySQL("./db/add_quiz.sql"), [idcreater, name, info])
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))
    },
    getQuestions: (req, res) => {
        const { idquiz: id } = req.query
        const db = req.app.get('db');
        db.query(querySQL("./db/get_questions.sql"), [id])
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))
    },
    deleteQuiz: (req, res) => {
        const { idquiz: id } = req.query

        const db = req.app.get('db');
        db.query(querySQL("./db/delete_quiz.sql"), [id])
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))
    },
    addQuestion: (req, res) => {
        let { id, question, answer1, answer2, answer3, answer4, correctAnswer } = req.body;
        const db = req.app.get('db');
        db.query(querySQL("./db/add_question.sql"), [id, question, answer1, answer2, answer3, answer4, correctAnswer])
            .then(() => res.status(200).send())
            .catch(err => res.status(500).send(err))
    },
    deleteQuestion: (req, res) => {
        const { idquiz: id } = req.query
        const db = req.app.get('db');
        db.query(querySQL("./db/delete_question.sql"), [id])
            .then(() => res.status(200).send())
            .catch(err => res.status(500).send(err))
    },
    getQuestion: (req, res) => {
        const { id: id } = req.query
        const db = req.app.get('db');
        db.query(querySQL("./db/get_single_question.sql"), [id])
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))
    },
    updateQuestion: (req, res) => {
        let { id, question, answer1, answer2, answer3, answer4, correctAnswer } = req.body;

        const db = req.app.get('db');
        db.query(querySQL("./db/update_question.sql"), [id, question, answer1, answer2, answer3, answer4, correctAnswer])
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))
    },
    updateQuiz: (req, res) => {
        let { id, newName, newInfo } = req.body;
        const db = req.app.get('db');
        db.query(querySQL('./db/update_quiz.sql'), [id, newName, newInfo])
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))
    },
    getQuiz: (req, res) => {
        const { id: id } = req.query
        const db = req.app.get('db');
        db.query(querySQL('./db/get_quiz.sql'), [id])
            .then(result => res.status(200).send(result)
             )
            .catch(err => res.status(500).send(err))
    }
}