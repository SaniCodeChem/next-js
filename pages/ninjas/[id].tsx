import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

type Ninja = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = (await res.json()) as Ninja[];

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Ninja> = async context => {
  const params = context.params!;
  const url = `https://jsonplaceholder.typicode.com/users/${params['id']}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { ...data },
  };
};

const Details = ({ name, email, address, phone }: Ninja) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>e-mail: {email}</p>
      <p>street: {address.street}</p>
      <p>city: {address.city}</p>
      <p>phone: {phone}</p>
      <Link href="/ninjas">
        <a className={styles.btn}>Go back</a>
      </Link>
    </div>
  );
};

export default Details;
