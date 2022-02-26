import React from "react";
//Accordion
import { Accordion,AccordionItem } from "carbon-components-react";
import 'carbon-components/css/carbon-components.min.css';
import { Questions } from "../data";
import { HeadingBar } from "../components";
import "./pages.css"

export function FAQPage(){
    return (
        <div className="headingTemplate">
                <HeadingBar title="Frequently Asked Questions"/>
            <div className="BackgroundFAQTemplate">
            

                <div className="plate" id ="faqPlate">
                <Accordion> 
                    {
                        Questions.map((question) => 
                        (<AccordionItem title={<p className="FAQQuestion" id ="FAQQuestion">{question.title}</p>}>
                        <div>
                            <p color="white" className="FAQAnswer" id="FAQAnswer">{question.answer}</p>
                        </div>
                        </AccordionItem> ))
                    }
                    </Accordion>
                </div>
            </div>
        </div>
    );
}