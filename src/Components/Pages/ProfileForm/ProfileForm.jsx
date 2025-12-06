import { TextField, Stack, Box, MenuItem, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function ProfileForm() {
 
  const schema = yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(3, "Must be at least 3 characters")
      .max(20, "Must be at most 20 characters"),

    lastName: yup
      .string()
      .required("Last name is required")
      .min(3, "Must be at least 3 characters")
      .max(20, "Must be at most 20 characters"),

    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),

    contact: yup
      .string()
      .required("Contact number is required"),

    address: yup
      .string()
      .required("Address is required"),

    role: yup.string().required("Role is required"),
  });

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const roles = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ margin: "80px 20px", display: "flex", flexDirection: "column", gap: 3 }}
    >
      
      <Stack sx={{ gap: 2 }} direction="row">
        <TextField
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
        <TextField
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
      </Stack>

      
      <TextField
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        label="Email"
        variant="filled"
        sx={{ width: "100%", margin: "5x auto" }}
      />

      
      <TextField
        {...register("contact")}
        error={!!errors.contact}
        helperText={errors.contact?.message}
        label="Contact Number"
        variant="filled"
        sx={{ width: "100%", margin: "5px auto" }}
      />

      
      <TextField
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
        label="Address"
        variant="filled"
        sx={{ width: "100%", margin: "5px auto" }}
      />

      
      <TextField
        {...register("role")}
        select
        error={!!errors.role}
        helperText={errors.role?.message || "Please select your role"}
        label="Role"
        defaultValue="User"
        sx={{ margin: "10px 0" }}
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      
      <Button type="submit" variant="contained">
        Create New User
      </Button>
    </Box>
  );
}
