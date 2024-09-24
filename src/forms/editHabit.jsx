import { Switch, Form, Dropdown, Space } from 'antd';
import styles from './form.module.css';
import { DownOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
const EditHabit = ({ habit, setTargetId, setShowConfirm }) => {
   const [weighted, setWeighted] = useState(habit.isweighted)
   const [form] = Form.useForm();

   const handleDelete = (id) => {
      setTargetId(id)
      setShowConfirm(true);
   }


   const onSubmit = async () => {

   };

   const items = [
      {
         label: "Minutes",
         key: '0',
         onClick: () => {}
      },
      {
      label: "Hours",
      key: '1',
      onClick: () => {}
      },
      {
         label: "Attempts",
         key: '2',
         onClick: () => {}
      },
      {
         label: "Rounds",
         key: '3',
         onClick: () => {}
      },
      {
         label: "Cycles",
         key: '4',
         onClick: () => {}
      },
      {
         label: "Pages",
         key: '5',
         onClick: () => {}
      },
      {
         label: "Commits",
         key: '6',
         onClick: () => {}
      },
      {
         label: "Sessions",
         key: '7',
         onClick: () => {}
      }
    ];

   useEffect(() => {
      setWeighted(habit.isweighted)
   }, [habit])

   return(
      <Form
         form={form}
         name="edit-habit-form"
         onFinish={onSubmit}>

         <Form.Item
            name="Weighted">
            <Space>
               {weighted ? 'Unweighted' : 'Weighted'}  
            </Space>
            <Switch 
               onChange={() => {
                  setWeighted(!weighted)
               }}
            />
         </Form.Item>

         {weighted && (
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
         )}

         <button className={styles.btn} htmltype="submit">
               Save
         </button>
         <button className={styles.btn} onClick={()=>handleDelete(habit.id)}>Delete</button>
      </Form>    
   )
};
export default EditHabit;