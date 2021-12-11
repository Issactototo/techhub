export const TextDisplay = ({ data }) => {

  function NewlineText(data) {
    const newText = data.split('\n').map(str => <p className="text">{str}</p>);
    return newText
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
