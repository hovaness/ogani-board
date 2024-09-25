import React from 'react'
import CurrentUser from './current-user'
import { Layout, Space } from 'antd'

const headerStyles : React.CSSProperties = {
  backgroundColor: '#1C1C1C',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 24px',
  position: 'sticky',
  top:0,
  zIndex:999
}

const Header = () => {
  return (
    <Layout.Header style={headerStyles}>
      <Space align='center' size='middle'>
        <CurrentUser/>
      </Space>
    </Layout.Header>
  )
}

export default Header