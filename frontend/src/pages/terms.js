import React from "react";
import { HeadingBar } from "../components";
import { ReactComponent as LogoIcon } from "../data/images/logo.svg";
export const TermsPage = () => {
  return (
    <div className="headingTemplate">
      <HeadingBar title="Terms and Conditions" />
      
      <div className="BackgroundFAQTemplate">
        <div className="termsTemplate">
        <br/>
        
          <p className="termsP">
           By using this site, you agree to abide the following terms:
          <br/>
          <br/>
            INTELLECTUAL PROPERTY RIGHTS
            <br/>
            Unless otherwise indicated, the Site is our proprietary
            property and all source code, databases, functionality, software,
            website designs, audio, video, text, photographs, and graphics on
            the Site (collectively, the “Content”) and the trademarks, service
            marks, and logos contained therein (the “Marks”) are owned or
            controlled by us or owned by us. Except as expressly provided in these Terms and
            Conditions, no part of the Site and no Content or Marks may be
            copied, reproduced, aggregated, republished, uploaded, posted,
            publicly displayed, encoded, translated, transmitted, distributed,
            sold, licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission. 

            For blogs, if you are not the author of the blog, you are not allowed to download or print a copy
            of any portion of the blog's Content. The author of the blog reserves all
            rights of the content.
            
            <br/>
            <br/>
            USER REPRESENTATIONS
            <br/>By using the Site, you represent
            and warrant that: (1) all registration information you submit will
            be true, accurate, current, and complete; (2) you will maintain the
            accuracy of such information and promptly update such registration
            information as necessary; (3) you have the legal capacity and you
            agree to comply with these Terms and Conditions; (4) you will not access the Site through automated
            or non-human means, whether through a bot, script, or otherwise; (7)
            you will not use the Site for any illegal or unauthorized purpose;
            (5) your use of the Site will not violate any applicable law or
            regulation. If you provide any information that is untrue,
            inaccurate, not current, or incomplete, we have the right to suspend
            or terminate your account and refuse any and all current or future
            use of the Site (or any portion thereof).
            
            <br/>
            <br/>
            USER REGISTRATION 
            <br/>
            You may be required to register with the Site. You agree to keep your
            password confidential and will be responsible for all use of your
            account and password. We reserve the right to remove, reclaim, or
            change a username you select if we determine, in our sole
            discretion, that such username is inappropriate, obscene, or
            otherwise objectionable.
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
