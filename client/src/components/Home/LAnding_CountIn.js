import { Button } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { colorPalette } from '@cred/neopop-web/lib/primitives';

const CountIn = () => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{backgroundColor:"#F0E266",borderColor:"#736B1F"}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <p style={{color:"black"}}>COUNT ME IN</p>
    </Button>
    );
};

export default CountIn;