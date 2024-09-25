import Logo from './logo'

const AuthTitle = () => {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        gap:'20px'
    }}>
        <Logo type='xlarge'/>
        <h1 style={{
          paddingTop:'20px'
        }}>Ogani</h1>
    </div>
  )
}

export default AuthTitle