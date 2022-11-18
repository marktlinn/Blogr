import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from '../styles/Nav.module.css'

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
        <Dropdown.Item 
          href="#">{itemTwo}
        </Dropdown.Item>
        <Dropdown.Item 
          href="#">{itemThree}
        </Dropdown.Item>
      </div>
    </DropdownButton>
  );
}

export default DropDown;