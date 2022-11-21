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
      <Link href="#" passHref legacyBehavior>
        <Dropdown.Item
           className={styles.links} >{itemTwo}
        </Dropdown.Item>
      </Link>
      <Link href="#" passHref legacyBehavior>
        <Dropdown.Item
        className={styles.links} >{itemThree}
        </Dropdown.Item>
      </Link>
      </div>
    </DropdownButton>
  );
}

export default DropDown;