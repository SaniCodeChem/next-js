import styles from '../../../styles/Ninjas.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Ninja } from '../../../types';
import { NextPage } from 'next';

const EditNinja: NextPage<Ninja> = ({
  name,
  email,
  street,
  city,
  phone,
  id,
}: Ninja) => {
  const [eName, setEName] = useState(name);
  const [eEmail, setEEmail] = useState(email);
  const [eStreet, setEStreet] = useState(street);
  const [eCity, setECity] = useState(city);
  const [ePhone, setEPhone] = useState(phone);

  const router = useRouter();

  const handleSumbit = (event: any) => {
    event.preventDefault();
    const graphqlQuery = {
      query: `mutation updateNinja(
      $name: String!,
      $email: String!,
      $street: String!,
      $city: String!,
      $phone: Long!,
      $id: ID!){
        
        updateNinja(input: {
          data: {
            name: $name,
            email: $email,
            street: $street,
            city: $city,
            phone: $phone
          },
          where: {
            id: $id
          }
        })
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
        name: eName,
        email: eEmail,
        street: eStreet,
        city: eCity,
        phone: ePhone,
        id,
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
        <h2>Edit Ninja:</h2>
        <label>Name:</label>
        <input
          className={styles.inp}
          type="text"
          placeholder={name}
          value={eName}
          onChange={event => setEName(event.target.value)}
        ></input>
        <label>Email:</label>
        <input
          className={styles.inp}
          type="email"
          value={email}
          onChange={event => setEEmail(event.target.value)}
        ></input>
        <label>Street:</label>
        <input
          className={styles.inp}
          type="text"
          value={street}
          onChange={event => setEStreet(event.target.value)}
        ></input>
        <label>City:</label>
        <input
          className={styles.inp}
          type="text"
          value={city}
          onChange={event => setECity(event.target.value)}
        ></input>
        <label>Phone:</label>
        <input
          className={styles.inp}
          type="number"
          value={phone}
          onChange={event => setEPhone(event.target.value)}
        ></input>
        <button className={styles.btn}>Edit NINJA</button>
      </form>
    </div>
  );
};

EditNinja.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:1337/ninjas/${query['id']}`);
  const data = await res.json();

  return {
    ...data,
  };
};

export default EditNinja;
