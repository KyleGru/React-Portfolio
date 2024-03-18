import { useState } from 'react'

const Contact = () => {
    
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [ validationErrors, setValidationErors ] = useState({
        name: false,
        email: false,
        message: false
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleForBlur = (e) => {
        const { name, value } = e.target;
        setValidationErors({ ...validationErrors, [name]: value === '' });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <div className='container text-center'>
            <h1>Contact Me</h1>
            <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                    <label htmlFor="name" className='form-label'>
                        Name:
                    </label>
                    <input type="text" className='form-control' id='name' name='name' value={formData.name} onChange={handleInputChange} onBlur={handleForBlur} required />
                    {validationErrors.name && <p className='text-warning'>Name is required</p>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='form-label'>
                        Email:
                    </label>
                    <input type="email" className='form-control' id='email' name='email' value={formData.email} onChange={handleInputChange} onBlur={handleForBlur} required />
                    {validationErrors.email && <p className='text-warning'>Email is required</p>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="message" className='form-label'>
                        Message:
                    </label>
                    <textarea className='form-control' id='message' name='message' value={formData.message} onChange={handleInputChange} onBlur={handleForBlur} required />
                    {validationErrors.message && <p className='text-warning'>Message is required</p>}
                </div>
                <button type='submit' className='submitBtn'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;