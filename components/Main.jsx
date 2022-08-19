import React, {useState} from "react"

export default function Main () {

  const [lightMode, setLightMode] = useState(true)

  function toggleLightMode() {
    setLightMode(prevValue => !prevValue)
    console.log(lightMode)
  }

  const styles_border = {
    border: lightMode ? '1px solid black' : '1px solid white',
    width: '45px',
    height: '20px',
    borderRadius: '100px',
    backgroundColor: lightMode ? 'black' : 'white',
    cursor: 'pointer',
  }
  const styles_button = {
    width: '20px',
    height: '20px',
    borderRadius: '100%',
    color: lightMode ? 'white' : 'black',
    backgroundColor: lightMode ? 'white' : 'black',
    cursor: 'pointer',
    position: 'relative',
    left: lightMode ? '' : '25px'
  }

  const styles_main = {
    color: lightMode ? '#232323' : '#f5f5f5',
    backgroundColor: lightMode ? '#f5f5f5' : '#383838',
    backgroundImage: lightMode
      ? 'url(../img/light-drc.svg)'
      : 'url(../img/dark-drc.svg)',
    backgroundRepeat: 'no-repeat',
  }

  const styles_body = {
  color : lightMode ? '#232323' : "#f5f5f5",
  backgroundColor: lightMode ? '#f5f5f5' : '#383838',
  
  }

  return (
    <div style={styles_body}>
      <header>
        <div>
          <img src="../img/flag.svg" alt="congolese flag" className="flag" />
          <h1 className="title">Democratic Republic of the Congo (DRC)</h1>
        </div>

        <span className="light-dark-mode">Light/Dark mode</span>
        <div 
        className="border-button" 
        style={styles_border}
        onClick={toggleLightMode}
        >
          <div className="button" style={styles_button}>
            a
          </div>
        </div>
      </header>
      <hr />

      <div className="body" style={styles_main}>
        <p className="sub-title">5 facts about the DRC</p>
        <ul>
          <li>
            The Democratic Republic of the Congo is the second largest country
            in Africa. It borders nine countries: Angola, Burundi, the Central
            African Republic, the Republic of Congo, Rwanda, South Sudan,
            Tanzania, Uganda, and Zambia.
          </li>
          <br />
          <li>
            DR Congo’s capital city, Kinshasa, is located on the Congo River
            opposite Brazzaville, the capital of Congo (Republic of Congo). The
            two cities are less than a mile (1.6km) apart, making them the
            closest capital cities in the world.
          </li>
          <br />
          <li>
            The oldest national park in Africa is the Congo’s Virunga National
            Park. It is home to rare mountain gorillas, lions, and elephants.
          </li>
          <br />
          <li>
            The world’s second-largest rainforest, the Congolese Rainforest, is
            part-located in DR Congo. The Congolese Rainforest spans six
            countries: Cameroon, Central African Republic, Republic of the
            Congo, Equatorial Guinea and Gabon.
          </li>
          <br />
          <li>
            In 1971, the country was renamed Zaire and the River Congo became
            the River Zaire following a military takeover. The country reverted
            to the Democratic Republic of Congo in 1997.
          </li>
        </ul>
      </div>
    </div>
  )
}