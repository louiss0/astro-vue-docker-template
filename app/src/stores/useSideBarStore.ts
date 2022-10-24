import useBoolean from "~/composables/useBoolean"
import { createGlobalState } from "@vueuse/core"






const useSideBarStore = createGlobalState(() => {
    
    const [ isShown, setIsShownToTrue, setIsShownToFalse  ] =  useBoolean()
    
    return {isShown, setIsShownToTrue, setIsShownToFalse}
})
    
    

export default useSideBarStore