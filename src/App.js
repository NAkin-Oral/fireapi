import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const initialValues = { username: '', phone_number: '', gender: '' };

function App() {
  const [info, setInfo] = useState(initialValues);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);
  const mainUrl = 'https://20002.fullstack.clarusway.com/contacts/';

  useEffect(() => {
    fetch(mainUrl)
      .then(res => res.json())
      .then(array => setData(array));
  }, [flag]);

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  console.log(info);

  const handleDelete = async id => {
    try {
      const res = await axios({ method: 'delete', url: `${mainUrl}${id}/` });
      setFlag(!flag);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async id => {
    try {
      const res = await axios({
        method: 'put',
        url: `${mainUrl}${id}/`,
        data: info,
      });
      setFlag(!flag);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleContact = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: mainUrl,
        data: info,
      });
      setFlag(!flag);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (info.id) {
      handleUpdate(info.id);
      setUpdate(false);
    } else {
      handleContact();
    }
    setInfo(initialValues);
  };

  const editUser = (id, username, phone_number, gender) => {
    setUpdate(true);
    setInfo({ id, username, phone_number, gender });
  };
  console.log(info);
  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
        update={update}
        handleChange={handleChange}
      />
      <Contacts editUser={editUser} data={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
