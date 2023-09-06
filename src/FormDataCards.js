import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FormDataCards = ({ formData }) => {
    return (
        <div>
            {formData.length !== 0 &&
                 <Typography sx={{marginTop: '30px'}} variant="h6">User Data</Typography>
            }
            {formData.length !== 0 && formData.map((data, index) => (
                <Card key={index}>
                    <CardContent>
                        <Typography>Name: {data.name}</Typography>
                        <Typography>DOB: {data.dob}</Typography>
                        <Typography>Email: {data.email}</Typography>
                        <Typography>Contact: {data.contact}</Typography>
                        <Typography>About: {data.about}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default FormDataCards;
