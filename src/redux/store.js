import { configureStore } from "@reduxjs/toolkit";
import team from "./team";



  export default configureStore({



    reducer : {
        team : team

    }
    
});