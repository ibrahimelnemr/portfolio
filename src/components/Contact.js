import React from 'react';
import github_logo from '../images/github.png'
import github_logo2 from '../images/github2.png'
import linkedin_logo from '../images/linkedin.png'

function Contact()
{

    return (

        <>
            <div id="contact" class="row m-0  bg-light bg-opacity-75 text-dark d-flex align-items-center">
                <div class="col-12">
                    <div class="text-center p-2 mb-5 m-2 display-6">
                        Contact
                    </div>
                </div>

                <div class="col-3 text-center d-flex align-items-center justify-content-center">

                </div>

                <div class="col-3 text-center d-flex align-items-center justify-content-center">
                    <a href="https://github.com/ibrahimelnemr/">
                        <img class="img-fluid contact-logo" src={ linkedin_logo } alt="" />
                    </a>
                </div>

                <div class="col-3 text-center d-flex align-items-center justify-content-center">
                    <a href="https://github.com/ibrahimelnemr/">
                        <img class="img-fluid contact-logo" src={ github_logo2 } alt="" />
                    </a>
                </div>

                <div class="col-3 text-center d-flex align-items-center justify-content-center"></div>

                <div class="col-12">
                    <div class="text-center p-2 mb-5 m-2 fs-4 fw-light">
                        I am currently searching for opportunities in full-stack or back-end development. If you'd like to get in touch, feel free to connect on Github or Linkedin!
                        <br />
                        <br />
                        You can also reach me via email at <a href="mailto:ibrahimelnemr@aucegypt.edu">ibrahimelnemr@aucegypt.edu</a>.
                    </div>


                </div>

                <div class="col-12 mb-4"></div>
            </div>


        </>

    );

}

export default Contact
