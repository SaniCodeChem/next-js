import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import { useRouter } from 'next/router';
import { Ninja } from '../../../types';
// import {parseData} from '../../utils/parseData'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:1337/ninjas');
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
// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = parseData<Ninja[]>(await res.json());

//   const paths =
//     data?.map(ninja => {
//       return {
//         params: { id: ninja.id.toString() },
//       };
//     }) ?? [];

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps: GetStaticProps<Ninja> = async context => {
  const params = context.params!;
  const url = `http://localhost:1337/ninjas/${params['id']}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { ...data },
  };
};

const Details = ({ name, email, street, city, phone }: Ninja) => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div>
      <h1>{name}</h1>
      <a href="mailto: ninja-list@ninja.com">e-mail: {email}</a>
      <p>street: {street}</p>
      <p>city: {city}</p>
      <a href={`tel:${phone}`}>phone: {phone}</a>
      <Link href={`/ninjas/${id}/edit`}>
        <a className={styles.btn}>Edit</a>
      </Link>
      <Link href="/ninjas">
        <a className={styles.btn}>Go back</a>
      </Link>
    </div>
  );
};

export default Details;
