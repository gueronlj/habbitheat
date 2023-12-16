import { ArrowDownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import style from './style.module.css';

export const IntensitySelect = ({ intensity, setIntensityIndex }) => {

    const items = [
        {
            label: "Light",
            key: '0',
            onClick: () => {
                setIntensityIndex('Light')
            }
        },
        {
            label: "Medium",
            key: '1',
            onClick: () => {
                setIntensityIndex('Medium')
            }
        },
        {
            label: "Heavy",
            key: '2',
            onClick: () => {
                setIntensityIndex('Heavy')
            }
        },
        {
            label: "Gogins",
            key: '3',
            onClick: () => {
                setIntensityIndex('Gogins')
            }
        }
    ]

    return (
        <Dropdown
            menu={{items}}
            trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <div className={style.dropdown}>
                    <p>{intensity}</p>
                    <ArrowDownOutlined/>
                </div>  
            </a>
        </Dropdown>
    )
};