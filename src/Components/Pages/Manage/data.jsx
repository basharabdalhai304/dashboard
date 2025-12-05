    import { Box, Typography, TextField, Button } from "@mui/material"

    export const rows = [
        { id: 1, name: 'Bashar', email: 'bashar@gmail.com', age: 23, phone: "+963945370973", access: "admin" },
        { id: 2, name: 'mhmd', email: 'mhmd@gmail.com', age: 23, phone: "+963957843632", access: "user" },
        { id: 3, name: 'ismail', email: 'ismail@gmail.com', age: 23, phone: "+9639915243602", access: "user" },
        { id: 4, name: 'maya', email: 'maya@gmail.com', age: 21, phone: "+963941578566", access: "user" },
        { id: 5, name: 'amal', email: 'amal@gmail.com', age: 22, phone: "+963958474254", access: "user" },
        { id: 6, name: 'sara', email: 'sara@gmail.com', age: 21, phone: "+963984758541", access: "user" },
        { id: 7, name: 'hala', email: 'hala@gmail.com', age: 21, phone: "+963947854751", access: "user" },
    ];
    
    export const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'age', headerName: 'Age', width: 100 ,flex:1},
        { field: 'phone', headerName: 'Phone', width: 300 },
        {
            field: 'access',
            headerName: 'Access',
            width: 120,
            renderCell: ({ row: { access } }) => {
            const color =
                access === 'admin' ? '#1565c0' : 'green'; 
        
            return (
                <Box
                sx={{
                    backgroundColor: color,
                    borderRadius: 1,
                    padding:'3px',
                    margin:'10px auto',         
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    width: '80%',  
                }}
                >
                <Typography variant="body2">{access}</Typography>
                </Box>
            );
            },
        }
        
    ];
    