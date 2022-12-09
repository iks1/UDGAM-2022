import { Button } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { colorPalette } from '@cred/neopop-web/lib/primitives';

const CountIn = () => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            backgroundColor="yellow"
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            COUNT ME IN
        </Button>
    );
};

export default CountIn;