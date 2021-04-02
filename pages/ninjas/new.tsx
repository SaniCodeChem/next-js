import styles from '../../styles/Ninjas.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewNinja = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const router = useRouter();

  const handleSumbit = (event: any) => {
    event.preventDefault();
    const graphqlQuery = {
      query: `mutation createNinja(
      $name: String!,
      $email: String!,
      $street: String!,
      $city: String!,
      $phone: Long!){
        
        createNinja(input: {data: {
          name: $name,
          email: $email,
          street: $street,
          city: $city,
          phone: $phone
        }})
        {
          ninja {
            id
            name
            email
            street
            city
          }
        }
      }`,
      variables: {
        name: name,
        email: email,
        street: street,
        city: city,
        phone: phone,
      },
    };

    fetch('http://localhost:1337/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        router.push('/ninjas');
      });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSumbit} className={styles.forms}>
        <h2>New Ninja:</h2>
        <label>Name:</label>
        <input
          className={styles.inp}
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        ></input>
        <label>Email:</label>
        <input
          className={styles.inp}
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        ></input>
        <label>Street:</label>
        <input
          className={styles.inp}
          type="text"
          value={street}
          onChange={event => setStreet(event.target.value)}
        ></input>
        <label>City:</label>
        <input
          className={styles.inp}
          type="text"
          value={city}
          onChange={event => setCity(event.target.value)}
        ></input>
        <label>Phone:</label>
        <input
          className={styles.inp}
          type="number"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        ></input>
        <button className={styles.btn}>Create a new NINJA</button>
      </form>
    </div>
  );
};

export default NewNinja;
