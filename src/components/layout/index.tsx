import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import Header from './header'
import Logo from './logo'

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
    Header={Header}
    Title={(titleProps) => <ThemedTitleV2 icon = {titleProps.collapsed ? <Logo type='large'/> : <Logo type='small'/>}
     {...titleProps}  text='OGANI'/>}>
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout