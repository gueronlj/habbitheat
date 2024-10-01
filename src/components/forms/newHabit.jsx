import { Button, Form, Input} from 'antd';
import { postHabit } from '../../utilities/api';
import styles from './form.module.css';
import { useAuth0 } from '@auth0/auth0-react';

const NewHabitForm = ({ query, setShowForm }) => {
   const [form] = Form.useForm();
   const { user } = useAuth0();

   const onFinish = async () => {
      try{
         const data =  {
            title: form.getFieldValue('Title'),
            dates: [],
         }
         await postHabit(data, user.email)
         await query.refetch();
         setShowForm(false);
      } catch(e){
         console.log(e)
      }
   };

   return (
      <div className={styles.formContainer}>     
         <Form
            form={form}
            name="new-habit-form"
            onFinish={onFinish}>
            <h3>New habit</h3>
            <Form.Item
               name="Title"
               rules={[
                  {required: true,},
               ]}>
               <Input 
                  placeholder={"Enter title"}/>  
            </Form.Item>
            <button htmltype="submit">
                  Submit
            </button>
            <button onClick={() => setShowForm(false)}>
               Cancel
            </button>   
         </Form>
      </div>    
   );
};
export default NewHabitForm;