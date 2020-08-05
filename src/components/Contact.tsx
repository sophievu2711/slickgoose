import React from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { Flex, Heading } from 'rebass';
const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#F1C833',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiFormLabel-root': {
        color: 'white',
        '&.Mui-disabled': {
            color: 'grey'
        }
       },
      '& .MuiOutlinedInput-root': {  
            color: 'white',
            '& fieldset': {
                color: 'white',
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 0
            },
            '&:hover fieldset': {
                borderColor: '#F1C833',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F1C833',
            },
            '&.Mui-disabled fieldset': {
                borderColor: 'grey'
            },
            '&.Mui-disabled': {
                color: 'grey'
            }
      },
    },
  })(TextField);

export default function Contact() {
    const [loading, setLoading] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [msg, setMsg] = React.useState("");
    
    return (
        <Flex backgroundColor="#202121" width="100%" alignItems="center" flexDirection="column" padding={50}>
        <Flex width={[1, 2/3, 1/2]} alignItems="center" flexDirection="column">
            <Heading fontFamily={"Roboto"} fontSize={50} fontWeight={500} color="white">CONTACT US</Heading>
                <CssTextField variant="outlined" label="Full Name" fullWidth style={{marginTop: 20, color: "white"}} autoComplete="name"
                     disabled={loading} onChange={(val) => setName(val.target.value)} value={name}></CssTextField>
                <CssTextField variant="outlined" label="Email" fullWidth  style={{marginTop: 20}} type="email" autoComplete="email"
                     disabled={loading} onChange={(val) => setEmail(val.target.value)} value={email}></CssTextField>
                <CssTextField variant="outlined" label="Message" fullWidth multiline rows="5" style={{marginTop: 20}} 
                     disabled={loading} onChange={(val) => setMsg(val.target.value)} value={msg}></CssTextField>
                <div style={{position: 'relative'}}>
                    <Button style={{width: 100, height: 50, border: "2px solid #F1C833", color: 'white', marginTop: 20, borderRadius: 0}}
                        disabled={loading} onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                                setName("");
                                setEmail("");
                                setMsg("");
                            }, 3000);
                        }}> Send </Button>
                    {loading && <CircularProgress size={24} style={{color: "#F1C833", position: 'absolute', top: '50%', left: '50%', marginLeft: -12}}/>}
                </div>
        </Flex>
    </Flex>
    )
}