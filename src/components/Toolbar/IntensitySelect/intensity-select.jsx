import { CaretDownFilled } from '@ant-design/icons';
import { Dropdown} from 'antd';
import style from '../style.module.css';
import { useState } from 'react';
import { set } from 'date-fns';

export const IntensitySelect = ({ intensity, setIntensityIndex }) => {
    const [label, setLabel] = useState('Light')

    const items = [
        {
            label: "Light",
            key: '0',
            onClick: () => {
                setIntensityIndex(1)
                setLabel('Light')
            }
        },
        {
            label: "Medium",
            key: '1',
            onClick: () => {
                setIntensityIndex(6)
                setLabel('Medium')
            }
        },
        {
            label: "Heavy",
            key: '2',
            onClick: () => {
                setIntensityIndex(11)
                setLabel('Heavy')
            }
        },
        {
            label: "Gogins",
            key: '3',
            onClick: () => {
                setIntensityIndex(16)
                setLabel('Gogins')
            }
        }
    ]

    return (
        <Dropdown
            menu={{items}}
            trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <div className={style.dropdown}>
                    <p>{label}</p>
                    <div className={style.arrow}>
                        <CaretDownFilled/>
                    </div>
                </div>  
            </a>
        </Dropdown>
    )
};