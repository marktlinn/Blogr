import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from '../styles/Nav.module.css'
import Link from 'next/link'

interface Props {
    title: string;
    itemTwo: string;
    itemThree: string;
}

function DropDown({title, itemTwo, itemThree}: Props) {
  return (
    <DropdownButton 
      id={styles.dropdownMenuButton}
      title={title}
    >
      <div className={styles.dropItem}>
        <Dropdown.Item>
          <Link className={styles.links} href="#">{itemTwo}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
        <Link className={styles.links} href="#">{itemThree}</Link>
        </Dropdown.Item>
      </div>
    </DropdownButton>
  );
}

export default DropDown;