import { CaretDownFilled } from '@ant-design/icons';
import { Dropdown} from 'antd';
import style from '../style.module.css';

export const IntensitySelect = ({ intensity, setIntensityIndex }) => {

    const items = [
        {
            label: "Light",
            key: '0',
            onClick: () => {
                setIntensityIndex(1)
            }
        },
        {
            label: "Medium",
            key: '1',
            onClick: () => {
                setIntensityIndex(6)
            }
        },
        {
            label: "Heavy",
            key: '2',
            onClick: () => {
                setIntensityIndex(11)
            }
        },
        {
            label: "Gogins",
            key: '3',
            onClick: () => {
                setIntensityIndex(16)
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
                    <div className={style.arrow}>
                        <CaretDownFilled/>
                    </div>
                </div>  
            </a>
        </Dropdown>
    )
};