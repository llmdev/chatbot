import { Button } from "@mui/material"

const ButtonChat = ({children, ...props}) => {
  return (
    <Button variant="contained" size="small" fullWidth style={{ marginBottom: 10}} {...props}>{children}</Button>
  )
}

export default ButtonChat;