import styles from './page.module.css'
import { Button } from "@mantine/core";


export default function Home() {
  return (
    <div className="">
      hello next js <Button className={styles.btn}>Click me</Button>
    </div>
  );
}
