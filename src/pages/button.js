import { Button } from '@cred/neopop-web/lib/components';
import { ColorConfig, FontWeights } from '@cred/neopop-web/lib/types';

const Page = () => {
    return (
        <div className='butn'>
        <Button
        
            variant="secondary"
            kind="elevated"
            size="big"
            fullWidth={true}
            colorConfig= {{backgroundColor: "#F0E266",color: "#00000" ,     
                           edgeColors:{right:" #736B1F",
                                       bottom:" #736B1F"}          
                                 }}
            spacingConfig={{height:"80px", width:"400px",padding: "0" }}
            textStyle={{fontWeights:700,
                         fontSize:24,
                         
            }}
            edgeColors={{right:"#736B1F",
                         bottom:"#736B1F",}}
           
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
           <strong>Get My Ticket</strong> 
        </Button>
        </div>
    );
};

export default Page;
