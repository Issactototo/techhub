import { CodeSnippet} from 'carbon-components-react';
export const CodeSnippetDisplay=({data})=>{
    return(
        <div className="centerBox" >
            <div className="codeBox">
            <CodeSnippet>
                <p style={{color:"black"}}>
                {data}
                </p>
            </CodeSnippet>
            </div>
        </div>
    )
}