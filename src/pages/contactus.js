import Navbar from "../components/Navbar";
import "./contactus.css"
import { Button } from '@cred/neopop-web/lib/components';
function Contactus() {
  return (
    <>
      <Navbar />
      {/* Anurag code */}
      <body className="contact_us">

        <div className="row euro">
          <div className="col-lg-8 col-sm-12">
            <div className="container-fluid mt-3 boat">
              <a className="hello">Contact Us </a>
              <a className="names" >
                <input type="text" className="first_name" value="First name..." />
                <input type="text" className="last_name" value="Last name..." />
              </a>
              <p className="email_input">
                <input type="email" className="mail_input" value="Type your mail..." />
              </p>
              <form action="#" className="son">
                <label for="lang" className="mikasa">Reason for Contacting</label>
                <select name="languages" id="lang" className="levi">
                  <option value="javascript">Sponsorship</option>
                  <option value="php">NO Reason</option>
                  <option value="java">Intern lagwa do</option>

                </select>

              </form>
              <a className="aot">
                <input type="text" className="Eren" value="Any message for us?..." />
              </a>
              <br />
              <div className="submit_contactus">
                <Button 
                  variant="primary"
                  kind="elevated"
                  size="big"
                  colorMode="light"
                  colorConfig={{ backgroundColor: "#F0E266", borderColor: "#736B1F" }}
                  onClick={() => {
                    console.log("I'm clicked");
                  }}
                >
                  <p style={{ color: "black" }}>Submit</p>
                </Button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="side_box">

            </div>
          </div>
        </div>

      </body>
    </>

  );
}

export default Contactus;
