import { Component } from 'react';
import MasterUpload from './MasterUpload';
import StemsUpload from './StemsUpload';
import Success from './Success';
import { v4 as uuidv4 } from 'uuid';

export class UploadBeats extends Component {
  state = {
    step: 1,
    master: null,
    title: '',
    genre: '',
    exclusiveChecked: false,
    exclusivePrice: '',
    nonExclusiveChecked: false,
    nonExclusivePrice: false,
    id: uuidv4(), 
    stem: null
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {  master,
        title,
        genre,
        exclusiveChecked,
        exclusivePrice,
        nonExclusiveChecked,
        nonExclusivePrice,
        id, 
        stem} = this.state;
    const values = { master,
        title,
        genre,
        exclusiveChecked,
        exclusivePrice,
        nonExclusiveChecked,
        nonExclusivePrice,
        id, 
        stem };

    switch (step) {
      case 1:
        return (
          <MasterUpload
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StemsUpload
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success />;
      default:
        (console.log('Upload Modal'))
    }
  }
}

export default UploadBeats;

