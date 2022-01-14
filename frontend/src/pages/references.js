import React from "react";
import { HeadingBar } from "../components";
import { ReactComponent as LogoIcon } from "../data/images/logo.svg";
export const ReferencesPage = () => {
  return (
    <div className="headingTemplate">
      <HeadingBar title="References" />
      
      <div className="BackgroundFAQTemplate">
        <div className="termsTemplate">
        
          <p className="termsP">
            <br/>
           There are some places in the application that:
          <br/>
          <br/>
            Design Disclaimer
            <br/>
            We use <a href="https://treact.owaiskhan.me/" target="_blank">TReact</a>'s design on our landing page, specifically the hero and footer.
            We do not own nor hold any rights of the code.
            
            <br/>
            <br/>
            Image Disclaimer
            <br/>
            We use one of the <a href="https://unsplash.com/" target="_blank">Unsplash</a>'s iamges  on our landing page, specifically the hero and footer.
            We do not own nor hold any rights of the image.
          </p>
          <LogoIcon className="templateIconStyle" />
          {/* <Accordion> 
            {
                Questions.map((question) => 
                (<AccordionItem title={<p className="FAQQuestion">{question.title}</p>}>
                <div>
                    <p color="white" className="FAQAnswer">{question.answer}</p>
                </div>
                </AccordionItem> ))
            }
            </Accordion> */}
        </div>
      </div>
    </div>
  );
};
