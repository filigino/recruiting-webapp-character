import { MODIFIERS_BY_SKILL } from "../consts"
import PlusMinusButtons from "./ui/PlusMinusButtons"

const Skill = ({
  skill,
  val,
  pointsSpent,
  modifier,
  modifierVal,
  onIncrement,
  onDecrement,
}) => (
  <>
    <div>
      {skill}: {val}
    </div>
    <div>
      Spent: {pointsSpent} Mod ({modifier}): {modifierVal}
    </div>
    <PlusMinusButtons onClickPlus={onIncrement} onClickMinus={onDecrement} />
  </>
)

const Skills = ({ valsBySkill, dispatchSkills, valsByAttribute }) =>
  Object.entries(valsBySkill).map(([skill, val]) => {
    const modifier = MODIFIERS_BY_SKILL[skill]
    const modifierVal = valsByAttribute[modifier].modifierVal
    return (
      <Skill
        key={skill}
        skill={skill}
        val={val + modifierVal}
        pointsSpent={val}
        modifier={modifier}
        modifierVal={modifierVal}
        onIncrement={() =>
          dispatchSkills({
            type: "INCREMENT",
            skill,
            intelligenceModifierVal:
              valsByAttribute["Intelligence"].modifierVal,
          })
        }
        onDecrement={() => dispatchSkills({ type: "DECREMENT", skill })}
      />
    )
  })

export default Skills
