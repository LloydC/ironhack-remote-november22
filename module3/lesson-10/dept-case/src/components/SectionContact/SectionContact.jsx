import React from 'react';
import './SectionContact.scss';

const SectionContact = () => {
  return (
    <div className='contact-container'>
        <h1 className='contact-title'>QUESTION? WE ARE HERE TO HELP!</h1>
        <div className='contact-form'>
            <form>
                <div className='top-container'>
                    <div>
                        <label for="" className="col-form-label">Name </label>
                        <br/>
                        <input type="text" className='form-control' style={{ marginTop: '3.2rem', width: '29.5rem' }} required/>
                    </div>
                    <div className="email">
                        <label for="" className="col-form-label">Email </label>
                        <br/>
                        <input type="text" className='form-control' style={{ marginTop: '3.2rem', width: '29.5rem' }} required/>
                    </div>
                </div>
                
                <div className="col-md-12 form-group mb-3">
                    <label for="message" className="col-form-label">Message </label>
                    <br/>
                    <textarea required className="form-control" name="message" id="message" cols="30" rows="5" style={{ width: '29.5rem', resize: 'none', borderBottom: '1px solid black'}}></textarea>
                </div>
                <div className="text-center">
                    <input className='form-group submit-button' type="submit" value="Send" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default SectionContact