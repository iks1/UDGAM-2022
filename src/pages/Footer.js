import './footer.css';

function Footer() {
  return (
    <>
      
      
      <body className="footer_body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100vh">
<div></div>


<footer className="footer">
    <div className="footer__container">
        <div className="footer__top">
            <div className="company__info">
                <h2 className="company__logo"><img src="img/udgam.svg"/></h2>
                
            </div>

            <div className="company__info">
                <a className="footer__title1">E-Cell,IIT Guwahati </a>
                <a className="footer__title"> Assam-7810389</a>
                <p className="company__description">
                    edc@iitg.ac.in
                </p>
                <p className="company__description">
                    +91 7637833974
                </p>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-link">
                            <i className="ri-facebook-circle-line"></i>
                        </a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-link">
                            <i className="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-link">
                            <i className="ri-twitter-line"></i>
                        </a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-link">
                            <i className="ri-linkedin-line"></i>
                        </a>
                    </li>
                </ul>
                
            </div>

            <div>
                <h6 className="footer__title2">Don't miss the Magic</h6>
                <ul className="footer__list2">
                    <li className="footer__list-item">
                        <a href="" className="footer__list-link">Sign up to receive Event notification and Updates</a>
                    </li>
                    <li className="footer__list-item1">

                    </li>
                    <li className="footer__list-item">
                        <a href="" className="footer__list-link"><input type="email"><img className="vect_img" src="img/box2.svg"></img></input></a>
                  </li>
                   
                </ul>
            </div>
           
            

            
        </div>
    </div>
    <div className="terms_conatiner">
  <a className="terms_items"> terms and conditions*</a>
  <a className="terms_items"> privacy policy*</a>
  <a className="terms_items"> refund policy*</a>
    
    </div>
</footer>
<div className="terms_conatiner">
   
    
</div>
</body>
    
    </>
  );
}

export default Footer;

