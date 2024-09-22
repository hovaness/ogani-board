import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import Header from './header'
import Logo from '../../public/icons/ogani-logo.svg'

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2 
    Header={Header}
    Title={(titleProps) => <ThemedTitleV2 {...titleProps}  text='yrartu'/>}>
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout