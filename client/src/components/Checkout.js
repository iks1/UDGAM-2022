import { Button } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { colorPalette } from '@cred/neopop-web/lib/primitives';

const Checkout = (props) => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            
            colorConfig={{backgroundColor:"#D4F34A",borderColor:"#000000",edgeColors:{right:"#FC97D9",bottom:"#FC97D9"}}}
            onClick={() => {
                console.log("I'm clicked");
            }}
            icon={props.icon}
        >
            <p style={{color:"rgba(0, 0, 0, 0.36)"}}>{props.title}</p>
    </Button>
    );
};

export default Checkout;