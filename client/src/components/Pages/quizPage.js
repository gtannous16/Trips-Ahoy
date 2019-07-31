import React, { Component } from 'react';
import quizQuestions from '../Quiz/quizQuestions';
import Quiz from '../Quiz/Quiz';
import Result from '../Quiz/Result';
import axios from 'axios';


class quizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      listoftodos: []

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
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults = (result) => {
    if (result.length === 1) {
      this.setState({ result: result[0] })
      axios.get('/quiz/person/' + result[0])
        .then( (response) => {
          // handle success
          console.log(response.data);
          for (let i = 0; i < response.data.length; i++) {
            var name = response.data[i].name
            //response.data[i][name]
            var result = response.data[i][name]
            console.log('result', result)

            for (let r = 0; r < result.length; r++) {
              //result[r]
              var country = result[r]
              console.log('country', country)
              for (let x in country) {
                console.log(x)
                for (let c = 0; c < country[x].length; c++) {
                  var todo = country[x][c].todo
                  var image = country[x][c].image

                  console.log('image', image)
                  console.log('todo', todo)
                  this.setState({
                    listoftodos: [...this.state.listoftodos, { todo, image }],

                  })

                }
              }

            }


          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
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
          {this.state.listoftodos.length > 0 ? this.state.listoftodos.map(({ todo, image }) => (
            <div>
              <p>{todo}</p>
              <p>{image}</p>
            </div>
          )) : null}
        </div>

      </div>
    );
  }
}

export default quizPage;