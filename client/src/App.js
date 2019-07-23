<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import quizQuestions from '../../routes/api/quizQuestions';
import Quiz from './components/Quiz/quiz';
=======
import React, { Component } from 'react';
import quizQuestions from './utils/quizQuestions';
import Quiz from './components/Quiz/Quiz';
>>>>>>> 3c32d8360cf829346ba2553113e40e68776ced1f
import Result from './components/Quiz/Result';
import './App.css';
<<<<<<< HEAD
// import JumbotronPage from './components/Jumbotron/jumbotron.js'
// import FooterPage from './components/Footer/footer.js';
// import question from '../src/components/Question';


function App() {
  return (
    <Router>
      <Header />
      <Jumbotron />
      <div>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/cruises" component={Cruises} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
=======
>>>>>>> 3c32d8360cf829346ba2553113e40e68776ced1f

// class App extends Component {
//   constructor(props) {
//     super(props);

<<<<<<< HEAD
//       this.stat = {
//         counter: 0,
//         questionId: 1,
//         question: '',
//         answerOptions: [],
//         answer: '',
//         answerCount: {},
//         result: ''
//       };

//       this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
//   }

//   componentDidMount() {
//     const shuffledAnswerOptions = quizQuestions.map(question => 
//       this.shuffleArray(question.answers)
//       );
//       this.setState({
//         question: quizQuestions[0].question,
//         answerOptions: shuffledAnswerOptions[0]
//       });
//     }
    
//   shuffleArray(array) {
//     var currentIndex = array.length,
//     temporaryValue,
//     randomIndex;

//     while (0 !== currentIndex) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
      
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
//     return array;
//   }

//   handleAnswerSelected(event){
//     this.setUserAnswer(event.currentTarget.value);

//     if (this.state.questionId < quizQuestions.length){
//       setTimeout(() => this.setNextQuestion(), 300);
//     } else {
//       setTimeout(() => this.setResults(this.getResults()),300)
//     }
//   }

//   setUserAnswer(answer) {
//     this.setState((state,  props) => ({
//       answersCount: {
//         ...state.answersCount,
//         [answer]: (state.answersCount[answer] || 0) + 1
//       },
//       answer: answer
//     }));
//   }

//   setNextQuestion() {
//     const counter = this.state.counter + 1;
//     const questionId = this.state.questionId +1;
=======
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
>>>>>>> 3c32d8360cf829346ba2553113e40e68776ced1f

//     this.setState({
//       counter: counter,
//       questionId: questionId,
//       question: quizQuestions[counter].question,
//       answerOptions: quizQuestions[counter].answers,
//       answer: ''
//     });
//   }

<<<<<<< HEAD
//   getResults(){
//     const answersCount = this.state.answersCount;
//     const answersCountKeys =  Object.keys(answersCount);
//     const answersCountValues = answersCountKeys.map(key => answersCount[key]);
//     const maxAnswerCount = Math.max.apply(null, answersCountValues);

//     return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
//   }
// }
export default App;
=======
>>>>>>> 4242ba8a256d617ac8bcbddf24034718c0d8d0fc
=======
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Trips-Ahoy!</h2>    
          <h2>Figure out where to go based on your personality!</h2>    
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>

      </div>
    );
  }
}

export default App;
>>>>>>> 3c32d8360cf829346ba2553113e40e68776ced1f
