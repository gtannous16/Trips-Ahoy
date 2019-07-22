import React, { Component } from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';
import quizQuestions from './utils/quizQuestions';
import Quiz from './components/Quiz/quiz';
// import Cruises  from './components/Cruises/cruises';
import Result from './components/Quiz/Result';
import logo from './logo.svg';
import './App.css';
// import Jumbotron from './components/Jumbotron/jumbotron'
// import Header from './components/Header/header'

// function NoMatch() {
//   return<div>404</div>
// }

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Jumbotron />
//       <div>
//         <Switch>
//           <Route exact path="/" component={Quiz} />
//           <Route exact path="/quiz" component={Quiz} />
//           <Route exact path="/cruises" component={Cruises} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

      this.stat = {
        counter: 0,
        questionId: 1,
        question: '',
        answerOptions: [],
        answer: '',
        answerCount: {},
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

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleAnswerSelected(event){
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length){
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()),300)
    }
  }

  setUserAnswer(answer) {
    this.setState((state,  props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId +1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults(){
    const answersCount = this.state.answersCount;
    const answersCountKeys =  Object.keys(answersCount);
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
      answer = {this.state.answer}
      answerOptions = {this.state.answerOptions}
      questionId = {this.state.questionId}
      question = {this.state3.question}
      questionTotal ={quizQuestions.length}
      onAnswerSelected = {this.handleAnswerSelected}
      />
    );
}

renderResult () {
  return <Result quizResult = {this.state.result} />;
}

render() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div>
      {this.state.result ? this.renderResult() : this.renderQuiz()}
    </div>
  );
}
}
export default App;
