import React, { Component } from 'react';
import './AddListHorsePage.css'
import horses from '../../Constants/horses'
import horseJumping from './Horse-Jumping-Silhouette.png'
import { Link } from 'react-router-dom';

class ListHorse extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      age: '',
      categories: 'Appaloosa',
      price: '',
      location: '',
      contact: '',
      image: '',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddHorse(this.state.formData);
  };


  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
    console.log(this.state.formData, 'this.state.formData');
  };


  render() {

    let listHorses = this.props.user ?
      <>
        <div className='headerFooter'>Add Horse</div>
        <div className='containerForm'>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            < div className='formGroup'>
              <label>Name (required): </label>
              <input
                className='formControl'
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                placeholder='ABC'
                required
                pattern="{/^[a-z ,-]+$/i}"
              />
            </div>

            <div className='formGroup'>
              <label>Age: </label>
              <input
                className='formControl'
                name="age"
                value={this.state.formData.age}
                placeholder='###'
                onChange={this.handleChange}
                type='number'
              />
            </div>

            <div className='formGroup'>
              <label>Breed: </label>
              <select
                name="categories"
                className='formControl browser-default'
                value={this.state.formData.categories}
                onChange={this.handleChange}
              >
                {
                  horses.map(horse =>
                    <option value={horse}>{horse}</option>)
                }
              </select>
            </div>

            <div className='formGroup'>
              <label>$ Price (required): </label>
              <input
                className='formControl'
                name="price"
                value={this.state.formData.price}
                onChange={this.handleChange}
                placeholder='$$.$$'
                required
                type='number'
                pattern="{/^[0-9]+(\.[0-9]{1,2})?$/g}"
              />
            </div>

            <div className='formGroup'>
              <label>Location (required): </label>
              <input
                className='formControl'
                name="location"
                value={this.state.formData.location}
                onChange={this.handleChange}
                placeholder='City, State'
                required
                pattern="{^[A-Za-z . ,'-]+$}"
              />
            </div>

            <div className='formGroup'>
              <label>Contact Number (required): </label>
              <input
                className='formControl'
                name="contact"
                value={this.state.formData.contact}
                onChange={this.handleChange}
                placeholder='(###)###-####'
                required
                type='tel'
                pattern="{/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g}"
              />
            </div>

            <div className='formGroup'>
              <label>Horse Image (URL): </label>
              <input
                className='formControl'
                name="image"
                value={this.state.formData.image}
                onChange={this.handleChange}
                pattern="{/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g}"
              />
            </div>

            <button
              type="submit"
              className='btn'
              disabled={this.state.invalidForm}
            >
              Add Horse
          </button>
          </form>
        </div>
      </>
      :
      <div className='loginMessage'>
        <img src={horseJumping} alt="HorseJumping" className='HorseJumpingImg' />
        <Link to='/login' className='NavBar-link loginMessageText'>Login to view more!</Link>
      </div >
    return (
      <>
        <div>
          {listHorses}
        </div>
        {/* <div className='headerFooter'>Add Horse</div>
        <div className='containerForm'>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            < div className='formGroup'>
              <label>Name (required): </label>
              <input
                className='formControl'
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                placeholder='ABC'
                required
                pattern="{/^[a-z ,-]+$/i}"
              />
            </div>

            <div className='formGroup'>
              <label>Age: </label>
              <input
                className='formControl'
                name="age"
                value={this.state.formData.age}
                placeholder='###'
                onChange={this.handleChange}
                type='number'
              />
            </div>

            <div className='formGroup'>
              <label>Breed: </label>
              <select
                name="categories"
                className='formControl browser-default'
                value={this.state.formData.categories}
                onChange={this.handleChange}
              >
                {
                  horses.map(horse => 
                  <option value={horse}>{horse}</option>)
                }
              </select>
            </div>

            <div className='formGroup'>
              <label>$ Price (required): </label>
              <input
                className='formControl'
                name="price"
                value={this.state.formData.price}
                onChange={this.handleChange}
                placeholder='$$.$$'
                required
                type='number'
                pattern="{/^[0-9]+(\.[0-9]{1,2})?$/g}"
              />
            </div>

            <div className='formGroup'>
              <label>Location (required): </label>
              <input
                className='formControl'
                name="location"
                value={this.state.formData.location}
                onChange={this.handleChange}
                placeholder='City, State'
                required
                pattern="{^[A-Za-z . ,'-]+$}"
              />
            </div>

            <div className='formGroup'>
              <label>Contact Number (required): </label>
              <input
                className='formControl'
                name="contact"
                value={this.state.formData.contact}
                onChange={this.handleChange}
                placeholder='(###)###-####'
                required
                type='tel'
                pattern="{/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g}"
              />
            </div>

            <div className='formGroup'>
              <label>Horse Image (URL): </label>
              <input
                className='formControl'
                name="image"
                value={this.state.formData.image}
                onChange={this.handleChange}
                pattern="{/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g}"
              />
            </div>

            <button
              type="submit"
              className='btn'
              disabled={this.state.invalidForm}
            >
              Add Horse
              </button>
          </form>
        </div> */}
      </>
    );
  }
}

export default ListHorse;