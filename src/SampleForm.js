import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SampleForm = ({addNewFormData}) => {
    const [isValidForm, setIsValidForm] = useState(false);    
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        contact: '',
        about: ''
    });
    const [errors, setErrors] = useState({
        name: 'This field is mandatory.',
        dob: 'This field is mandatory.',
        email: 'This field is mandatory.',
        contact: 'This field is mandatory.',
        about: 'This field is mandatory.'
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        const currentErrors = validate(e.target.name, e.target.value); // Get the current errors
        setIsValidForm(Object.keys(currentErrors).length === 0); // Update based on current errors
    };

    const validate = (fieldName, value) => {
        let tempErrors = { ...errors };

        // Check for empty fields
        if (!value) {
            tempErrors[fieldName] = 'This field is mandatory.';
        } else {
            switch (fieldName) {
                case 'name':
                    if (!value.match(/^[a-zA-Z ]+$/)) {
                        tempErrors.name = "Name should contain alphabets only.";
                    } else {
                        delete tempErrors.name;
                    }
                    break;
                case 'dob':
                    if (new Date(value) > new Date()) {
                        tempErrors.dob = "DOB can't be greater than today's date.";
                    } else {
                        delete tempErrors.dob;
                    }
                    break;
                case 'email':
                    if (!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
                        tempErrors.email = "Invalid email address.";
                    } else {
                        delete tempErrors.email;
                    }
                    break;
                case 'contact':
                    if (!value.match(/^\d{10}$/)) {
                        tempErrors.contact = "Contact should be 10 digits long and contain numbers only.";
                    } else {
                        delete tempErrors.contact;
                    }
                    break;
                case 'about':
                    delete tempErrors.about;  // The mandatory error is already handled by the initial check
                    break;
                default:
                    break;
            }
        }

        setErrors(tempErrors);
        return tempErrors; // return the local errors object
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validForm = true;
        for (let field in formData) {
            // We're validating all fields on submit to catch any field that hasn't been interacted with
            if (!validate(field, formData[field])) validForm = false;
        }

        if (validForm) {
            addNewFormData(formData);
            setFormData({
                name: '',
                dob: '',
                email: '',
                contact: '',
                about: ''
            });
        }
    };

    return (
        <div style={{maxWidth: '700px', margin: '0 auto', marginTop: '40px'}}>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                <TextField 
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    fullWidth 
                />

                <div style={{textAlign: 'left'}}>
                <label >Date of Birth</label>
                <TextField 
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    error={Boolean(errors.dob)}
                    helperText={errors.dob}
                    fullWidth 
                />
                </div>
                <TextField 
                    name="email"
                    label="Email Id"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    fullWidth 
                />
                <TextField 
                    name="contact"
                    label="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    error={Boolean(errors.contact)}
                    helperText={errors.contact}
                    fullWidth 
                />
                <TextField 
                    name="about"
                    label="Tell me about yourself"
                    multiline
                    value={formData.about}
                    onChange={handleChange}
                    error={Boolean(errors.about)}
                    helperText={errors.about}
                    fullWidth
                />
                <Button
                    sx={{ marginTop: '30px' }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isValidForm}  // Disable button if form is not valid
                >
                    Submit
                </Button>
            </form>


        </div>
    );
};

export default SampleForm;
