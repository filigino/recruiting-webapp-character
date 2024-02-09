import { useReducer } from "react"
import { ATTRIBUTE_LIST, SKILL_LIST } from "./consts.js"
import { calculateModifier } from "./utils/utils.js"
import { attributeReducer, skillReducer } from "./reducers/reducers.js"
import Attributes from "./components/Attributes.jsx"
import Classes from "./components/Classes.jsx"
import Skills from "./components/Skills.jsx"
import "./App.css"

const initialValsByAttribute = ATTRIBUTE_LIST.reduce(
  (map, attribute) => ({
    ...map,
    [attribute]: { val: 0, modifierVal: calculateModifier(0) },
  }),
  {}
)

const initialValsBySkill = SKILL_LIST.reduce(
  (map, { name }) => ({ ...map, [name]: 0 }),
  {}
)

const App = () => {
  const [valsByAttribute, dispatchAttributes] = useReducer(
    attributeReducer,
    initialValsByAttribute
  )

  const [valsBySkill, dispatchSkills] = useReducer(
    skillReducer,
    initialValsBySkill
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>DnD</h1>
      </header>
      <section className="App-section">
        <Attributes
          valsByAttribute={valsByAttribute}
          dispatchAttributes={dispatchAttributes}
          valsBySkill={valsBySkill}
        />
      </section>
      <section className="App-section">
        <Classes valsByAttribute={valsByAttribute} />
      </section>
      <section className="App-section">
        <Skills
          valsBySkill={valsBySkill}
          dispatchSkills={dispatchSkills}
          valsByAttribute={valsByAttribute}
        />
      </section>
    </div>
  )
}

export default App
