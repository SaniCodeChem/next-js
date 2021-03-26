import { GetStaticProps } from 'next';
import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

type NinjasProps = {
  ninjas: [
    {
      id: number;
      name: string;
      username: string;
      email: string;
      address: {
        street: string;
        city: string;
      };
      phone: string;
    }
  ];
};

export const getStaticProps: GetStaticProps<NinjasProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }: NinjasProps) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
