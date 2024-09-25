import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import Header from './header'
import Title from './title'
import Logo from './logo'

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Title={(titleProps) => !titleProps.collapsed ?  <Title/> : <Logo />}
      Header={Header}
    >
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout