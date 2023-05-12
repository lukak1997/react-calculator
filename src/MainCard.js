import "./MainCard.css";
import Card from "./Card";

function MainCard(props) {
  const arr = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <div className="main-card">
      <div className="col">
        <div>
          <label for="bill">Bill</label>
          <div>
            <input
              type="number"
              id="bill"
              placeholder="0"
              className="bill-input"
              value={props.inputValue}
              onChange={(e) => {
                props.setInputValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label for="tip">Select Tip %</label>
          </div>
          <div className="tip-persentage">
            {arr.map((el) => {
              return (
                <button
                  className="btn-persentage"
                  onClick={(e) => {
                    const tip = e.target.textContent.slice(
                      0,
                      e.target.textContent.length - 1
                    );
                    if (props.inputValue && props.inputValue2) {
                      props.setTotalAmount(
                        (
                          (props.inputValue * (1 + tip / 100)) /
                          props.inputValue2
                        ).toFixed(2)
                      );
                      props.setTipAmount(
                        (
                          (props.inputValue * tip) /
                          100 /
                          props.inputValue2
                        ).toFixed(2)
                      );
                    }
                  }}
                >
                  {el}
                </button>
              );
            })}
            <input
              type="number"
              id="tip"
              className="tip"
              placeholder="Custom"
              value={props.inputValue3}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (props.inputValue && props.inputValue2) {
                    const value = +e.target.value;
                    props.setTotalAmount(
                      (
                        (props.inputValue * (1 + value / 100)) /
                        props.inputValue2
                      ).toFixed(2)
                    );
                    props.setTipAmount(
                      (
                        (props.inputValue * value) /
                        100 /
                        props.inputValue2
                      ).toFixed(2)
                    );
                  }
                }
              }}
            />
          </div>
        </div>

        <div>
          <label for="people">Number of People</label>
          <div>
            <input
              type="number"
              id="people"
              placeholder="0"
              className="people-input"
              value={props.inputValue2}
              onChange={(e) => {
                props.setInputValue2(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="column">
        <Card
          tipAmount={props.tipAmount}
          totalAmount={props.totalAmount}
          setTotalAmount={props.setTotalAmount}
          setTipAmount={props.setTipAmount}
          setInputValue={props.setInputValue}
          setInputValue2={props.setInputValue2}
          setInputValue3={props.setInputValue3}
        />
      </div>
    </div>
  );
}

export default MainCard;
