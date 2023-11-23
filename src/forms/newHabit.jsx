import { Button, Form, Input} from 'antd';
import { postHabit } from '../utilities/api';
import styles from './form.module.css';

const NewHabitForm = ({query, setShowForm}) => {
   const [form] = Form.useForm();
   const userID = 1;
   
   const onFinish = async () => {
      try{
         const data =  {
            title: form.getFieldValue('Title'),
            dates: [],
         }
         await postHabit(data, userID)
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