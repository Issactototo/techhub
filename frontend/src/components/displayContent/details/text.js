export const TextDisplay = ({ data }) => {

  function NewlineText(data) {
    if(data.split('\n')){
      return data.split('\n').map(str => <p className="text">{str}</p>);
    }
    return data
  }
  return (
    <div className="centerBox">
      <div className="textBox">
        {console.log("hihifawnfanofn")}
        {console.log(data)}
        <div>{NewlineText(data)}</div>
      </div>
    </div>
  );
};
