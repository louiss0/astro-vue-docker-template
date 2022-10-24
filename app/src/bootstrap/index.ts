import { App } from "vue";
import components from "./components";
import config from "./config";


export default (app: App) => { 
    


    for (const value of Object.values(config)) {
        
        app.use(value)   
    }
    
    for (const [key, value] of Object.entries(components)) {


        app.component(key, value)
    }
    
    
}