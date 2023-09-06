import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import NavBar from './NavBar';
import SampleForm from './SampleForm';
import FormDataCards from './FormDataCards';
import GroceryList from './GroceryList';

import { useState } from 'react';
import { Typography, Modal, Box } from '@mui/material';
import emp1 from './emp1.jpg';

import logo from './logo.svg';
import './App.css';

function App() {
    const [formData, setFormData] = useState([]);
    const [openModal, setOpenModal] = useState(null);


    function addNewFormData(formSubmissionObj) {
        setFormData([...formData, formSubmissionObj])
    }

    function handleOpenModal(employee) {
        setOpenModal(employee);
    }

    function handleCloseModal() {
        setOpenModal(null);
    }


    const employees = [
        { name: 'John Doe', designation: 'Developer', image: emp1 },
        { name: 'Jane Smith', designation: 'Designer', image: emp1 },
        { name: 'Mike Johnson', designation: 'Manager', image: emp1 },
    ];

    const [groceries, setGroceries] = useState([
        { name: 'Milk', qty: 2, price: 2.34 },
        { name: 'Eggs', qty: 12, price: 4.54 },
        { name: 'Bread', qty: 1, price: 45.52 },
        { name: 'Butter', qty: 1, price: 66.43 }
    ]);

    return (
        <div className="App">
            <NavBar />

            {/* Display Employees */}
            <div style={{width: '300px', margin: '0 auto'}}>
                <Typography variant="h6">Employees</Typography>
                {employees.map((employee, index) => (
                    <div key={index} sx={{width: 'fit-content'}}>
                        
                        <Typography
                            sx={{width: 'fit-content', margin: '0 auto'}}
                            variant="body1"
                            onMouseOver={() => handleOpenModal(employee)}
                        >
                            {employee.name}
                        </Typography>
                    </div>
                ))}

                {/* Modal to show complete data */}
                {openModal && (
                    <Modal open={Boolean(openModal)} onClose={handleCloseModal}>
                        <Box style={{ margin: '20px', padding: '20px', backgroundColor: 'white' }}>
                        <button onClick={()=> handleCloseModal()}>Close</button>
                            <Typography>Name: {openModal.name}</Typography>
                            <Typography>Designation: {openModal.designation}</Typography>
                            <img src={openModal.image} alt={openModal.name} style={{ width: '100px' }} />
                        </Box>
                    </Modal>
                )}
            </div>

            <GroceryList items={groceries} />


            <SampleForm addNewFormData={addNewFormData} />

            <FormDataCards formData={formData} />


        </div>
    );
}

export default App;
