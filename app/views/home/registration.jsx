// Vendor Libraries
import React from 'react'

//Local Libraries
import Input from '~/app/views/shared/input'
import TextInput from '~/app/views/shared/text_input'
import EmailInput from '~/app/views/shared/email_input'
import PasswordInput from '~/app/views/shared/password_input'

export default class Registration extends React.Component {
  submitForm = (event) => {
    event.preventDefault();
    const { email, emailConfirm } = this.refs;

    if(email.refs.input.value === emailConfirm.refs.input.value) {
      alert('Yay')
    } else {
        alert('Boo')
    }
  };

  render() {
    return (
      <div className='registration'>
        <form className='registration-form' onSubmit={ this.submitForm }>
          <h1>Sign Up</h1>
          <p>It's free!</p>
          <TextInput
              ref="firstName"
              name="first_name"
              className="input-group half"
              placeholder="First Name"
              errorMessage="First name is required"
              required
          />
          <TextInput
              ref="lastName"
              name="last_name"
              className="input-group half"
              placeholder="Last Name"
              errorMessage="Last name is required"
              required
          />
          <EmailInput
              ref="email"
              name="email"
              placeholder="Email"
              errorMessage="A valid email is required"
              required
          />
          <EmailInput
              ref="emailConfirm"
              name="email"
              placeholder="Confirm Email"
              errorMessage="Emails must match"
              required
          />
          <PasswordInput
              ref="password"
              name="password"
              placeholder="Password"
              errorMessage="Password must be at least 6 characters"
              required
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  };
}
