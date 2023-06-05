import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectedQuiz, editingQuiz, getIdUser } from '../../Ducks/Reducer';
import './Host.css';
import Kwizz from '../../Assests/Kwizz.svg';
import Kwizzard from '../../Assests/Kwizzard--test-pixel.svg'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            quizzes: [],
            redirect: false
        }
        this.setRedirect = this.setRedirect.bind(this);
    }
    componentDidMount() {
        const { iduser } = this.props;

        this.setState({ id: iduser })
        this.getQuizzes(iduser)



    }
    getQuizzes(iduser) {
        const domain = process.env.REACT_APP_DOMAIN
        let url = domain+  "/getQuizzes";
        //  let url = "http://localhost:3030/getQuizzes";

        axios.get(url, {
            params: {
                idu: iduser
            }
        }).then(res => {
            this.setState({
                quizzes: res.data
            })

        })
    }
    setRedirect(e) {
        this.props.selectedQuiz(e);

        this.setState({
            redirect: true
        })
    }
    deleteQuiz(id) {
        const domain = process.env.REACT_APP_DOMAIN
        let url = domain +"/deletequiz/";
        //      axios.delete('http://localhost:3030/deletequiz/', {
        axios.delete(url, {
            params: {
                idquiz: id
            }
        }).then(res => {
            if (res.status === 200) {
                this.getQuizzes(this.state.id);
            } else {
                alert('Something went wrong :(')
            }
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/game' />
        }
        let { quizzes } = this.state;
        let mappedQuizzes = quizzes.map(quiz => {

            return (
                <div key={quiz.id} className='kwizz-container' >

                    <h1 className='kwizz-info kwizz-title' >{quiz.quiz_name}</h1>
                    <p className='kwizz-info kwizz-desc'>{quiz.info}</p>
                    <div className='btn-container' >
                        <button onClick={() => this.setRedirect(quiz)} className='btn-play' >Play</button>
                        <button onClick={() => this.deleteQuiz(quiz.id)} className='btn-play' >Delete</button>
                        <Link to='/host/questions'>
                            <button onClick={() => this.props.editingQuiz(quiz)} className='btn-play' >Edit</button>
                        </Link>
                    </div>
                </div>
            )
        })
        const { id } = this.state
        return (
            <div className='mapped-container' >
                <div className='host-logo-container'>
                    <img src={Kwizz} alt='kwizz logo' className='logo' />
                </div>
                <div className='newKwizz' >
                    <Link to='/host/newquiz' className='btn-link'>
                        <button className='btn-new'>New Kwizz!</button>
                    </Link>
                </div>
                <div className='mapped-Kwizzes-container' >
                    {mappedQuizzes}
                </div>
                <div className='logo-host' >
                    <img src={Kwizzard} alt='' className='kwizzard' />
                    <div className='btn-host' >
                        <Link to='/change'>
                            <button id='atag' >Role: Host   <p>ID: {this.props.iduser}</p></button>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    iduser: state.iduser,
    pin: state.selectedPin,
    quiz: state.quizToEdit
});
const mapDispatchToProps = dispatch => ({
    selectedQuiz: pin => dispatch(selectedQuiz(pin)),
    editingQuiz: quiz => dispatch(editingQuiz(quiz))
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);