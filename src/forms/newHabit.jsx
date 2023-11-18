import { Button, Form, Input} from 'antd';
import { postHabit } from '../utilities/api';

const NewHabitForm = ({query, setShowForm}) => {
   const [form] = Form.useForm();
   const userID = 1;
   
   const onFinish = async () => {
      try{
         const data =  {
            title: form.getFieldValue('title'),
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
      <Form
         form={form}
         name="new-habit-form"
         onFinish={onFinish}
         style={{width: 1000}}>
         <Form.Item
            name="title"
            rules={[
               {required: true,},
            ]}>
            <Input 
               placeholder={"Enter title"}/>  
         </Form.Item>
         <button htmlType="submit">
               Submit
         </button>
         <button onClick={() => setShowForm(false)}>
            Cancel
         </button>   
      </Form>
   );
};
export default NewHabitForm;