import { Avatar as AntdAvatar } from "antd"
import { AvatarProps } from "antd/lib"

type Props = AvatarProps & {
    name: string,
}

const CustomAvatar = () => {
    return (
        <AntdAvatar
            alt="Ogani"
            size='small'
            style={{
                backgroundColor: '#87d068',
                display: 'flex',
                alignItems: 'center',
                border: 'none'
            }}>
            OA
        </AntdAvatar>
    )
}

export default CustomAvatar