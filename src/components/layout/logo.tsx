

const Logo = ({type = 'medium'}:{type?:'medium' | 'large'}) => {
  const sizes = {
    medium: 50,
    large: 80,
  }

  const currentSize = sizes[`${type}`]
  
  return (
    <div style={{
       display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
    }}>
        <img  width={currentSize } height={currentSize} src='/icons/logo-purple.svg'/>
    </div>
  )
}

export default Logo