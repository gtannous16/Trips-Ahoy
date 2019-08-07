import React, { Component } from "react";
import { Link } from "react-router-dom";
import quizQuestions from "../Quiz/quizQuestions";
import Quiz from "../Quiz/Quiz";
import Result from "../Quiz/Result";
import axios from "axios";
import "../Quiz/Quiz.css";
class quizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      country: [],
      currentcountry: [],
      countryTodos: {}
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
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    let result = answersCountKeys.filter(
      key => answersCount[key] === maxAnswerCount
    );
    
    result =
      result.length > 1
        ? [result[Math.floor(Math.random() * result.length)]]
        : result;
        
        console.log("the result from getResults is ", result);

    return result;
  }

  setResults = result => {
    if (result.length) {
      const personality = result[0].toLowerCase();
      const baseUrl = `/quiz/person/${personality}`;

      const url =
        process.env.NODE_ENV === "production"
          ? baseUrl
          : `http://localhost:5000${baseUrl}`;

      axios
        .get(url)
        .then(response => {
          // handle success
          console.log(response.data);
          const countryList = Object.keys(response.data[0].availableTodos[0]);
          console.log("result ", countryList);
          let todoList = {};
          for (let i = 0; i < countryList.length; i++) {
            const countryContext = countryList[i];
            todoList[countryContext] =
              response.data[0].availableTodos[0][countryContext];
          }

          this.setState({
            result: result[0],
            countryTodos: todoList,
            country: countryList
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  };

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
  activateTodoList(countryButton) {
    console.log(countryButton);
    var currentcountry = this.state.countryTodos[countryButton];
    this.setState({ currentcountry });
  }
  render() {
    console.log("this is the state", this.state);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Trips-Ahoy!</h2>
          <h2>Figure out where to go based on your personality!</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        {this.state.result ? (
          <Link
            style={{ display: "block", width: "100vw", textAlign: "center" }}
            to={`/quiz/cruise/${this.state.result}`}
          >
            Go To All Cruises for your Personality Type!
          </Link>
        ) : (
          ""
        )}
        {this.state.country.length > 0
          ? this.state.country.map((countryButton, index) => (
              <div className="countrybuttons" key={index}>
                <button
                  className="countryButton"
                  onClick={() => this.activateTodoList(countryButton)}
                >
                  {countryButton}
                </button>
              </div>
            ))
          : null}

        {this.state.currentcountry.length > 0
          ? this.state.currentcountry.map(({ todo, image }, index) => (
              <div className="container result" key={index}>
                <h1>Something To Do:</h1>
                <p>{todo}</p>
                <img alt="activity to do" src={image} />
              </div>
            ))
          : null}
      </div>
    );
  }
}
export default quizPage;
