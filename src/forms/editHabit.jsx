import { Switch, Form, Dropdown, Space } from 'antd';
import styles from './form.module.css';
import { DownOutlined } from '@ant-design/icons';

const EditHabit = ({ habit, setHabit, setHabits }) => {
   const [form] = Form.useForm();

   const onSubmit = async () => {

   };

   const items = [
      {
          label: "Red",
          key: '0',
          onClick: () => {
             
          }
      },
      {
        label: "Green",
        key: '1',
        onClick: () => {
           
        }
      },
      {
         label: "Blu",
         key: '2',
         onClick: () => {
             
         }
      },
      {
         label: "Orange",
         key: '3',
         onClick: () => {
             
         }
      },
      {
         label: "Yellow",
         key: '4',
         onClick: () => {
             
         }
      }
    ];

   return(
      <div className={styles.formContainer}>
         <Form
            form={form}
            name="edit-habit-form"
            onFinish={onSubmit}>
               <Space>
                  Weighted  
               </Space>
            <Form.Item
               name="Weighted"
               rules={[
                  {required: true,},
               ]}>
               
               <Switch 
                 />
            </Form.Item>
            <Form.Item
               name="Units">
               <Dropdown
                  menu={{
                     items,
                  }}
                  trigger={['click']}>
                  <a onClick={(e) => e.preventDefault()}>
                     <Space>
                        Units
                     </Space>
                     <Space>
                        <DownOutlined />
                     </Space>
                  </a>
               </Dropdown>  
            </Form.Item>
            <button htmltype="submit">
                  Save
            </button>
         </Form>
      </div>
   )
};
export default EditHabit;