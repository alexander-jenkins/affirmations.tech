import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function PhoneInputField({ phoneNumber, setPhoneNumber }) {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  return (
    <PhoneInput
      placeholder='Enter phone number'
      defaultCountry='US'
      value={phoneNumber}
      onChange={setPhoneNumber}
    />
  );
}

export default PhoneInputField;
