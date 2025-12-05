import { TextField } from "@mui/material";
import { Stack, Box } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";



export function ProfileForm() {

    const {
    // eslint-disable-next-line no-unused-vars
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm()

  const onSubmit = () => console.log("doneeeee")
    

    const currencies = [
        {
            value: 'Admin',
            label: 'Admin',
        },
        {
            value: 'User',
            label: 'User',
        },

    ];
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} style={{ margin: '80px 20px', display: 'flex', flexDirection: 'column', gap: 3 }}>

            <Stack sx={{ gap: 2 }} direction={'row'}>
                <TextField sx={{ flex: 1 }} id="filled-basic" label="First Name" variant="filled" />
                <TextField sx={{ flex: 1 }} id="filled-basic" label="Last Name" variant="filled" />

            </Stack>
            <TextField sx={{ width: '100%', margin: '20px auto' }} id="filled-basic" label="Email" variant="filled" />
            <TextField sx={{ width: '100%', margin: '10px auto' }} id="filled-basic" label="Contact Number" variant="filled" />
            <TextField sx={{ width: '100%', margin: '10px auto' }} id="filled-basic" label="Address" variant="filled" />

            <TextField
                id="outlined-select-currency"
                select
                label="Role"
                defaultValue="User"
                helperText="Please select your currency"
                sx={{ margin: '20px 0' }}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <Button type="submit" variant='contained'>
                Create New User
            </Button>
        </Box>
    )
}

