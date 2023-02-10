import * as emailjs from 'emailjs-com';
import React, { Component } from 'react';
import { toast, Toaster } from 'react-hot-toast';

//components  
import NavBar from '../nav-bar/nav-bar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {nameValue: '', emailValue: '', messageValue: '',
                        nameClass: '', emailClass: '', messageClass: ''};
    
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);

        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps() {
        document.title = "Contact - Nurul Mamun Network Engineer Portfolio";
    }

    componentDidMount() {
        document.title = "Contact - Nurul Mamun Network Engineer Portfolio";
    }

    //Handling the inputs
    handleName(event) {
        this.setState({ nameClass: '' });
        this.setState({nameValue: event.target.value});
    }

    handleEmail(event) {
        this.setState({ emailClass: '' });
        this.setState({emailValue: event.target.value});
    }

    handleMessage(event) {
        this.setState({ messageClass: '' });
        this.setState({messageValue: event.target.value});
    }

    validateEmail(email) {
        var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    sendMessage(event) {
      if (this.state.nameValue === "") {
        this.setState({ nameClass: "invalid" });
        return;
      }
      if (!this.validateEmail(this.state.emailValue)) {
        this.setState({ emailClass: "invalid" });
        return;
      }
      if (this.state.messageValue === "") {
        this.setState({ messageClass: "invalid" });
        return;
      }
      // 1Gc8RmJ3AfCxt0Upu  template_nj98wtn client-srv-check
      emailjs.init("6Lw_S2wEwnDPGqSQ0");
      emailjs.send("service_lsm0cpk", "template_7lxjicv", {
        user_name: this.state.nameValue,
        to_name: "Nrurul Mamun",
        user_email: this.state.emailValue,
        message: this.state.messageValue,
        reply_to: this.state.emailValue,
      });
    toast.success("Message sent successfully!");

      //reset form
      this.setState({ nameValue: "" });
      this.setState({ emailValue: "" });
      this.setState({ messageValue: "" });
    }  

  render() {
    return (
      <div className="contact-page">
        <NavBar page="contact" />
        <div className="contact-container">
          <h2>Contact</h2>
          <div className="contact-form">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              name="nameInput"
              className={this.state.nameClass}
              id="nameInput"
              placeholder="Enter name"
              value={this.state.nameValue}
              onChange={this.handleName}
            />
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              name="emailInput"
              className={this.state.emailClass}
              id="emailInput"
              placeholder="Enter your email address"
              value={this.state.emailValue}
              onChange={this.handleEmail}
            />
            <label htmlFor="messageInput">Message</label>
            <textarea
              name="messageInput"
              className={this.state.messageClass}
              id="messageInput"
              rows="4"
              value={this.state.messageValue}
              onChange={this.handleMessage}
            ></textarea>
            <div className="button send" onClick={this.sendMessage}>
              <span className="icon is-small">
                <i className="fa fa-envelope"></i>
              </span>
              Send Message
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    );
  }
}

export default Contact;