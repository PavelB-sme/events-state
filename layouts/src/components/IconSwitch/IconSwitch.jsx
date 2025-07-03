import './IconSwitch.css'

function IconSwitch ({stateIcon, onSwitch}) {
  
  return (
    <>
      <span 
        onClick={() => onSwitch(stateIcon)} 
        className={"material-icons icons"}
        style={{ 
        cursor: 'pointer',
        fontSize: '40px', 
        userSelect: 'none',
        position: 'absolute',
        top: 20,
        right : 0
      }}
        
      >
        {stateIcon}
      </span>
    </>
  )
}

export default IconSwitch