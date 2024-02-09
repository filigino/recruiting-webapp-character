import { sumReducer } from "../reducers/reducers"
import PlusMinusButtons from "./ui/PlusMinusButtons"

const Attribute = ({
  attribute,
  val,
  modifierVal,
  onIncrement,
  onDecrement,
}) => (
  <>
    <div>
      {attribute}: {val}
    </div>
    <div>Mod: {modifierVal}</div>
    <PlusMinusButtons onClickPlus={onIncrement} onClickMinus={onDecrement} />
  </>
)

const Attributes = ({ valsByAttribute, dispatchAttributes, valsBySkill }) =>
  Object.entries(valsByAttribute).map(([attribute, { val, modifierVal }]) => (
    <Attribute
      key={attribute}
      attribute={attribute}
      val={val}
      modifierVal={modifierVal}
      onIncrement={() =>
        dispatchAttributes({
          type: "INCREMENT",
          attribute,
        })
      }
      onDecrement={() =>
        dispatchAttributes({
          type: "DECREMENT",
          attribute,
          skillTotal: Object.values(valsBySkill).reduce(sumReducer, 0),
        })
      }
    />
  ))

export default Attributes
