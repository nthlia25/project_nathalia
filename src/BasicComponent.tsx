import { Button } from "react-bootstrap"
import MyButton from "./components/ui/Button"
import StateCounter from "./components/ui/StateCounter"

// parent component
function BasicComponent() {
    return <>
        <MyButton>
            Test
        </MyButton> { /* child component */}

        <MyButton>
            Ini button ku, mana button mu
        </MyButton>{ /* child component */}

        <MyButton>
            Simpan
        </MyButton> { /* child component */}

        <Button variant="warning">Test Component Lagi</Button>

        <StateCounter/>
    </>
}

export default BasicComponent