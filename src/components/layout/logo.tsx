

const Logo = ({type}:{type:'small' | 'large' | 'xlarge'}) => {
  const sizes = {
    small: 25,
    large: 50,
    xlarge: 80,
  }

  const currentSize = sizes[`${type}`]
  
  return (
    <div style={{
       display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
        <img width={currentSize } height={currentSize} src='/icons/logo-purple.svg'/>
    </div>
  )
}

export default Logo