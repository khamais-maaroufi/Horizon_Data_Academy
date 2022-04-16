
import {Select, Button, Avatar} from 'antd';
import { SaveOutlined } from "@ant-design/icons";

const {Option} = Select;

const CourseCreateForm = ({
    handleSubmit, handleImage, handleChange, values, setValues, preview
}) => {

    const children = [];
    for (let i=9.99; i <= 999; i++){
        children.push(<Option key={i.toFixed(2)}>{i.toFixed(2)} TND</Option>)
    };

return (
    <form onSubmit={handleSubmit}>

        <div className="form-group">
            <input type="text" name="name" className="form-control"
            placeholder="Enter the Name of the course..." value={values.name}
            onChange={handleChange} style={{width:"50%"}}/>
        </div>

        <div className="form-group pt-3"  >
            <textarea name="description" cols='7' rows='7' value={values.description}
            className="form-control"  onChange={handleChange} 
            placeholder="Enter the description here..."></textarea>
        </div>

        <div className="form-row pt-3">
            <div className="col">
                <div className="form-group pt-3">
                    <Select 
                    style={{width: '100'}}
                    value={values.paid}
                    size="large"
                    onChange={v => setValues({ ...values, paid: v, price: 0 })}>
                        <Option value={true}>Paid</Option>
                        <Option value={false}>Free</Option>
                    </Select>
                </div>
            </div>

            {values.paid && 
            <div className="col-md-6">
                <div className="form-group pt-3">
                    <Select
                    defaultValue="9.99 TND"
                    style={{width:"30%"}}
                    onChange={(v) => setValues({ ...values, price: v})}
                    tokenSeparators={[,]}
                    size="large"
                    >
                        {children}
                    </Select>
                </div>
            </div>}
        </div>

        <div className="form-group pt-3">
            <input type="text" name="category" className="form-control"
            placeholder="Enter category..." value={values.category}
            onChange={handleChange} style={{width:"50%"}}/>
        </div>

        <div className="form-row pt-3">
            <div className="col">
                <div className="form-group">
                    <label className="btn btn-outline-secondary btn-block text-left">
                        {values.loading ? "Uploading" : "Image Upload"}
                        <input 
                        type="file"
                        name="image"
                        onChange={handleImage}
                        accept="image/*"
                        hidden/>
                    </label>
                </div>
            </div>
            {preview && (<Avatar width={200} src={preview}/>)}
        </div>
        
        <div className="row pt-3">
            <div className="col" >
                <Button onClick={handleSubmit} disabled={values.loading || values.uploading}
                className="btn btn-primary" icon={<SaveOutlined/>}
                type="primary" size="large" shape="round">
                    {values.loading ? "Saving..." : "Save & Continue"}
                </Button>
            </div>
        </div>

    </form>
)};

export default CourseCreateForm;