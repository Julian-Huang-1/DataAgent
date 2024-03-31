import { Button as MuiButton } from '@mui/material';


export const Button = ({ children, ...rest }) => <MuiButton {...rest}>{children}</MuiButton>;