import React from "react";
//Accordion
import { Accordion,AccordionItem } from "carbon-components-react";
import 'carbon-components/css/carbon-components.min.css';
import { Questions } from "../data";
import "./pages.css"

export function FAQPage(){
    return (
        <div className="BackgroundFAQTemplate">
            <div className="plate">
            <Accordion> 
                {
                    Questions.map((question) => 
                    (<AccordionItem title={<p className="FAQQuestion">{question.title}</p>}>
                    <div>
                        <p color="white" className="FAQAnswer">{question.answer}</p>
                    </div>
                    </AccordionItem> ))
                }
                </Accordion>
            </div>
        </div>
    );
}