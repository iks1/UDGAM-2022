import { Button } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { colorPalette } from '@cred/neopop-web/lib/primitives';

const Merch = (props) => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            icon={props.icon}
            colorConfig={{backgroundColor:"#DDF140",borderColor:"#DDF140"}}
            spacingConfig={{iconHeight:props.iconHeight}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <p style={{color:"black"}}>{props.title}</p>
    </Button>
    );
};

export default Merch;