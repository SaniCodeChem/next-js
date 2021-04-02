import { GetStaticProps } from 'next';
import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from './modal';
import React, { useEffect, useState } from 'react';

type NinjasProps = {
  ninjas: [
    {
      id: number;
      name: string;
      username: string;
      email: string;
      street: string;
      city: string;
      phone: string;
    }
  ];
};

export const getStaticProps: GetStaticProps<NinjasProps> = async () => {
  const res = await fetch('http://localhost:1337/ninjas');
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }: NinjasProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<number>();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSumbit = (id: any) => {
    const graphqlQuery = {
      query: `mutation deleteNinja(
      $id: ID!){
      
      deleteNinja(input: {
      where: {
        id: $id
    }
      }){
        ninja {
          name
        }
      }
    }`,
      variables: {
        id: id,
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
        setIsOpen(false);
        router.push('/ninjas');
      });
  };

  const deleteConfirmation = (id: any) => {
    setDeletingId(id), setIsOpen(true);
  };

  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <div className={styles.single}>
            <Link passHref href={'/ninjas/' + ninja.id}>
              <a>
                <h3 className={styles.link}>{ninja.name}</h3>
              </a>
            </Link>
            <div>
              <Link href={'/ninjas/' + ninja.id}>
                <button className={styles.btndel}>Details</button>
              </Link>
              <button
                className={styles.btndel}
                onClick={() => deleteConfirmation(ninja.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <Link href="/ninjas/new">
        <a className={styles.btn}>Create a new NINJA</a>
      </Link>

      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <h2>Are you sure you want to delete?</h2>
        <button
          className={styles.btnmodal}
          onClick={() => handleSumbit(deletingId)}
        >
          Yes, delete it !!!
        </button>
        <button onClick={() => setIsOpen(false)} className={styles.btnmodal}>
          No
        </button>
      </Modal>
    </div>
  );
};

export default Ninjas;
