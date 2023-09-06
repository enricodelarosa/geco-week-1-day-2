import {Typography } from '@mui/material';

export default function GroceryList({ items }) {
    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="h6">Grocery List</Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                        <Typography variant="body1">
                            ({item.qty}) {item.name}  @ Php {parseFloat(item.price).toFixed(2)} each
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
}