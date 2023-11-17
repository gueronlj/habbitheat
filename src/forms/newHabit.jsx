import { Button, Form, Input} from 'antd';
import { postHabit } from '../utilities/api';

const layout = {
   labelCol: {
      span: 4,
   },
   wrapperCol: {
      span: 10,
   },
   
};

const NewHabitForm = () => {
   const [form] = Form.useForm();
   const userID = 1;
   
   const onFinish = () => {
      //onsubmit
      const data =  {
         title: form.getFieldValue('title'),
         dates: [],
      }
      postHabit(data, userID)
   };

   const onReset = () => {
      form.resetFields();
   };

   return (
      <Form
         {...layout}
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
         <Button type="primary" htmlType="submit">
               Submit
         </Button>
         <Button htmlType="button" onClick={onReset}>
            Reset
         </Button>   
      </Form>
   );
};
export default NewHabitForm;