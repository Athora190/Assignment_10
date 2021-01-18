import validateInput from "./ValidateInput"
import React from "react";
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


class UserWords extends React.Component{
    constructor(props){
    super(props);
    
    this.state ={
        user:{ 
            value: '',
            error: '',},
        result:{
            value:'',
        },
        
        }
        // handleChange = event =>{
        //     this.setState(
        //         {[event.target.]}
        //     )
        //     const InputError = validateInput(this.state.user.)}
    }
    render(){
        let style = {
            color:"#3678FA",
            fontSize:"30px",
            fontWeight:"bold"
        }
        return (
        <div>
            <div>
                <p style = {style}>Word Translater</p>
            </div>
            <div>
            {/* <Grid> */}
            <form noValidate autoComplete="off">
                <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" variant="outlined"></TextField>
            </form>
            {/* </Grid> */}
            </div>
        </div>
            
        )
    }

}

export default UserWords