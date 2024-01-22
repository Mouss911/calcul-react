// Composant pour la Calculatrice
class Calculatrice extends React.Component {
    constructor() {
      super();
      this.state = {
        input: ''
      };
    }

    // Affichage des chiffres au click
    handleButtonClick = (value) => {
      this.setState((prevState) => ({
        input: prevState.input + value
      }));
    };

    // Fonction pour effacer l'expression en cours dans la calculatrice.
    handleClear = () => {
      this.setState({
        input: ''
      });
    };

    // Evaluation de l'expression dans la calculatrice
    handleCalculate = () => {
      try {
        this.setState({
          input: eval(this.state.input).toString()
        });
      } catch (error) {
        this.setState({
          input: 'Error'
        });
      }
    };

    render() {
      return (
        <div className="bordure">
          <input type="text" value={this.state.input} readOnly />
          <br />
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button className="plus" onClick={() => this.handleButtonClick('+')}>+</button>
          <br />
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button className="moins" onClick={() => this.handleButtonClick('-')}>-</button>
          <br />
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button className="fois" onClick={() => this.handleButtonClick('*')}>*</button>
          <br />
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button className="efface" onClick={this.handleClear}>C</button>
          <button className="egal" onClick={this.handleCalculate}>=</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
        </div>
      );
    }
  }

  // Rendu de la Calculatrice
  ReactDOM.render(<Calculatrice />, document.getElementById('root'));