import React, { Component } from 'react';
import TextArea from './TextArea';
import 'bootstrap/dist/css/bootstrap.css';

class FeedbackForm extends Component {
    constructor() {
        super()

        this.state = {
            controlsOnForm: {
                feedback: {
                    value: '',
                    placeholder: 'Feedback',
                    valid: true,
                    modified: false
                }
            }
        }
    }

    feedbackChangedHandler = event => {
        let feedbackValue = event.target.value;
        let feedbackPlaceholder = 'Feedback';
        let isFeedbackValid = this.isFeedbackValid(feedbackValue)

        this.setState({
            controlsOnForm: {
                feedback: {
                    value: feedbackValue,
                    placeholder: feedbackPlaceholder,
                    valid: isFeedbackValid,
                    modified: true
                }
            }
        });
    }

    feedbackFormResetHandler = event => {
        this.setState({
            controlsOnForm: {
                feedback: {
                    value: '',
                    placeholder: 'Feedback',
                    valid: false,
                    modified: false
                }
            }
        });
    }

    isFeedbackValid(feedback) {
        return (feedback.length > 10 ? true : false);
    }

    render() {
        return (
            <div id="feedbackform-div">
                <TextArea name="textarea"
                    id="feedbackform-textarea"
                    value={this.state.controlsOnForm.feedback.value}
                    placeholder={this.state.controlsOnForm.feedback.placeholder}
                    valid={this.state.controlsOnForm.feedback.valid}
                    modified={this.state.controlsOnForm.feedback.modified}
                    onChange={this.feedbackChangedHandler}
                    rows="10"
                    style={{ width: 400 }}
                />

                <button onClick={this.feedbackFormSubmitHandler}> Submit </button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.feedbackFormResetHandler}> Reset </button>
            </div >
        )
    }

    feedbackFormSubmitHandler = () => {
        console.dir(this.state.controlsOnForm);
    }
}

export default FeedbackForm