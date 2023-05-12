import "./Card.css";

function Card(props) {
  return (
    <div className="card2">
      <div className="res">
        <div className="result-line">
          <div>
            <p className="res-tip">Tip amount</p>
            <span>/ person</span>
          </div>

          <div className="res-num">${props.tipAmount}</div>
        </div>
        <div className="result-line">
          <div>
            <p className="res-tip">Total</p>
            <span>/ person</span>
          </div>

          <div className="res-num">${props.totalAmount}</div>
        </div>
      </div>

      <button
        className="btn-reset"
        onClick={() => {
          props.setTipAmount(0);
          props.setTotalAmount(0);
          props.setInputValue("");
          props.setInputValue2("");
          props.setInputValue3("");
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default Card;
