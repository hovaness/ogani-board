import Logo from './logo'


const Title = ({type = 'medium'}:{type?:'medium' | 'large'}) => {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        gap:'20px',
        cursor: 'pointer'
    }}>
        <Logo type={type}/>
        <h1 style={{
          paddingTop:'20px'
        }}>HAYASA</h1>
    </div>
  )
}

export default Title