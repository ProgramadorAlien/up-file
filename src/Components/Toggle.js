
import React from 'react';
import { Form } from 'react-bootstrap';


function Toggle() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Toggle ON"
        checked={checked}
        onChange={handleChange}
        className="custom-switch"
      />
    </Form>
  );
}


export default Toggle;